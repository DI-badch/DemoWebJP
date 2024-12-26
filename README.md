# DI Landing

A collection of applications related to official company websites.

Managed with [Turborepo](https://turbo.build/).

![image](https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg)

## Prerequisite

- [node](https://nodejs.org/en) 18 or higher.
- [pnpm](https://pnpm.io/).

## Repo Structures

The repo consists of `apps` and `packages` as main components.

### /apps

Standalone applications. Normally hosted.

- `web-vn`: Landing page for Vietnamese.
- `web-jp`: landing page for Japanese.
- `cms`: content management for internal stuffs.
- `story`: internal StoryBook design.
- `api`: public API.
- `roadmap`: internal learning roadmaps.

### /packages

Reusable packagese used by Apps.

- `**-config`: configurations.
- `**-ui`: UI components.
- `**-util`: helpers.

## Usages

### Build

- To build all apps and packages, run the following command:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

### Using An Internal Package

- Include the package into your app `package.json`.

```json
{
  "name": "@di/my-app",
  "dependencies": {
    "@di/eslint-config": "workspace:*",
    "@di/typescript-config": "workspace:*",
    "@di/my-package": "workspace:*"
  }
}
```

- Ensure package is installed to local `node_modules`.

```bash
pnpm install
```

- Import and use the package.

```js
import { myExportedAttribute } from "@di/my-package";
```

### Create A New Package
- Use CLI:
  - pnpm create-package

- Manual
  - Create new directory with one of these postfix:
    - `<my-new-package>-config`: for configurations only.
    - `<my-new-package>-ui`: for UI package.
    - `<my-new-package>-util`: for other purposes.

  - Create `package.json` as below:

```json
{
  "name": "@di/my-new-package",
  "version": "0.0.0",
  "private": true,
  "exports": {},
  "devDependencies": {
    "@di/eslint-config": "workspace:*",
    "@di/typescript-config": "workspace:*",
    "typescript": "5.5.4"
  }
}
```

  - Create `tsconfig.json` as below:

```json
{
  "extends": "@di/typescript-config/base.json",
  "compilerOptions": {},
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## FAQs

- Internal module can not be resolved.

  - Pnpm caching may keep old package version -> remove `node_modules` of current app & reinstall.
  - Local TypeScript server is not reload -> manually reload server with VSCode command: `Ctrl + Shift + P` -> `TypeScript: Restart TS Server`.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
# DemoWebJP
# DemoWebJP
