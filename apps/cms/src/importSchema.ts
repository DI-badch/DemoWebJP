import fs from "fs";
import { getAuthenticatedClient } from "./libs";
import { schemaDiff, schemaApply } from "@directus/sdk";

const loadSchema = () => {
  const filePath = "./schema.json";
  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    let dataModel;
    try {
      dataModel = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return;
    }

    try {
      await importSchema(dataModel);
    } catch (e) {
      console.error("Error while importing schema: ", e);
    } finally {
      process.exit();
    }
  });
};

const importSchema = async (dm: any) => {
  const client = await getAuthenticatedClient();
  const diff = await client.request(schemaDiff(dm.data));
  await client.request(schemaApply(diff));
};

loadSchema();
