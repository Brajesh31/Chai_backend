# Security Review and Hardening Guide

## Scope
This document describes security controls visible in the current Express backend and the work required before operating it with real accounts or uploads. It is not a penetration-test report or a security certification.

## Current mechanisms
- Passwords are hashed by a Mongoose pre-save hook using bcrypt.
- Access and refresh tokens are signed with separate environment variables.
- Login sets access and refresh cookies with `httpOnly` and `secure`.
- Protected routes use the `verifyJWT` middleware.
- CORS is configured with an origin read from `CORS_ORIGIN` and credentials enabled.
- Request JSON and URL-encoded bodies are limited to 16 KB.

## Material concerns found in source review
1. Login logs the submitted email and returns raw access and refresh tokens in the JSON response as well as cookies.
2. Refresh-token guard checks the wrong condition and rejects a token when one is present.
3. The auth middleware calls `req.header("Authorization").replace(...)` without safely handling a missing header.
4. Multer saves uploads using the original filename, without MIME/type or size limits.
5. Cloudinary cleanup calls `fs.unlinkSync` in both success and catch paths. A failed upload can cause a second filesystem error.
6. Logout does not await the database update that unsets the stored refresh token.
7. Password change saves with validation disabled and has no visible password policy validation.
8. No rate limiter, centralized error middleware, request schema validation, or security-header middleware is registered in `src/app.js`.
9. The CORS origin must be exact when credentials are enabled. Cookie SameSite/domain behavior is not configured explicitly.
10. Temporary upload directory cleanup, retention, and abuse controls are not documented in code.

## Minimum release blockers
- Fix and test refresh-token rotation and revoke behavior.
- Do not log credentials, tokens, or personal account values.
- Avoid returning raw tokens in JSON when cookie-based auth is the selected design.
- Handle missing/malformed Authorization headers safely.
- Add request validation, password policy, login throttling, and security headers.
- Enforce upload size limits, file-type verification, generated safe filenames, and cleanup in a finally-safe path.
- Add centralized error handling that does not leak stack traces or secrets.
- Validate CORS and cookie settings against the actual frontend origin and deployment domains.
- Review token lifetime, secret rotation, invalidation, and storage policy.
- Add tests for authentication, authorization, uploads, and failure cases.

## Secret handling
Use local untracked environment files and hosting-platform secret stores. Do not commit `.env`, API credentials, JWT secrets, database passwords, or exported token values. Rotate a credential immediately if it was exposed.

## Security reporting
Report vulnerabilities privately using the process in [SECURITY.md](../SECURITY.md). Never include live tokens, user records, or private database exports in a public issue.
