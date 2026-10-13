# Installation

## Prerequisites

- Node.js LTS with npm
- Git
- A MongoDB server reachable from the development machine
- A Cloudinary account only if testing registration or profile-image uploads

## Setup

1. Clone this repository and change into its directory.
2. Install the locked dependencies:

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env` and set local values. Keep `.env` private.
4. Start MongoDB. The connection code appends `/videotube` to `MONGODB_URI`; for local MongoDB, the example URI is `mongodb://127.0.0.1:27017`.
5. Run the development server:

   ```sh
   npm run dev
   ```

The default port is 8000. The development script uses Nodemon and preloads dotenv, while `src/index.js` also calls `dotenv.config({ path: './env' })`. Keep `.env` as the expected development file and note this path mismatch if starting the app another way.

## Environment variables

| Name | Purpose | Example / notes |
| --- | --- | --- |
| `PORT` | HTTP port | `8000` |
| `MONGODB_URI` | MongoDB server URI, without the database suffix | Local example in `.env.example` |
| `CORS_ORIGIN` | Allowed browser origin | Use the exact frontend origin; do not use `*` with credentialed cookies |
| `ACCESS_TOKEN_SECRET` | Access JWT signing key | Generate a private, high-entropy value |
| `ACCESS_TOKEN_EXPIRY` | Access JWT lifetime | `15m` is a template value |
| `REFRESH_TOKEN_SECRET` | Refresh JWT signing key | Generate a separate private value |
| `REFRESH_TOKEN_EXPIRY` | Refresh JWT lifetime | `10d` is a template value |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name | Required for media uploads |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Required for media uploads |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Required for media uploads; keep private |

## Verify the setup

The app should log a successful MongoDB connection and start listening. There are no automated test or health-check scripts at present. `npm run dev` is the only script declared in `package.json`. A successful start does not establish that every route works; consult [api.md](api.md) and [troubleshooting.md](troubleshooting.md).

## Common setup failures

- Mongo connection failures: confirm MongoDB is running, the URI is reachable, and network access is allowed.
- JWT signing errors: ensure both token secrets are set and expiry values use a supported duration format.
- Upload failures: confirm Cloudinary credentials and that `public/temp` is writable.
- Browser cookie failures: configure the exact frontend origin and use HTTPS for secure cookies outside local setups.
