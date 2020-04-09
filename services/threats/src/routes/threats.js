const express = require('express');
const queries = require('../db/queries.js');

const router = express.Router();

router.get('/', (req, res) => {
  return queries.getAllThreats()
  .then((threats) => {
      return res.json({
          success: true,
          threats: threats
      });
  })
  .catch((err) => { return next(err); });
});

router.post('/', (req, res) => {
    return queries.postThreat(req.body)
    .then(() => {
        return res.json({
            success: true,
            message: 'Threat added!'
        });
    })
    .catch((err) => { return next(err); });
  });

module.exports = router;