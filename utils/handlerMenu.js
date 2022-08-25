const Menu = require('../models/menus/menu')
// 处理官网的一二三级路由
const handlerThreeRouter = menus => {
  let tempFirstChildren = []
  let tempSecondChildren = []
  menus.forEach(a => {
    if (!a.pid) {
      Menu.id = a.bid
      Menu.menu_name = a.menu_name
    }
  })
}

module.exports = { handlerThreeRouter: handlerThreeRouter }