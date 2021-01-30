CREATE TABLE admin (
  admin_name TEXT PRIMARY KEY,
  password TEXT NOT NULL,
  chapter_name TEXT NOT NULL,
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL
);