// 处理官网的一二三级路由
const handlerFirstRouter = menus => {
  let treeData = []
  
  let resultMap = { id: undefined, pid: undefined, name: '', router: '', children: [] }
  let resultMapChildren = []

  let secondMap = { id: undefined, pid: undefined, name: '', router: '' }

  menus.forEach(a => {
    if (!a.pid) {
      resultMap.pid = a.menu_id
      resultMap.id = a.id
      resultMap.name = a.name
      resultMap.router = a.router
      menus.forEach(b => {
        if (a.id===b.pid) {
          secondMap.id = b.id
          secondMap.name = b.name
          secondMap.pid = b.pid
          secondMap.router = a.router + b.router
          resultMapChildren.push(secondMap)
        }
        secondMap = { id: undefined, pid: undefined, name: '', router: '' }
      })
      resultMap.children = resultMapChildren
      treeData.push(resultMap)
      resultMapChildren = []
    }
    resultMap = { id: undefined, pid: undefined, name: '', router: '', children: [] }
  })
  return treeData
}

const handlerThreeRouter = (menus, parents) => {
  const treeData = handlerFirstRouter(menus)
  let result = []
  let map = { id: undefined, name: undefined, router: '', children: [] }
  parents.forEach(a => {
    treeData.forEach(b => {
      if (a.menu_id === b.pid) {
        map.id = a.menu_id
        map.name = a.menu_name
        map.router = a.base_router
        map.children.push(b)
      }
    })
    result.push(map)
    map = { id: undefined, name: undefined, router: '', children: [] }
  })
  return result
}


module.exports = { handlerThreeRouter: handlerThreeRouter }