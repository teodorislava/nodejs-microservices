const knex = require('./connection');

function getAllHeroes() {
  return knex('heroes').select();
}

function postHero(hero) {
  return knex('heroes').insert(hero);
}

module.exports = {
  getAllHeroes,
  postHero
};