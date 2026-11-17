# 🧪 Backend Test Strategy

The current repository originally had no test runner or test script. This guide records the intended testing layers to implement in follow-up code work.

## Unit tests
- Token helpers and authentication middleware behavior.
- ApiError, ApiResponse, asyncHandler.
- Validation and normalization utilities.
- File naming, upload validation, and cleanup helpers.

## Integration tests
- Registration, login, logout, refresh, password update.
- Authenticated profile updates and channel lookup.
- Watch-history aggregation against disposable MongoDB.
- Cloudinary adapter behavior using a mock provider.

## Negative and security tests
- Missing, malformed, expired, and revoked tokens.
- Missing Authorization header.
- Invalid or oversized uploads.
- Unsupported file types.
- Provider timeout and cleanup failure.
- Duplicate username/email.
- Authorization boundary and sensitive-field projection.
- No credentials or token values emitted in responses/logs.

## Test data
Use synthetic records, generated tokens, local fixture files, and isolated test database names. Never use production exports.

## Current scripts
`package.json` still has only the `dev` script. Do not run `npm test` until a test runner and matching script are added.
