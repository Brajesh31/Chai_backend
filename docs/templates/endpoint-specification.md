# Endpoint Specification

## Identity
- Method: [GET/POST/PATCH/DELETE]
- Path: [ ]
- Router prefix: [ ]
- Authentication: [Public / access token / other]
- Authorization rule: [ ]

## Purpose
[Single responsibility.]

## Request
- Content-Type: [ ]
- Path parameters: [ ]
- Query parameters: [ ]
- Headers: [ ]
- Body fields: [ ]
- Multipart field names and constraints: [ ]

## Validation
[Required, type, length, format, normalization, file limits.]

## Responses
| Status | Meaning | Response shape |
|---|---|---|
| 2xx | Success | [ ] |
| 400 | Invalid input | [ ] |
| 401 | Unauthenticated | [ ] |
| 403 | Forbidden | [ ] |
| 404 | Missing resource | [ ] |
| 409 | Conflict | [ ] |
| 5xx | Unexpected failure | [ ] |

## Data access
[Models, indexes, transaction expectations.]

## Security
[Rate limiting, authorization, sensitive fields, audit logging.]

## Tests
[Success, invalid input, missing auth, unauthorized owner, provider failure.]
