import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const MoodLog = pgTable("moodLog", {
  user: varchar("username").notNull(),
  userMood: varchar("userMood").notNull(),
});
