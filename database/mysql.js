const mysql = require('mysql');
const config = {
  host: 'www.and2ui.cn',
  user: 'root',
  password: '6118277ndaNDA',
  database: 'hospitalApp',
  useConnection: true
}

let conn = null

function handlerError() {
  conn = mysql.createConnection(config)
  conn.connect((err) => {
    if (err) {
      console.error(err)
      setTimeout(handlerError, 1000)
    }
  })
  conn.on('error', (err) => {
    console.error(err)
    if (err.code === 'PROTOCAL_CONNECTION_LOST') {
      handlerError()
    } else {
      throw err
    }
  })
}


handlerError()

module.exports = conn