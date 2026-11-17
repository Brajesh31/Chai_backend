# API Error Catalog

The code uses an `ApiError` helper and several HTTP status codes. This catalog summarizes current observed error intent and known defects; exact response shapes should be verified during integration testing.

| Area | Status observed / intended | Condition |
|---|---:|---|
| Registration | 400 | Required fields or avatar missing |
| Registration | 409 | Username or email already exists |
| Login | 400 | Username and email both absent |
| Login | 404 | User not found |
| Login | 401 | Password invalid |
| Protected routes | 401 | Missing or invalid access token |
| Password change | 400 | Existing password incorrect |
| Account update | 400 | Required name or email absent |
| Channel lookup | 400 / 404 | Missing username / current inverted result check |
| Refresh | 401 | Current controller rejects supplied refresh token due guard defect |
| Unexpected failures | 500 or Express default | Depends on controller and current missing centralized error handler |

## Error handling requirements for future changes
- Normalize error response shape and status semantics.
- Do not return stack traces, secrets, file paths, or raw database errors.
- Distinguish validation, authentication, authorization, not found, conflict, provider failure, and internal errors.
- Ensure async errors reach centralized middleware.
- Add tests for both expected and unexpected error paths.

This is not a guarantee of exact status codes until those paths are exercised.
