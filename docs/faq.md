# Frequently Asked Questions

## What does this backend do?
The current mounted router provides user registration, login/logout, token refresh, password change, current-user lookup, account/profile-image update, channel profile lookup, and watch history. Some of these routes have known implementation defects.

## Is this a complete YouTube clone?
No. User, Video, and Subscription models exist, but the inspected repository only mounts user routes. Video publishing, listing, streaming, and subscription management endpoints are not present.

## Which database is used?
MongoDB through Mongoose. The connection helper appends the fixed database name `videotube` to `MONGODB_URI`.

## Does it need Cloudinary?
Cloudinary is used by the upload helper for avatar and cover image uploads. Local startup may work without testing those flows, but uploads need valid credentials.

## Why is the port 8000?
The entry point uses `process.env.PORT || 8000`.

## Which environment file is loaded?
The dev script preloads dotenv's default `.env`, and the entry point also calls dotenv with `./env`. This inconsistency should be resolved in a future code fix.

## Are there tests?
The original package metadata has no test or lint scripts. See [testing](testing.md) for the recommended verification strategy.

## Is it production ready?
No. Auth, refresh-token handling, account update, channel lookup, upload validation, error handling, and operational controls have known gaps. Review [security](security.md) and [deployment](deployment.md).

## Where should I report a vulnerability?
Use the private reporting process in the root [SECURITY.md](../SECURITY.md). Do not post tokens or exploit details publicly.
