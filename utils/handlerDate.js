const moment = require('moment');

const formatDate = date => {
  return moment(date).local('zh-cn').format('YYYY-MM-DD HH:mm:ss')
}

const getDate = () => {
  return moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
}

const SecondsToMinutes = second => {
  let time = moment.duration(second, 'seconds')
  let hours = time.hours()
  let minutes = time.minutes()
  let seconds = time.seconds()
  return moment({ h: hours, m: minutes, s: seconds }).format('HH:mm:ss')
}

module.exports = { formatDate: formatDate, getDate: getDate, SecondsToMinutes: SecondsToMinutes }

