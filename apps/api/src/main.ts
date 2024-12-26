import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import Fastify from "fastify";
import { loadFiles } from "@graphql-tools/load-files";
import { createSchema, createYoga } from "graphql-yoga";
import cors from "@fastify/cors";
import { resolvers } from "./graph/resolvers/index.ts";

export async function createApp(): Promise<FastifyInstance> {
  const loggerConfig =
    process.env.ENV === "development"
      ? {
          transport: {
            target: "pino-pretty",
            options: {},
          },
        }
      : { enabled: true };

  const app = Fastify({
    logger: {
      enabled: true,
      ...loggerConfig,
    },
  });

  const isDevelopment = process.env.ENV === "development";
  await app.register(cors, {
    origin: isDevelopment ? "*" : process.env.ALLOWED_HOSTS,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  const yoga = createYoga<{
    req: FastifyRequest;
    reply: FastifyReply;
  }>({
    schema: createSchema({
      typeDefs: await loadFiles("src/graph/schema.graphql"),
      resolvers,
    }),
    logging: {
      debug: (...args) => {
        args.forEach((arg) => {
          app.log.debug(arg);
        });
      },
      info: (...args) => {
        args.forEach((arg) => {
          app.log.info(arg);
        });
      },
      warn: (...args) => {
        args.forEach((arg) => {
          app.log.warn(arg);
        });
      },
      error: (...args) => {
        args.forEach((arg) => {
          app.log.error(arg);
        });
      },
    },
  });

  app.route({
    url: yoga.graphqlEndpoint,
    method: ["GET", "POST", "OPTIONS"],
    handler: async (req, reply) => {
      const response = await yoga.handleNodeRequestAndResponse(req, reply, {
        req,
        reply,
      });
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      reply.status(response.status);
      reply.send(response.body);
      return reply;
    },
  });

  return app;
}
