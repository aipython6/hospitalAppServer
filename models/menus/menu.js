// 二级menu
const second = {
  id: undefined,
  pid: undefined,
  menu_id: undefined,
  name: '',
  router: '',
  disabled: 1,
  create_at: new Date(),
  create_by: '',
  bg_color: '',
  children: [
    third
  ],
}

// 三级menu
const third = {
  id: undefined,
  pid: undefined,
  menu_id: undefined,
  name: '',
  router: '',
  disabled: 1,
  create_at: new Date(),
  create_by: '',
  bg_color: ''
}
// 最终的menu对象
const Menu = {
  menu_id: undefined,
  name: '',
  english_name: '',
  menu_router: '',
  base_router: '',
  create_by: '',
  create_at: new Date(),
  bg_color: '',
  children: [
    second
  ],
}

module.exports = Menu