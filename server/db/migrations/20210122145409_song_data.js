
exports.up = function(knex) {
  return knex.schema.createTable('song_data', table => {
    table.increments('id')
    table.string('title')
    table.string('artist')
    table.string('album_title')
    table.string('writer_1_name')
    table.string('writer_1_split')
    table.string('writer_2_name')
    table.string('writer_2_split')
    table.string('writer_3_name')
    table.string('writer_3_split')
    table.string('writer_4_name')
    table.string('writer_4_split')
    table.string('writer_5_name')
    table.string('writer_5_split')
    table.string('writer_6_name')
    table.string('writer_6_split')
    table.string('writer_7_name')
    table.string('writer_7_split')
    table.string('writer_8_name')
    table.string('writer_8_split')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('song_data')
};
