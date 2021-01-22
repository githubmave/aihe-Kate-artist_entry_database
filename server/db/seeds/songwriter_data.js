
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('songwriter_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('songwriter_data').insert([
        {id: 1, name: 'Kate', address: 'New Plymouth', phone: '023 456 789', email: 'kate@kate.com', publisher: 'Songbroker', artist_name: 'Kate'},
        {id: 2, name: 'Sarah', address: 'Auckland', phone: '023 456 789', email: 'sarah@sarah.com', publisher: 'Universal Music Publishing', artist_name: 'Sarah'},
        {id: 3, name: 'Roy', address: 'The Beach', phone: '023 456 789', email: 'roy@roy.com', publisher: 'Warners', artist_name: 'Roy'},
        {id: 4, name: 'Kienan', address: 'Wellington', phone: '023 456 789', email: 'kienan@kienan.com', publisher: 'Kobalt', artist_name: 'Kienan'},
      ]);
    });
};
