[DI Roadmap](https://data-impact-vn.github.io/DI-roadmap/)

## Prerequisites

- [Node v20.10](https://nodejs.org/en)
- [React v18.3](https://react.dev/)
- [Pnpm v9.4](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

## Getting started

#### Clone the project

```bash
git clone <this project url>
```

#### Local Setup

Populate environment variables

```bash
cp .env.example .env.local
```

Install packages

```bash
pnpm i
```

Initialize pre-commit

```bash
pnpm prepare
```

Start the local environment

```bash
pnpm dev
```

## Git Branch Rules

#### Main Branches

| Branch                         | Development              | Staging                   | Production                                |
| ------------------------------ | ------------------------ | ------------------------- | ----------------------------------------- |
| Name                           | `develop` / `dev`        | `staging` / `stag`        | `prod` / `production` / `master` / `main` |
| Purpose                        | For develop features     | For integration testing   | For running for production                |
| Which branch can checkout from | `feature/...`/ `fix/...` | `hotfix/...`, `merge/...` | `hotfix/...`, `merge/...`                 |
| Optional                       | No                       | Yes                       | No                                        |

#### Sub Branches:

- `feature/...`: For developing feature.
- `fix/...`: For fixing something currently in develop branch.
- `hotfix/...`: For fixing something currently in staging/production.
- `merge/...`: For safe merging to staging/production.
