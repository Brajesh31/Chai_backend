# Security Policy

## Supported versions

No release or support matrix is currently published. Security fixes should be reported against the current default branch. This project is educational and has not been assessed as production-ready.

## Reporting a vulnerability

Please do not publish exploit details, tokens, credentials, or private user data in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact route listed on the GitHub profile. Include the affected file or endpoint, impact, reproduction steps, and a safe way to follow up. A maintainer will acknowledge the report and coordinate a fix and disclosure when possible; no response-time guarantee is made.

If a report is not sensitive, ordinary bugs can be opened as public issues. Do not send real secrets as proof.

## Current security considerations

- Keep MongoDB and Cloudinary credentials and JWT signing secrets private; rotate any credential that was accidentally exposed.
- Configure a specific trusted `CORS_ORIGIN`; the existing `.env.sample` uses a broad wildcard and should not be treated as a secure deployment configuration.
- Multer currently writes original filenames under `public/temp` and does not set size or MIME-type limits. Do not expose this configuration to untrusted uploads without hardening it.
- Login logs the submitted email, and token values are returned in the JSON response as well as cookies. Avoid logging or persisting authentication responses.
- Cookie settings are `httpOnly` and `secure`; validate HTTPS, SameSite policy, and cross-origin behavior for the actual deployment.
- The application currently lacks a centralized error handler and request rate limiting.
- Check the source and dependencies before deploying; these notes are not a security audit or assurance.
