import knex from "knex"

export function connectDataBase(): knex.QueryBuilder {
  return knex({
    client: "pg",
    connection: process.env.DATABASE_URL
  })
}
