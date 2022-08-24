const mysql = require('../../../database/mysql')

class websiteMenusImpl {
  get() {
    const sql = `select a.*,b.menu_name,b.english_name,b.base_router from childrenMenus a left join parentMenus b on a.menu_id = b.menu_id`
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