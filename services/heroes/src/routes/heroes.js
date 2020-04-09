const express = require('express');
const queries = require('../db/queries.js');

const router = express.Router();
router.get('/', (req, res, next) => {
  return queries.getAllHeroes()
  .then((heroes) => {
    return res.json({
      heroes: heroes,
      success: true
    });
  })
  .catch((err) => { return next(err); });
});
router.post('/', (req, res, next) => {
  const hero = {
    type: req.body.type,
    displayName: req.body.displayName,
    power: req.body.power,
    busy: false
  }
  return queries.postHero(hero)
  .then(() => {
    return res.json({
      message: 'Hero added!',
      success: true
    });
  })
  .catch((err) => { return next(err); });
});
module.exports = router;