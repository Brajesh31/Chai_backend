# Data Dictionary

This guide describes fields visible in the current Mongoose schemas. It is not a complete data-retention or privacy policy.

## User model

| Field | Type | Required / default | Notes |
|---|---|---|---|
| `username` | String | Required, unique, lowercase, trimmed | Indexed |
| `email` | String | Required, unique, lowercase, trimmed | Account contact field |
| `fullName` | String | Required, trimmed | Indexed |
| `avatar` | String | Required | Cloudinary URL |
| `coverImage` | String | Optional | Cloudinary URL |
| `watchHistory` | ObjectId array | Empty by default | References Video documents |
| `password` | String | Required | Hashed in pre-save hook using bcrypt |
| `refreshToken` | String | Optional | Stored refresh JWT |
| `createdAt`, `updatedAt` | Date | Managed by Mongoose | Timestamps enabled |

## Video model

| Field | Type | Required / default | Notes |
|---|---|---|---|
| `videoFile` | String | Required | Media URL |
| `thumbnail` | String | Required | Thumbnail URL |
| `title` | String | Required | Video title |
| `description` | String | Required | Video description |
| `duration` | Number | Required | Duration value, unit is not specified in schema |
| `views` | Number | Default 0 | View count |
| `isPublished` | Boolean | Default true | Publication flag |
| `owner` | ObjectId | No explicit required flag | References User; source currently references an undefined `Schema` identifier |
| timestamps | Date | Managed by Mongoose | Created / updated |

## Subscription model

| Field | Type | Notes |
|---|---|---|
| `subscriber` | ObjectId | References User |
| `channel` | ObjectId | References User |
| timestamps | Date | Created / updated |

## Sensitive fields and response projections
Password hashes and refresh tokens should never be returned in API payloads. Controllers currently apply some projections, but projections are not uniform. Review every new query and response serializer for sensitive fields.

## Schema and API boundary
These schemas do not prove that corresponding API routes or business rules exist. The inspected repository currently mounts only user routes. No video or subscription route/controller was found.
