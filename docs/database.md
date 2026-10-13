# Database

## Connection

Mongoose connects to `${MONGODB_URI}/videotube`; `videotube` is fixed in `src/constants.js`. Set the URI to the MongoDB server/cluster address without a database suffix. The connection is established before the HTTP listener starts. A connection error is logged and exits the process.

## Models

### User

`src/models/user.model.js` defines a user with unique, lowercased username and email; full name; required avatar URL; optional cover image URL; password hash; optional refresh token; and an array of Video ObjectId references as watch history. Timestamps are enabled. A pre-save hook hashes changed passwords using bcrypt, and model methods verify passwords and create JWTs.

### Video

`src/models/video.model.js` declares media URL, thumbnail, title, description, duration, views, publication status, and owner fields. It adds the aggregate pagination plugin. The owner field references `Schema.Types.ObjectId`, but `Schema` is not imported or declared in this file; model initialization may fail. The model is not currently exposed through API routes.

### Subscription

`src/models/subscription.model.js` stores a subscriber and a channel, both referencing users, with timestamps. There is no subscription router or controller in the current code.

## Collections and aggregation

Mongoose model names map to the usual lowercase plural collection names (`users`, `videos`, `subscriptions`). Channel profile aggregation joins subscriptions to calculate subscriber counts and whether the current user subscribes. Watch history joins video records and selected owner fields. The channel controller currently has an inverted result check that rejects a nonempty result.

## Development and data safety

Use a disposable local database and non-sensitive test records. Back up data before schema changes. No migration framework or seed script is currently defined. Document any required migration and rollback steps with schema changes; never place real database exports in the repository.
