import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(
  "postgresql://moddlog_owner:fdTo0bh4Jnsg@ep-icy-darkness-a59trzn4.us-east-2.aws.neon.tech/moddlog?sslmode=require"
);
export const db = drizzle(sql, { schema });
