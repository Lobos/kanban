import demoData from './shineout.json'

const mutations = {}

const actions = {}

const state = () => {
  const mapData = {}
  const treeData = []

  demoData.tree.forEach(d => {
    const id = d.path
    const sp = id.split('/')
    const node = {
      id,
      name: sp.pop(),
      parent: sp.join('/'),
    }
    mapData[id] = node
  })

  Object.values(mapData).forEach(d => {
    if (d.parent) {
      const parent = mapData[d.parent]
      if (!parent.children) parent.children = []
      parent.children.push(d)
    } else {
      treeData.push(d)
    }
  })

  return {
    mapData,
    treeData,
    expandKeys: {},
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
