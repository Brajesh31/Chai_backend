<div align="center">

# ☕ Chai Backend

### Node.js · Express 5 · MongoDB · JWT · Cloudinary

[![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![License](https://img.shields.io/badge/Documentation-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Educational%20Backend-orange)](ROADMAP.md)

</div>

A Node.js and Express API starter for a video-sharing service. The current implementation covers account registration and authentication, profile updates, Cloudinary-backed avatar and cover uploads, channel summaries, and a watch-history query. The repository also contains video and subscription Mongoose models, but it does not yet expose video or subscription routes.

This repository appears to be a tutorial-derived project. Its existing package metadata names `Rishabh` as author and declares `ISC`; this handbook was prepared by Brajesh Kumar (`@brajesh31`). See [LICENSE](LICENSE) for the deliberately limited scope of the new MIT grant. Do not assume that this documentation grant changes the ownership or license of pre-existing source, assets, or third-party dependencies.

## 🧭 Contents

- [Project overview](#project-overview)
- [Project status](#project-status)
- [Architecture](#architecture)
- [Routes](#implemented-routes)
- [Setup](#quick-start)
- [Documentation](#documentation)
- [Development checks](#development-and-quality-checks)
- [Known gaps](#known-implementation-and-security-gaps)
- [Contributing](#contributing-and-support)

## Project overview

Chai Backend is a JavaScript ES-module API starter for a video-sharing application. It currently provides user/account flows and profile-media handling. The repository includes Video and Subscription models, but the corresponding public API flows have not yet been implemented.

## 🚦 Project status

This is an educational, in-progress backend rather than a production-ready service. The audit found implementation defects in refresh-token handling, account updates, channel lookup, and the video schema's `Schema` reference. There are no test, lint, or build scripts in `package.json`. Read [docs/architecture.md](docs/architecture.md) and [docs/troubleshooting.md](docs/troubleshooting.md) before extending the API.

## 🏗️ Architecture

![System architecture](docs/diagrams/system-architecture.mmd)

The request flow is:

```text
Client -> Express app -> user router -> middleware -> controller
       -> Mongoose / MongoDB
       -> Cloudinary for image uploads
```

See [architecture](docs/architecture.md), [data model](docs/database.md), and [diagrams](docs/diagrams/README.md).

## 🧰 Technology

- Node.js with ECMAScript modules
- Express 5
- MongoDB through Mongoose
- JWT access and refresh tokens, with bcrypt password hashing
- Multer for temporary multipart uploads
- Cloudinary for uploaded media
- Prettier and Nodemon for local development

## Requirements

- A currently supported Node.js LTS release and npm
- A MongoDB server or MongoDB Atlas database
- Cloudinary credentials for registration and profile image uploads
- A frontend origin if browser requests use cookies

## Quick start

1. Clone the repository and enter its directory.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env` and fill in local configuration. Keep real credentials out of Git.
4. Start MongoDB and configure `MONGODB_URI` without a database-name suffix; the application appends `/videotube`.
5. Run `npm run dev`.
6. The API listens on port `8000` by default. The user router is mounted at `/api/v1/users`.

See [docs/installation.md](docs/installation.md) for environment details and [docs/development.md](docs/development.md) for the current scripts and contribution workflow.

## Implemented routes

All paths below are mounted below `/api/v1/users`.

| Method | Path | Authentication | Purpose |
| --- | --- | --- | --- |
| POST | `/register` | No | Register with multipart `avatar`; optional `coverImage` |
| POST | `/login` | No | Authenticate with username or email and password |
| POST | `/logout` | Access token | Clear the session cookies and stored refresh token |
| POST | `/refresh-token` | Refresh token intended | Request replacement tokens; current handler has a known guard defect |
| POST | `/change-password` | Access token | Change password using `oldPassword` and `newPassword` |
| GET | `/current-user` | Access token | Return the authenticated user |
| PATCH | `/update-account` | Access token | Update `fullName` and `email`; current controller has a known response defect |
| PATCH | `/avatar` | Access token | Upload one `avatar` file |
| PATCH | `/cover-image` | Access token | Upload one `coverImage` file |
| GET | `/c/:username` | Access token | Fetch a channel profile; current controller has a known result-check defect |
| GET | `/history` | Access token | Return the user's watched video records |

The authentication middleware reads an access token from a cookie or an Authorization bearer header. Request and response examples, observed behavior, and limitations are in [docs/api.md](docs/api.md).

## Configuration and secrets

`.env.example` is a safe starting template with blank credential fields. The checked-in `.env.sample` is an existing project file and may not be a reliable template; inspect it locally and do not copy any real credentials into issues, commits, or logs. The entry point currently loads `./env`, while the npm development script preloads dotenv's default `.env`. Use `.env` for the dev script and resolve this mismatch before relying on alternate startup methods.

## 📚 Documentation

- [Architecture](docs/architecture.md)
- [Installation](docs/installation.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [API reference](docs/api.md)
- [Database](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)
- [Security review](docs/security.md)
- [Authentication and sessions](docs/authentication.md)
- [Configuration reference](docs/configuration.md)
- [Data dictionary](docs/data-dictionary.md)
- [API error catalog](docs/api-error-catalog.md)
- [Testing and verification](docs/testing.md)
- [Observability](docs/observability.md)
- [Performance](docs/performance.md)
- [Backup and recovery](docs/backup-recovery.md)
- [Directory structure](docs/directory-structure.md)
- [Runbooks](docs/runbooks/README.md)
- [Templates](docs/templates/README.md)

## 🧪 Development and quality checks

The original package exposes only `npm run dev`. Automated tests, lint, and production build commands have not yet been added. Use a disposable MongoDB database and synthetic accounts for manual checks. The project roadmap prioritizes automated tests and security hardening before deployment.

## ⚠️ Known implementation and security gaps

The following issues were confirmed by inspecting the current source:

1. Refresh-token handling rejects a supplied token.
2. Account update uses an undefined `json` reference.
3. Channel lookup contains an inverted aggregation-result check.
4. The Video schema references `Schema` without importing it.
5. Auth middleware can fail when the Authorization header is missing.
6. Login logs the email and returns raw tokens in the JSON body as well as cookies.
7. Multer has no explicit size/type limits and saves using original filenames.
8. No centralized error middleware or rate limiter is registered.
9. The app has a dotenv path mismatch between the entry point and dev script.
10. No video/subscription routes, production command, container, health check, or deploy manifest exist.

Read [security](docs/security.md) and [troubleshooting](docs/troubleshooting.md) before exposing this service publicly.

## 🤝 Contributing and support

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a change. Use [SECURITY.md](SECURITY.md) for private vulnerability reports and [SUPPORT.md](SUPPORT.md) for project questions. The [ROADMAP.md](ROADMAP.md) is a planning document, not a promise of delivery dates.

## License

The newly authored handbook and repository guidance listed in [LICENSE](LICENSE) are offered under MIT by Brajesh Kumar (`@brajesh31`). That notice does not grant rights over existing code or third-party material; see the license file for the exact scope.

Last updated: 2026-11-17 11:18 UTC
