# Logging, monitoring, and observability

## Current state
The code currently uses console logging for database connection status and errors. Login also logs the submitted email. There is no structured logger, request correlation ID, metrics endpoint, health endpoint, tracing, or error-reporting integration.

## Immediate changes recommended
- Remove authentication and personal-data logging.
- Log request method, route template, status code, duration, and correlation ID only where appropriate.
- Redact authorization headers, cookies, passwords, tokens, file paths, and Cloudinary credentials.
- Emit structured logs with consistent severity levels.
- Separate operational errors from expected validation failures.
- Monitor database connection state and process restarts.
- Define retention and access controls for logs.

## Health checks
No health route currently exists. Before adding one, decide what readiness means, such as HTTP process ready and MongoDB connection established. Avoid returning internal connection strings, hostnames, or credentials in public responses.

## Metrics
Potential future operational metrics include request rate, status-code distribution, latency, upload failures, database operation latency, and authentication failure counts. Do not use raw email, username, tokens, or user IDs as metric labels.

## Alerting
Define actionable alerts for process unavailability, repeated database failures, elevated 5xx rate, upload-provider outage, and abnormal authentication failure rates. Set thresholds from observed baseline data rather than inventing defaults.

## Incident response
Use [the deployment and release guide](deployment.md) and [SECURITY.md](../SECURITY.md). Preserve relevant logs according to policy without copying secrets into incident tickets.
