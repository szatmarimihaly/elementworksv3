CREATE TABLE "promotions" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"promo_code" text NOT NULL,
	CONSTRAINT "promotions_promo_code_unique" UNIQUE("promo_code")
);
