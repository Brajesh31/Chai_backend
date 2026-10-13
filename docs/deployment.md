# Deployment

## Status

This repository does not currently define a production start command, container image, deployment manifest, health endpoint, or deployment provider. Treat this guide as a checklist for evaluating a deployment, not a verified hosting recipe. Resolve the known defects and add automated checks before relying on the service for real users.

## Preparation checklist

- Choose a supported Node.js LTS runtime and install from the committed lockfile (`npm ci`).
- Define a production start script and a process lifecycle policy before deploying; neither is currently present in `package.json`.
- Set secrets through the hosting platform's secret store. Never commit `.env` or place credentials in build logs.
- Use a MongoDB deployment with authentication, network restrictions, backups, and an operational restore plan.
- Configure separate, high-entropy access and refresh JWT secrets, sensible expiries, and the exact trusted frontend origin.
- Use HTTPS and review cookie `Secure`, `HttpOnly`, and `SameSite` behavior for the frontend/API domain arrangement.
- Restrict and validate uploads, limit size and types, generate safe filenames, and ensure temporary files are cleaned up.
- Add centralized error handling, request validation, rate limiting, logging without secrets, and readiness/health checks.
- Verify Cloudinary access and retention expectations; avoid exposing uploaded private content unintentionally.
- Add CI tests and a deployment rollback procedure.

## Runtime configuration

The app reads `PORT`, MongoDB, CORS, JWT, and Cloudinary settings described in [installation.md](installation.md). `src/db/index.js` appends `/videotube` to the configured MongoDB URI. The entry point has an environment-file path mismatch with the development script; production should inject variables into the process environment rather than depend on a local env file.

## Verification after a future deployment setup

Before announcing a deployment, verify process startup, database connectivity, authentication, CORS and cookie behavior from the intended client, upload limits, failure handling, logs, backup/restore, and rollback. Do not expose a public endpoint until the current security and correctness issues are addressed.
