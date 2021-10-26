import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('books', (table) => {
      table.increments('id');
      table.string('title', 255);
      table.string('author', 255);
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books');
}
