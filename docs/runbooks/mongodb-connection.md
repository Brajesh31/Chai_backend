# Runbook: MongoDB Connection Failure

## Symptoms
- Startup reports MongoDB connection failure.
- The server does not begin listening.
- Database operations fail due to unavailable connection.

## Diagnose
1. Confirm the MongoDB service or cluster is running.
2. Confirm `MONGODB_URI` is present and valid.
3. Confirm the URI does not already include `/videotube`, which code appends.
4. Check DNS, network allowlists, TLS requirements, and authentication.
5. Confirm the database user has only required privileges.
6. Check provider status and recent configuration changes.

## Recover
Restore a known-good URI or provider configuration, restart, and verify connection. Never paste credentials into issue comments or logs.

## Follow-up
Record time window, sanitized error class, root cause, and remediation. Do not include the full connection string.
