# FAQ

## What does this project do?

It is an educational Express and MongoDB backend for a video-sharing application. Current HTTP routes focus on user registration, authentication, account/profile changes, channel summary, and watch history.

## Are video and subscription APIs available?

No. Model files exist, but there are no corresponding routes or controllers in the current implementation.

## Which database name should I use?

The connection code appends the fixed database name `videotube` to `MONGODB_URI`.

## Why does refresh-token fail?

The current controller rejects requests when a refresh token is present. This is a known implementation defect documented in [api.md](api.md).

## Why do profile update routes behave incorrectly?

The account update controller references an undefined `json` function, and the channel profile controller has an inverted aggregation-result check. See [troubleshooting.md](troubleshooting.md).

## Where should I put credentials?

In a local, untracked `.env` file or a deployment secret manager. Start from `.env.example`, which contains blank secret fields. Never commit credentials or share them in logs/issues.

## Can I deploy this as-is?

The repository has no production start script or deployment manifests and includes known correctness and upload-security gaps. Review [deployment.md](deployment.md) and fix those issues before exposing it to real users.

## How do I contribute?

Read [CONTRIBUTING.md](../CONTRIBUTING.md), open an issue for substantial work, and describe the validation you actually performed.
