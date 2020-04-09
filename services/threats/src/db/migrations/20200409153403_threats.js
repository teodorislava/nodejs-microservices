exports.up = knex =>
  knex.schema.createTable("threats", tbl => {
    tbl.increments();
    tbl.string('displayName').notNullable();
    tbl.string('necessaryPower').notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("threats");