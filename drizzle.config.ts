import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  dbCredentials: {
    url: "postgresql://moddlog_owner:fdTo0bh4Jnsg@ep-icy-darkness-a59trzn4.us-east-2.aws.neon.tech/moddlog?sslmode=require",
  },
});
