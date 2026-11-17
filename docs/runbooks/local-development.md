# Runbook: Local Development Startup

## Preconditions
- Use a supported Node.js runtime and npm.
- Install dependencies using `npm ci` or `npm install`.
- Create a private `.env` from `.env.example`.
- Start a local or approved MongoDB instance.
- Configure Cloudinary credentials only when testing media uploads.

## Start
1. Verify that MongoDB is reachable.
2. Verify `MONGODB_URI` does not already include the database suffix; code appends `/videotube`.
3. Verify `CORS_ORIGIN` is the exact frontend origin.
4. Start with `npm run dev`.
5. Confirm the DB connection log and listening port.

## Known caveats
- The entry point calls dotenv with `./env`, while npm preloads the default `.env`. The development script's preload is the expected local path.
- There are no automated tests in the original package scripts.
- Some routes have known defects described in [troubleshooting](../troubleshooting.md).

## Stop
Interrupt the process, verify the Node process exits, and ensure no temporary upload files remain.
