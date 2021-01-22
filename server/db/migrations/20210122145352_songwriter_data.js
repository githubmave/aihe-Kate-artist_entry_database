
exports.up = function(knex) {
  return knex.schema.createTable('songwriter_data', table => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('phone')
    table.string('email')
    table.string('publisher')
    table.string('artist_name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('songwriter_data')
};
