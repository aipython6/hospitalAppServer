const express = require('express');
const router = express.Router();
const { handlerThreeRouter } = require('../../../utils/handlerMenu')
const websiteMenusService = require('../../../system/service//menus/websiteMenusService')

router.get('/menus', async (req, res) => {
  const wms = new websiteMenusService()
  const Cmenus = await wms.getChildrenMenus()
  const Pmenus = await wms.getParentMenus()
  const result = handlerThreeRouter(Cmenus, Pmenus)
  res.json({ content: result })
})

module.exports = router