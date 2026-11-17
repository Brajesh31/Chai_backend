# Runbook: Release and Rollback

## Before release
- Review the complete diff and dependency lockfile.
- Run lint, tests, and startup checks.
- Verify authentication, upload, CORS, and database behavior.
- Confirm secrets are injected outside source control.
- Back up data and confirm a restore procedure.
- Document the release commit and rollback target.

## Deploy
Follow the chosen hosting platform's approved procedure. This repository does not currently define a production start command or deployment manifest.

## Verify
Check process startup, MongoDB connectivity, expected API behavior, cookie configuration, upload handling, and logs without exposing secrets.

## Roll back
1. Shift traffic away from the faulty release.
2. Deploy the last known-good revision.
3. Restore data only when a tested migration requires it.
4. Verify application/database compatibility.
5. Record the issue and add regression tests.

A code rollback does not automatically reverse database mutations or external Cloudinary uploads.
