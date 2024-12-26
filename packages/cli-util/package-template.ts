export const nextPackageJson = {
  version: "0.0.0",
  private: true,
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start",
    lint: "next lint",
  },
  dependencies: {
    react: "19.0.0-rc-69d4b800-20241021",
    "react-dom": "19.0.0-rc-69d4b800-20241021",
    next: "15.0.1",
  },
  devDependencies: {
    "@di/eslint-config": "workspace:*",
    "@di/typescript-config": "workspace:*",
    typescript: "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    postcss: "^8",
    tailwindcss: "^3.4.1",
    eslint: "^8",
    "eslint-config-next": "15.0.1",
  },
};

export const nodePackageJson = {
  version: "0.0.0",
  type: "module",
  main: "index.ts",
  scripts: {
    lint: "eslint --ext .ts .",
    "build-orm": "turbo run build --filter=@di/orm-util --no-cache",
    dev: "pnpm build-orm && tsx watch index.ts",
  },
  devDependencies: {
    "@di/eslint-config": "workspace:*",
    "@di/orm-util": "workspace:*",
    "@di/typescript-config": "workspace:*",
    "@types/node": "^22.8.1",
    "pino-pretty": "^11.3.0",
    tsx: "^4.19.2",
  },
  dependencies: {
    dotenv: "^16.4.5",
    fastify: "^5.0.0",
  },
};

export const reactPackageJson = {
  version: "0.0.0",
  private: true,
  type: "module",
  scripts: {
    build: "tsc && vite build",
    dev: "vite",
    typecheck: "tsc --noEmit",
    lint: "eslint src/",
  },
  dependencies: {
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  },
  devDependencies: {
    "@di/eslint-config": "workspace:*",
    "@di/typescript-config": "workspace:*",
    "@types/react": "^18.2.62",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    typescript: "5.5.4",
    vite: "^5.4.11",
  },
};
