# Configuration Reference

The current app uses environment variables for HTTP, MongoDB, CORS, JWT, and Cloudinary settings.

| Variable | Used for | Notes |
|---|---|---|
| `PORT` | HTTP listener | Defaults to 8000 |
| `MONGODB_URI` | Database host/cluster | Code appends `/videotube` |
| `CORS_ORIGIN` | Browser origin | Exact trusted origin; credentials enabled |
| `ACCESS_TOKEN_SECRET` | Sign access JWT | Use a high-entropy private value |
| `ACCESS_TOKEN_EXPIRY` | Access JWT lifetime | Duration string used by jsonwebtoken |
| `REFRESH_TOKEN_SECRET` | Sign refresh JWT | Separate from access secret |
| `REFRESH_TOKEN_EXPIRY` | Refresh JWT lifetime | Duration string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account | Required for media upload |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Keep private |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Keep private |

## Environment file behavior
The development script preloads dotenv's default `.env`. The entry point also calls dotenv with `./env`. This mismatch should be corrected in application code in a separate reviewed change. Do not rename or add a real secret-bearing env file to the repository.

## Secret requirements
- Use separate strong JWT secrets.
- Never use example values in production.
- Store production secrets with the host's secret-management mechanism.
- Rotate secrets after exposure.
- Do not log config objects or full MongoDB URIs.

The blank `.env.example` is the safe template. Inspect `.env.sample` before using it because it is an existing repository artifact.
