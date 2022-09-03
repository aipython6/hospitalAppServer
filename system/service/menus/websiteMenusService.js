const websiteMenusImpl = require('../../impl/menus/websiteMenusImpl');

class websiteMenusService {
  constructor() {
    this.websiteMenusImpl = new websiteMenusImpl()
  }
  getChildrenMenus() {
    return this.websiteMenusImpl.getChildrenMenus();
  }
  getParentMenus() {
    return this.websiteMenusImpl.getParentMenus()
  }
}

module.exports = websiteMenusService;