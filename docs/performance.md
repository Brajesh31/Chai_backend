# Performance and scalability notes

## Current architecture
The application is a single Express process backed by MongoDB. The code uses Mongoose queries and aggregation pipelines for channel profile and watch history. There is no measured load-test baseline, cache, queue, worker process, or production deployment configuration.

## Potential bottlenecks
- Aggregation query cost for channel and watch history.
- Missing or insufficient MongoDB indexes for query patterns.
- Large video uploads and Cloudinary transfer time.
- Memory and CPU use during multipart handling.
- Unbounded or expensive list queries if future video routes are added.
- Lack of request timeouts, rate limiting, and backpressure policy.

## Before optimizing
1. Establish representative synthetic load scenarios.
2. Capture latency percentiles and resource usage.
3. Inspect query plans and index use.
4. Measure upload size and transfer behavior.
5. Define service-level objectives from real requirements.
6. Re-test correctness and security after changing query logic.

## Safe scaling steps
Add pagination for collection endpoints, enforce upload ceilings, create indexes based on measured query plans, use bounded worker queues for expensive processing, and apply caching only where invalidation semantics are clear.

## Important boundary
No throughput or capacity claim is published because this repository has no measured benchmark results.
