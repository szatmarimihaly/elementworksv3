import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, boolean, integer, jsonb, index, pgEnum } from "drizzle-orm/pg-core";

export const promo = pgTable("promotions", {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    promo: text("promo_code").notNull().unique()
})