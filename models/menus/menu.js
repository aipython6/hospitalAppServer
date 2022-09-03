// 三级menu
let third = {
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

// 二级menu
let second = {
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

// 最终的menu对象
let Menu = {
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

module.exports = { Menu: Menu, second: second, third: third }