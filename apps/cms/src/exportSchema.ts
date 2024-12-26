import fs from "fs";
import { getAuthenticatedClient } from "./libs";
import { schemaSnapshot } from "@directus/sdk";

const exportSchema = async () => {
  const filePath = "./schema.json";
  const client = await getAuthenticatedClient();
  const schema = await client.request(schemaSnapshot());
  const schemaJson = JSON.stringify(schema, null, 2);
  fs.writeFile(filePath, schemaJson, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    }
    process.exit();
  });
};

exportSchema();
