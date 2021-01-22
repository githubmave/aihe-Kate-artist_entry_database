
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artist_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist_data').insert([
        {id: 1, artist_name: 'Kate', manager: 'Peach', links: 'https://www.youtube.com/watch?v=wp43OdtAAkM'},
        {id: 2, artist_name: 'Sarah', manager: 'Frankie', links: 'https://www.youtube.com/watch?v=g3ENX3aHlqU'},
        {id: 3, artist_name: 'Roy', manager: 'Spud', links: 'https://www.youtube.com/watch?v=_PLq0_7k1jk'},
        {id: 4, artist_name: 'Kienan', manager: 'Cat', links: 'https://www.youtube.com/watch?v=5y9nkv2luT0'},
      ]);
    });
};
