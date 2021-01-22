
exports.up = function(knex) {
  return knex.schema.createTable('artist_data', table => {
    table.increments('id')
    table.string('artist_name')
    table.string('manager')
    table.string('links')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artist_data')
};
