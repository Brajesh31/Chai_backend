# Runbook: MongoDB Connection Failure

## Symptoms
- Startup logs report MongoDB connection failure.
- The server does not begin listening.
- Database operations fail due to unavailable connection.

## Diagnose
1. Confirm the MongoDB service or cluster is running.
2. Confirm `MONGODB_URI` is present and valid.
3. Confirm the URI does not already include `/videotube`, which the code appends.
4. Check DNS, network allowlists, TLS requirements, and authentication.
5. Confirm the database user has only the required privileges.
6. Check provider status and recent configuration changes.

## Recover
Restore the known-good URI or provider configuration, restart the process, and verify connection. Do not paste credentials into issue comments or logs.

## Follow-up
Record the time window, sanitized error class, root cause, and remediation. Do not include the full connection string.
