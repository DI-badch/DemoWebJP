import { updateSettings } from "@directus/sdk";

import { appConfig, getAuthenticatedClient } from "./libs";

const client = await getAuthenticatedClient();

export const initAppConfig = async () => {
  await client.request(updateSettings(appConfig));
  process.exit();
};

initAppConfig();
