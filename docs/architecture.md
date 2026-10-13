# Architecture

## Overview

This is a single-process Express API using MongoDB via Mongoose. The server connects to the database before starting its HTTP listener. `src/app.js` configures CORS, JSON and URL-encoded body parsing, static access to `public/`, cookie parsing, and the `/api/v1/users` router.

```text
HTTP client
  -> src/index.js (dotenv, database connection, listener)
  -> src/app.js (middleware and route mount)
  -> src/routes/user.routes.js
  -> JWT middleware / Multer middleware
  -> user controllers
  -> Mongoose models and MongoDB
  -> Cloudinary for image uploads
```

## Main components

- `src/index.js`: loads environment variables, connects to MongoDB, then listens on `PORT` or 8000.
- `src/db/index.js` and `src/constants.js`: create a Mongoose connection using `MONGODB_URI` plus the fixed database name `videotube`.
- `src/app.js`: creates the Express application and mounts middleware and user routes.
- `src/routes/user.routes.js`: declares registration, login, session, account, profile-image, channel, and history routes.
- `src/controllers/user.controller.js`: implements user operations, JWT issuance, and aggregation queries.
- `src/middlewares/auth.middleware.js`: resolves an access token and attaches the matching user to the request.
- `src/middlewares/multer.middleware.js`: stores multipart uploads temporarily in `public/temp`.
- `src/utils/cloudinary.js`: uploads temporary files to Cloudinary and attempts local cleanup.
- `src/models/`: defines User, Video, and Subscription schemas. Only user-related routes are currently mounted.

## Request and response flow

Controllers run through `asyncHandler`, which forwards rejected promises to Express. `ApiError` and `ApiResponse` provide response wrapper types, but the app does not currently install a centralized error middleware. Behavior for thrown errors therefore depends on Express's default error handling and the helper implementation. Review that path before adding production endpoints.

Passwords are hashed in a Mongoose pre-save hook. Access and refresh JWTs are created by user-model methods. The login controller sends tokens as secure, HTTP-only cookies and also includes both tokens in its JSON body. The refresh token is stored on the user record. Profile images are first written locally, then uploaded to Cloudinary.

## Known implementation gaps

Source review found that refresh-token handling rejects a present token; account update calls an undefined `json`; channel profile throws when an aggregation result exists; and the video schema references `Schema` without importing it. Multer has no explicit upload limits or file filtering. These observations describe current code and are not fixes. See [troubleshooting.md](troubleshooting.md).

## Extension guidance

Keep route declarations, controller behavior, model changes, and API documentation synchronized. Add validation and tests before widening input or upload handling. If a schema change affects existing data, document a migration and backup plan in the pull request.
