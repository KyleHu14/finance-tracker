CREATE TABLE "expense" (
	"id" integer PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text DEFAULT '',
	"amount" numeric(100) NOT NULL,
	"date" date NOT NULL
);
