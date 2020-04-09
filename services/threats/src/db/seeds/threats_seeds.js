
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('threats').del()
    .then(() => {
      // Inserts seed entries
      return knex('threats').insert([
        {
          displayName: 'Pisa tower is about to collapse.',
          necessaryPower: 'flying'
        },
        {
          displayName: 'Engineer is going to clean up server-room.',
          necessaryPower: 'teleporting'
        },
        {
          displayName: 'John will not understand the joke',
          necessaryPower: 'clairvoyance'
        }
      ]);
    });
};
