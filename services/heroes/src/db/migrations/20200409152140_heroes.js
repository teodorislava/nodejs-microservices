exports.up = knex =>
  knex.schema.createTable("heroes", tbl => {
    tbl.increments();
    tbl.string('type').notNullable();
    tbl.string('displayName').notNullable();
    tbl.string('power').notNullable();
    tbl.boolean('busy').notNullable().defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists("heroes");