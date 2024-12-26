import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import inquirer from "inquirer";
import {
  nextPackageJson,
  nodePackageJson,
  reactPackageJson,
} from "./package-template.ts";

const program = new Command();
const __filename = fileURLToPath(import.meta.url);
const modulePath = path.dirname(__filename);

function copyRecursiveSync(src: string, dest: string) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory =
    exists && stats instanceof fs.Stats && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function createPackageJson(
  name: string | null,
  type: string,
  mode: string | null,
  folderPath: string,
) {
  let content = null;

  if (type === "package") {
    content = {
      name: `@di/${name}`,
      private: true,
      version: "0.0.0",
    };
  }

  switch (mode) {
    case "next":
      content = {
        name,
        ...nextPackageJson,
      };
      break;

    case "node":
      content = {
        name,
        ...nodePackageJson,
      };
      break;

    case "react":
      content = {
        name,
        ...reactPackageJson,
      };
      break;

    case "none":
      content = {
        name,
        version: "0.0.0",
        private: true,
      };
      break;

    default:
      break;
  }

  if (!content) {
    return;
  }

  fs.writeFileSync(
    path.join(folderPath, "package.json"),
    JSON.stringify(content, null, 2),
  );
}

program
  .name("create")
  .description("Create a new app or package for DI monorepo?")
  .action(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- The type of the prompt response is not known at compile time
    const { type }: { type: string } = await inquirer.prompt([
      {
        type: "list",
        name: "type",
        message: "Would you like to create an apps/package?",
        choices: ["app", "package"],
      },
    ]);

    let name: string | null = null;
    let mode: string | null = null;
    if (type === "app") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- The type of the prompt response is not known at compile time
      const { appName }: { appName: string } = await inquirer.prompt([
        {
          type: "input",
          name: "appName",
          message: "What is the name of the app?",
          validate: (input) => {
            if (!input) {
              return "Package name is required!";
            }
            return true;
          },
        },
      ]);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- The type of the prompt response is not known at compile time
      const { modeName }: { modeName: string } = await inquirer.prompt([
        {
          type: "list",
          name: "modeName",
          message:
            "Which mode does new app/package using? (multiple choice: none, node, react, next)",
          choices: ["none", "node", "next", "react"],
        },
      ]);

      name = appName;
      mode = modeName;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- The type of the prompt response is not known at compile time
      const { packageName }: { packageName: string } = await inquirer.prompt([
        {
          type: "input",
          name: "packageName",
          message:
            "What is the name of the package? [name-type] [e.g. eslint-config, icons-ui]",
          validate: (input) => {
            if (!input) {
              return "Package name is required!";
            }
            return true;
          },
        },
      ]);

      name = packageName;
    }

    const rootPath = path.dirname(path.dirname(process.cwd()));
    const basePath =
      type === "app"
        ? path.join(rootPath, "apps")
        : path.join(rootPath, "packages");
    const folderPath = path.join(basePath, name);

    if (fs.existsSync(folderPath)) {
      console.error(`Folder ${folderPath} already exists!`);
      return;
    }

    fs.mkdirSync(folderPath, { recursive: true });

    if (type === "package") {
      createPackageJson(name, type, null, folderPath);
      return;
    }

    switch (mode) {
      case "next": {
        const nextTemplatePath = path.join(modulePath, "templates", "next");
        copyRecursiveSync(nextTemplatePath, folderPath);
        createPackageJson(name, type, mode, folderPath);
        break;
      }

      case "node": {
        const nodeTemplatePath = path.join(modulePath, "templates", "node");
        copyRecursiveSync(nodeTemplatePath, folderPath);
        createPackageJson(name, type, mode, folderPath);
        break;
      }

      case "react": {
        const reactTemplatePath = path.join(modulePath, "templates", "react");
        copyRecursiveSync(reactTemplatePath, folderPath);
        createPackageJson(name, type, mode, folderPath);
        break;
      }

      case "none": {
        createPackageJson(name, type, mode, folderPath);
        break;
      }

      default:
        break;
    }
  });

program.parse();
