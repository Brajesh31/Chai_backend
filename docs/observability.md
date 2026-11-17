# Logging, Monitoring, and Observability

## Current state
The code uses console logging for database status and errors. Login also logs the submitted email. There is no structured logger, request correlation ID, metrics endpoint, health endpoint, tracing, or error-reporting integration.

## Recommended controls
- Remove authentication and personal-data logging.
- Log method, route template, status code, duration, and correlation ID only where appropriate.
- Redact authorization headers, cookies, passwords, tokens, file paths, and Cloudinary credentials.
- Emit structured logs with consistent severity levels.
- Separate operational errors from expected validation failures.
- Monitor database connection state and process restarts.
- Define retention and access controls for logs.

## Health checks
No health route currently exists. Define readiness before adding one, for example HTTP process ready and MongoDB connection established. Never return internal connection strings, hostnames, or credentials in public responses.

## Metrics
Potential metrics include request rate, status distribution, latency, upload failures, database operation latency, and authentication failure counts. Do not use raw email, username, tokens, or user IDs as metric labels.

## Alerting
Define actionable alerts for process unavailability, repeated database failures, elevated 5xx rate, upload-provider outage, and abnormal authentication failures. Set thresholds from observed baselines.

## Incident response
Use the operational runbooks and [SECURITY.md](../SECURITY.md). Preserve evidence according to policy without copying secrets into incident notes.
