const express = require('express');
const router = express.Router();

// Exemple de route de login
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;
