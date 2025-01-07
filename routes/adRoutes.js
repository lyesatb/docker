const express = require('express');
const router = express.Router();

// Exemple d'une route publicitaire
router.get('/ads', (req, res) => {
  res.send('Liste des voitures');
});

module.exports = router;
