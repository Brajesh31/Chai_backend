# Chai Backend

A Node.js and Express API starter for a video-sharing service. The current implementation covers account registration and authentication, profile updates, Cloudinary-backed avatar and cover uploads, channel summaries, and a watch-history query. The repository also contains video and subscription Mongoose models, but it does not yet expose video or subscription routes.

This repository appears to be a tutorial-derived project. Its existing package metadata names `Rishabh` as author and declares `ISC`; this handbook was prepared by Brajesh Kumar (`@brajesh31`). See [LICENSE](LICENSE) for the deliberately limited scope of the new MIT grant. Do not assume that this documentation grant changes the ownership or license of pre-existing source, assets, or third-party dependencies.

## Project status

This is an educational, in-progress backend rather than a production-ready service. The audit found implementation defects in refresh-token handling, account updates, channel lookup, and the video schema's `Schema` reference. There are no test, lint, or build scripts in `package.json`. Read [docs/architecture.md](docs/architecture.md) and [docs/troubleshooting.md](docs/troubleshooting.md) before extending the API.

## Technology

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

## Documentation

- [Architecture](docs/architecture.md)
- [Installation](docs/installation.md)
- [Development](docs/development.md)
- [Deployment](docs/deployment.md)
- [API reference](docs/api.md)
- [Database](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [FAQ](docs/faq.md)

## Contributing and support

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a change. Use [SECURITY.md](SECURITY.md) for private vulnerability reports and [SUPPORT.md](SUPPORT.md) for project questions. The [ROADMAP.md](ROADMAP.md) is a planning document, not a promise of delivery dates.

## License

The newly authored handbook and repository guidance listed in [LICENSE](LICENSE) are offered under MIT by Brajesh Kumar (`@brajesh31`). That notice does not grant rights over existing code or third-party material; see the license file for the exact scope.

Last updated: 2026-10-22 18:19 UTC
