# Project Directory and File Guide

This guide documents the tracked repository as inspected. It is an Express API starter, not a complete deployed video platform.

## Root

| Path | Role |
|---|---|
| `package.json` | Node package metadata and the current `dev` script |
| `package-lock.json` | Locked npm dependency graph |
| `.env.example` | Blank environment template |
| `.env.sample` | Existing sample file; inspect locally before use |
| `.gitignore` | Excludes environment files and generated items |
| `.editorconfig` | Editor consistency |
| `.prettierrc`, `.prettierignore` | Formatting configuration |
| `README.md` | Project overview, setup, routes, caveats |
| `LICENSE` | Existing license and attribution boundaries |
| `CHANGELOG.md`, `ROADMAP.md` | Change history and future planning |
| `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` | Contribution expectations |
| `SECURITY.md`, `SUPPORT.md` | Security and support procedures |
| `CITATION.cff`, `CODEOWNERS` | Citation and ownership metadata |

## Source tree

| Path | Role |
|---|---|
| `src/index.js` | Environment loading, database connection, HTTP listener |
| `src/app.js` | Express instance, middleware, user-router mount |
| `src/constants.js` | Fixed MongoDB database name |
| `src/db/index.js` | Mongoose connection |
| `src/routes/user.routes.js` | User route declarations |
| `src/controllers/user.controller.js` | User account, token, profile, and history logic |
| `src/middlewares/auth.middleware.js` | JWT authentication |
| `src/middlewares/multer.middleware.js` | Temporary multipart upload handling |
| `src/models/user.model.js` | User schema, password hashing, token methods |
| `src/models/video.model.js` | Video schema and aggregate pagination plugin |
| `src/models/subscription.model.js` | Subscriber/channel relation |
| `src/utils/ApiError.js` | Error response helper |
| `src/utils/ApiResponse.js` | Standard response helper |
| `src/utils/asyncHandler.js` | Async controller wrapper |
| `src/utils/cloudinary.js` | Cloudinary upload and local cleanup |

## Documentation

- `docs/architecture.md`, `api.md`, `database.md`: system and contract reference.
- `docs/installation.md`, `development.md`, `deployment.md`: setup and operations.
- `docs/security.md`, `observability.md`, `performance.md`, `backup-recovery.md`: backend operational guidance.
- `docs/diagrams/`: editable Mermaid source diagrams.
- `docs/runbooks/`: incident and operational procedures.
- `docs/templates/`: reusable technical review templates.

## GitHub automation
The `.github/` directory contains issue forms, discussion templates, pull request template, CI workflow, and dependency update configuration when present.

## Important absences
The current tracked source does not include video or subscription route/controller files, application tests, a production start command, a container definition, a health endpoint, or deployment manifests. A model schema does not imply a working API feature.
