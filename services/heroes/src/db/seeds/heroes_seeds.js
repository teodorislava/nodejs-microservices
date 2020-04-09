
exports.seed = (knex) => {
  return knex('heroes').del()
    .then(() => {
      return knex('heroes').insert([
        {
          type: 'spider-dog',
          displayName: 'Cooper',
          power: "flying",
          busy: false
        },
        {
          type: 'flying-dogs',
          displayName: 'Jack & Buddy',
          power: "teleporting",
          busy: false
        },
        {
          type: 'dark-light-side',
          displayName: 'Max & Charlie',
          power: "mind reading",
          busy: false
        },
        {
          type: 'captain-dog',
          displayName: 'Rocky',
          power: "super strength",
          busy: false
        }
      ]);
    });
};
