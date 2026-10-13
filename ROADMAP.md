# Roadmap

This is a directional list for an in-progress educational API. Items are proposals, not commitments or release dates.

## Near-term priorities

- Add automated tests and a centralized error-handling path.
- Fix and test refresh-token rotation and session invalidation.
- Correct account-update and channel-profile response handling.
- Correct the video schema's `Schema` reference and verify model initialization.
- Add upload size/type limits, safer generated filenames, and reliable temporary-file cleanup.
- Align environment loading, CORS defaults, and documented startup behavior.

## Possible follow-up work

- Implement and document video and subscription endpoints.
- Add request validation, rate limits, structured logging, and health checks.
- Document deployment configuration and operational monitoring for a chosen host.
- Add CI checks for formatting, tests, and dependency updates.

## How to propose a change

Open an issue describing the problem, proposed behavior, and any compatibility or data migration effects. Refer to [CONTRIBUTING.md](CONTRIBUTING.md). Priorities may change as the project evolves.
