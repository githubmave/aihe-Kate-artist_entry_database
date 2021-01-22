
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('song_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('song_data').insert([
        {id: 1, title: 'Song 1', artist: 'Kate', album_title: 'Song 1 Album', writer_1_name: 'Kate', writer_1_split: '50%', writer_2_name: 'Roy', writer_2_split: '50%', writer_3_name: '', writer_3_split: '', writer_4_name: '', writer_4_split: '', writer_5_name: '', writer_5_split: '', writer_6_name: '', writer_6_split: '', writer_7_name: '', writer_7_split: '', writer_8_name: '', writer_8_split: '',},
        {id: 2, title: 'Song 2', artist: 'Sarah', album_title: 'Song 2 Single', writer_1_name: 'Sarah', writer_1_split: '50%', writer_2_name: 'Kienan', writer_2_split: '50%', writer_3_name: '', writer_3_split: '', writer_4_name: '', writer_4_split: '', writer_5_name: '', writer_5_split: '', writer_6_name: '', writer_6_split: '', writer_7_name: '', writer_7_split: '', writer_8_name: '', writer_8_split: '',},
      ]);
    });
};
