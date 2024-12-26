import { getAllSample } from "./sampleResolver.ts";

export const resolvers = {
  Query: {
    samples: () => getAllSample(),
  },
};
