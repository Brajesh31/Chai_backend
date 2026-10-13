# Troubleshooting

## Server does not start

- Confirm dependencies are installed with `npm install` and run `npm run dev` from the repository root.
- The development script preloads `.env`, but `src/index.js` separately calls dotenv with `./env`. Prefer the documented `.env` file for `npm run dev`; investigate which values are loaded if starting the entry point directly.
- Confirm `PORT` is available, or unset it to use the default port 8000.

## MongoDB connection fails

- Make sure the service or cluster is reachable and the URI credentials are correct.
- Set `MONGODB_URI` to the server URI; application code appends `/videotube`.
- Check network allowlists, DNS, and database user permissions. Never paste a full connection string into a public issue.

## JWT errors

- Set distinct `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` values and valid expiry strings.
- A protected route needs a valid access token in the configured cookie or bearer header.
- Refresh currently has an inverted presence check and rejects a supplied refresh token. This is a source defect, not a client configuration issue.

## Upload or Cloudinary errors

- Confirm all Cloudinary values are supplied privately and the account accepts the asset type.
- Ensure `public/temp` exists and is writable. Upload middleware currently uses the original filename and has no explicit type or size limits.
- The uploader removes the local temporary file after the attempt; inspect Cloudinary and server logs without exposing credentials.

## Account or channel endpoint failures

- `/update-account` currently references undefined `json` in its response path.
- `/c/:username` currently throws not-found when the aggregation returns a result.
- These are known code defects; opening a pull request with a fix and regression coverage is appropriate.

## Video model import failure

The Video schema references `Schema.Types.ObjectId` without importing `Schema`. Fix the schema declaration and verify importing the model before building video routes.

## Browser cannot use cookies

Configure `CORS_ORIGIN` to the exact frontend origin, send credentials from the client, use HTTPS where secure cookies are expected, and review SameSite/domain settings. A wildcard origin is incompatible with credentialed browser CORS.
