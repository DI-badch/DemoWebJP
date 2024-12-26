import "dotenv/config";
import { toSnake } from "snake-camel";

export const sdkConfig = {
  adminEmail: process.env.ADMIN_EMAIL ?? "",
  adminPassword: process.env.ADMIN_PASSWORD ?? "",
  adminURL: process.env.ADMIN_URL ?? "http://localhost:8055",
};

export const appConfig = toSnake({
  projectName: "DataImpact CMS",
  projectColor: "#3399FF",
  defaultAppearance: "dark",
  defaultThemeLight: "Directus Minimal",
  defaultThemeDark: "Directus Minimal",
  moduleBar: [
    { type: "module", id: "content", enabled: true },
    { type: "module", id: "users", enabled: true },
    { type: "module", id: "files", enabled: true },
    { type: "module", id: "settings", enabled: true, locked: true },
    { type: "module", id: "schema-management-module", enabled: true },
  ],
});

export const dbConfig = {
  host: process.env.DB_HOST ?? "postgres",
  port: process.env.DB_PORT ?? "5432",
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PASSWORD ?? "",
  database: process.env.DB_DATABASE ?? "postgres",
};
