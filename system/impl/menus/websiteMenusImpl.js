const mysql = require('../../../database/mysql')

class websiteMenusImpl {
  // 获取childrenMenus
  getChildrenMenus() {
    const sql = `select * from childrenMenus`
    return new Promise((resolve, reject) => {
      mysql.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
  // 获取parentMenus
  getParentMenus() {
    const sql = `select * from parentMenus`
    return new Promise((resolve, reject) => {
      mysql.query(sql, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = websiteMenusImpl