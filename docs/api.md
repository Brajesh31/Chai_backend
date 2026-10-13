# API Reference

## Base path and conventions

The Express app mounts user routes at `/api/v1/users`. JSON parsing is configured up to 16 KB; registration and profile-image routes accept multipart form data. Authentication uses an access JWT from the `accessToken` cookie or an Authorization bearer header (see `src/middlewares/auth.middleware.js`). Responses generally use the `ApiResponse` wrapper, but exact behavior varies by controller and some routes have known defects.

## Routes

| Method | Path | Auth | Inputs | Current behavior |
| --- | --- | --- | --- | --- |
| POST | `/register` | No | Multipart fields `fullName`, `email`, `username`, `password`, required file `avatar`, optional file `coverImage` | Checks duplicate username/email, uploads images, creates a user |
| POST | `/login` | No | JSON `username` or `email`, plus `password` | Verifies password; sets secure HTTP-only cookies and also returns tokens in JSON; logs submitted email |
| POST | `/logout` | Access token | None | Clears cookies and unsets stored refresh token; database update is not awaited |
| POST | `/refresh-token` | Refresh token intended | Cookie or body `refreshToken` | Current guard rejects a present token, so normal refresh is broken |
| POST | `/change-password` | Access token | JSON `oldPassword`, `newPassword` | Checks old password and saves a new hash |
| GET | `/current-user` | Access token | None | Returns request user |
| PATCH | `/update-account` | Access token | JSON `fullName`, `email` | Controller has an undefined `json` reference in its response path |
| PATCH | `/avatar` | Access token | Multipart file `avatar` | Uploads and updates avatar URL |
| PATCH | `/cover-image` | Access token | Multipart file `coverImage` | Uploads and updates cover URL |
| GET | `/c/:username` | Access token | URL parameter `username` | Aggregates channel and subscription counts; current result check incorrectly treats a result as not found |
| GET | `/history` | Access token | None | Aggregates watched videos and selected owner details |

## Authentication

The user schema creates signed access and refresh JWTs from environment variables. Login uses cookies with `httpOnly` and `secure` enabled. The JSON login payload also contains both raw tokens; clients should avoid persisting or logging them. For browser clients, send credentials and configure the exact matching CORS origin.

## Uploads

Registration expects field `avatar` and may accept `coverImage`; profile updates expect one field matching the route name. Multer currently stores files in `public/temp` under the original filename and has no configured size or MIME-type filter. Use only trusted small files in local development until this is hardened.

## Errors and limitations

`ApiError` is used by controllers, but there is no app-level error middleware. Error payloads and status behavior should be verified against the current implementation. Refresh token, account update, and channel lookup paths have defects noted above. No video or subscription routes are currently implemented, despite corresponding model files.
