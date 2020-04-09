const knex = require('./connection');

function getAllThreats() {
  return knex('threats').select();
}

function postThreat(threat) {
  return knex('threats').insert(threat);
}

module.exports = {
  getAllThreats,
  postThreat
};