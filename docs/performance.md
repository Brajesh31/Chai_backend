# Performance and Scalability Notes

## Current architecture
The application is a single Express process backed by MongoDB. It uses Mongoose queries and aggregation pipelines for channel profile and watch history. There is no measured load-test baseline, cache, queue, worker process, or production deployment configuration.

## Potential bottlenecks
- Aggregation cost for channel and watch history.
- Missing or insufficient MongoDB indexes for query patterns.
- Large media uploads and Cloudinary transfer time.
- Memory and CPU use during multipart handling.
- Unbounded or expensive collection queries if video routes are added.
- Lack of timeouts, rate limiting, and backpressure policy.

## Before optimizing
1. Establish representative synthetic load scenarios.
2. Capture latency percentiles and resource usage.
3. Inspect query plans and index use.
4. Measure upload size and transfer behavior.
5. Define service-level objectives from actual requirements.
6. Re-test correctness and security after query changes.

## Safe scaling steps
Add pagination, enforce upload ceilings, create indexes based on measured query plans, use bounded queues for expensive processing, and cache only where invalidation semantics are clear.

No throughput or capacity claim is published because this repository has no measured benchmark results.
