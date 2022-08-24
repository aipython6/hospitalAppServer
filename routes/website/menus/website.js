const express = require('express');
const router = express.Router();
const websiteMenusService = require('../../../system/service//menus/websiteMenusService')

router.get('/menus', async (req, res) => {
  const wms = new websiteMenusService()
  const menus = await wms.get()
  res.json({ content: menus })
})

module.exports = router