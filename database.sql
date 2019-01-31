CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "client_organization" (
  "id" SERIAL PRIMARY KEY,
  "status" VARCHAR(20),
  "shortName" VARCHAR(100),
  "fullName" VARCHAR(200),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "client_contact" (
  "id" SERIAL PRIMARY KEY,
  "client_org_id" INT REFERENCES client_organization(id) ON DELETE CASCADE,
  "name" VARCHAR(80),
  "address" VARCHAR(200),
  "phone" VARCHAR(20),
  "email" VARCHAR(50),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "job" (
  "id" SERIAL PRIMARY KEY,
  "job_name" VARCHAR(100),
  "client_org_id" INT REFERENCES client_organization(id) ON DELETE CASCADE,
  "client_contact_id" INT REFERENCES client_contacts(id) ON DELETE CASCADE,
  "unitAcres" FLOAT,
  "estimatedHours" FLOAT,
  "typeOfWork" VARCHAR(80),
  "activity" VARCHAR(80),
  "targetSpecies" VARCHAR(80),
  "scopeDescription" VARCHAR(200),
  "contractType" VARCHAR(80),
  "contractAmount" VARCHAR(80),
  "additionalNotes"
  "purchaseOrder"
  "costs"
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "site" (
  "id" SERIAL PRIMARY KEY,
  "siteName" VARCHAR(100),
  "job_id" INT REFERENCES client_organization(id) ON DELETE CASCADE,
  "address" VARCHAR(200),
  "township" VARCHAR(80),
  "range" VARCHAR(80),
  "section" VARCHAR(80),
  "link" VARCHAR(100),
  "siteNotes" VARCHAR(1000),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "management_unit" (
  "id" SERIAL PRIMARY KEY,
  "site_id" INT REFERENCES site(id) ON DELETE CASCADE,
  "unitDescription" VARCHAR(200),
  "link" VARCHAR(200),
  "acres" FLOAT,
  "burnPerimeter" FLOAT,
  "firebreak" FLOAT,
  "fenceline" FLOAT,
  "other" FLOAT,
  "description" VARCHAR(1000),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "task" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80),
  "management_unit_id" INT REFERENCES management_unit(id) ON DELETE CASCADE,
  "description" VARCHAR(200),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
