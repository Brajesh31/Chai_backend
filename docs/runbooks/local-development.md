# Runbook: Local Development Startup

## Preconditions
- Use a supported Node.js runtime and npm.
- Install dependencies using `npm ci` or `npm install`.
- Create a private `.env` from `.env.example`.
- Start a local or approved MongoDB instance.
- Configure Cloudinary credentials only when testing media uploads.

## Start
1. Verify the local MongoDB service is reachable.
2. Verify `MONGODB_URI` does not already include the database suffix, since the code appends `/videotube`.
3. Verify `CORS_ORIGIN` is the exact frontend origin.
4. Start the service with `npm run dev`.
5. Confirm the connection log and port.

## Known caveats
- The entry point calls dotenv with `./env`, while npm preloads the default `.env`. The development script's preload is the expected local path.
- There are no automated tests in the original package scripts.
- Some routes have known defects described in [troubleshooting](../troubleshooting.md).

## Stop
Use the process interrupt, verify the Node process exits, and ensure no temporary upload files are left behind.
