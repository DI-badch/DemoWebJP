import { dbClient } from "@di/orm-util";

export async function getAllSample() {
  return await dbClient.sample.findMany();
}
