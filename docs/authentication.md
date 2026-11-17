# Authentication and Session Design

## Current flow
The User model provides password comparison and methods to sign access and refresh JWTs. On login, the controller finds a user by username or email, verifies the password, creates both tokens, stores the refresh token in MongoDB, sets two secure HTTP-only cookies, and also returns both tokens in its JSON response.

Protected routes use `verifyJWT`. It attempts to read the access token from the cookie or an Authorization Bearer header, verifies it, retrieves the user, and attaches the document to `req.user`.

## Session data
- Access token payload: user ID, email, username, and full name.
- Refresh token payload: user ID.
- Refresh token is stored on the user document.
- Cookie options currently specify `httpOnly: true` and `secure: true`.

## Current correctness issues
- The refresh controller checks `if (incomingRefreshToken)` and throws unauthorized, making a normal supplied refresh token fail.
- The auth middleware does not safely handle an absent Authorization header before calling `replace`.
- Login emits the email to console and returns raw tokens in JSON as well as cookies.
- Logout starts the database update without awaiting it.
- Cookie SameSite and domain behavior are not explicitly configured.

## Hardening requirements
Define a consistent cookie-only or header-token strategy. Validate token presence, algorithm, expiry, issuer/audience where appropriate, rotation, reuse detection, revocation, and logout semantics. Avoid token logging and JSON duplication when cookie-based auth is selected. Use rate limits for login and password changes. Add integration tests for missing, expired, malformed, revoked, and rotated tokens.

This repository's authentication design should not be treated as security-reviewed or production-ready.
