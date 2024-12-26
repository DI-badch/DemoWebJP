import "dotenv/config";

import { createApp } from "./src/main.ts";

const app = await createApp();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = process.env.HOST ?? "0.0.0.0";

app.listen({ port, host }, () => {
  console.log(`🚀🚀🚀 Graph is running on: http://${host}:${port}/graphql`);
});
