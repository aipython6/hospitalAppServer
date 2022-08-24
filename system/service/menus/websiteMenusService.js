const websiteMenusImpl = require('../../impl/menus/websiteMenusImpl');

class websiteMenusService {
  constructor() {
    this.websiteMenusImpl = new websiteMenusImpl()
  }
  get() {
    return this.websiteMenusImpl.get();
  }
}

module.exports = websiteMenusService;