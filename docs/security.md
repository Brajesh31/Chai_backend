# Security Review and Hardening Guide

## Scope
This document describes controls visible in the current Express backend and work required before operating it with real accounts or uploads. It is not a penetration-test report or security certification.

## Current mechanisms
- Passwords are hashed by a Mongoose pre-save hook using bcrypt.
- Access and refresh tokens use separate environment variables.
- Login sets access and refresh cookies with `httpOnly` and `secure`.
- Protected routes use `verifyJWT`.
- CORS uses `CORS_ORIGIN` with credentials enabled.
- JSON and URL-encoded request bodies are limited to 16 KB.

## Material concerns found in source review
1. Login logs the submitted email and returns raw access and refresh tokens in its JSON response as well as cookies.
2. Refresh-token guard rejects a token when one is present.
3. Auth middleware calls `req.header("Authorization").replace(...)` without safely handling a missing header.
4. Multer saves uploads under the original filename, without configured MIME/type or size limits.
5. Cloudinary cleanup calls `fs.unlinkSync` in both success and catch paths. Failed upload cleanup can itself throw.
6. Logout does not await the database update that unsets the stored refresh token.
7. Password change disables validation and has no visible password policy validation.
8. No rate limiter, centralized error middleware, request schema validation, or security-header middleware is registered in `src/app.js`.
9. CORS and cookie SameSite/domain behavior need review for the actual frontend/API topology.
10. Temporary upload cleanup, retention, and abuse controls are not documented in code.

## Minimum release blockers
- Fix and test refresh-token rotation and revocation.
- Do not log credentials, tokens, or personal account values.
- Avoid returning raw tokens in JSON when cookie-based auth is the chosen design.
- Handle missing/malformed Authorization headers safely.
- Add request validation, password policy, login throttling, and security headers.
- Enforce upload ceilings, content-type verification, generated filenames, and safe cleanup.
- Add centralized error handling without stack traces or secret leakage.
- Validate CORS and cookie settings against the actual frontend domain arrangement.
- Review token lifetime, secret rotation, invalidation, and storage policy.
- Add authentication, authorization, upload, and failure-path tests.

## Secret handling
Use local untracked environment files and host-managed secrets. Do not commit `.env`, database passwords, JWT secrets, Cloudinary credentials, or exported token values. Rotate any credential if it was exposed.

## Reporting
Use [SECURITY.md](../SECURITY.md) for private vulnerability reports. Never include live tokens, user records, or private database exports in a public issue.
