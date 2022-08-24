const express = require('express');
const router = express.Router();

router.get('/menus', async (req, res) => {
  res.json({ code: 200 })
})

module.exports = router