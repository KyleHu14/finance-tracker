import { integer, text, pgTable, numeric, date } from "drizzle-orm/pg-core"

export const expense = pgTable("expense", {
	// Ids
	id: integer("id").primaryKey(),
	userId: text("user_id").notNull(),

	// Fields
	name: text("name").notNull(),
	description: text("description").default(""),
	amount: numeric("amount", { precision: 100 }).notNull(),
	date: date("date").notNull(),
})
