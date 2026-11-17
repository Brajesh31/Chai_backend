# Development Guide

## Repository type
This is a Node.js ECMAScript-module backend using Express 5, Mongoose, JWT, bcrypt, Multer, and Cloudinary. The original package scripts expose `npm run dev` only.

## Setup
1. Install Node.js and npm.
2. Run `npm ci` to install from the committed lockfile.
3. Copy `.env.example` to `.env` and fill in local-only values.
4. Start MongoDB and verify the connection URI.
5. Run `npm run dev`.

The database connection appends `/videotube` to `MONGODB_URI`. The entry point explicitly calls dotenv with `./env`, while the dev script preloads the default `.env`; preserve this known mismatch in mind.

## Source conventions
- Keep ESM imports explicit, including `.js` extensions for relative modules.
- Keep route declarations in `src/routes`.
- Keep request handling and orchestration in controllers.
- Keep persistence behavior in Mongoose models.
- Keep cross-cutting logic in middleware.
- Keep reusable low-level helpers in `src/utils`.
- Update API, architecture, and database docs whenever behavior changes.

## Current feature boundary
Only user routes are mounted. Video and Subscription models exist, but no corresponding API controllers or routers were found in the tracked tree. Do not document unimplemented features as available.

## Current code risks
Review [troubleshooting](troubleshooting.md) and [security](security.md) before extending auth and uploads. Several current defects affect normal flows.

## Adding tests and lint
There are no original test/lint scripts. Add a test runner, configuration, scripts, and synthetic tests together in a focused change. Do not add a command in documentation until it exists in package configuration.

## Pull request hygiene
Use the PR template, describe behavior changes, include safe test evidence, update the docs, and avoid committing credentials, user records, or temporary media.
