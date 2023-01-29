# BoilerPlate

### React JS, Fluent UI, Social Authentication

## Local setup

- `npm i --legacy-peer-deps` - install node modules
- `npm start` - start the project

## Env variants

- `npm start` or `npm run start:dev` - starts the development server with `.env.dev` configuration.
- `npm run start:prod` - starts the server with `.env.prod` configuration.
- `npm run build` or `npm run build:dev` - builds the code with `.env.dev` configuration.
- `npm run build:prod` - builds the code with `.env.prod` configuration.

# Git Nomenclature

## Type

- `feat` - A new feature.
- `fix` - A bug fix.
- `docs` - Documentation only changes.
- `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor` - A code change that neither fixes a bug nor adds a feature.
- `chore` - Changes to build process or auxiliary tools and libraries such as documentation generation.

## Commit message Format

- `<type>(<token>): <subject>`
- token - `(<team_name>-<story_name>)`

### Example of a commit message:

    feat(LIVE-LIV-1): first_commit

## Branch name format

- `<type>/<token>_<subject>`
- token - `(<team_name>-<story_name>)`

### Example of a branch name:

    feat/LIVE-LIV-1_add_auth
