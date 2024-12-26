import { createDirectus, authentication, rest } from "@directus/sdk";

import { sdkConfig } from "./configs";

export const getAuthenticatedClient = async () => {
  const client = createDirectus(sdkConfig.adminURL)
    .with(authentication())
    .with(rest());
  await client.login(sdkConfig.adminEmail, sdkConfig.adminPassword);

  return client;
};
