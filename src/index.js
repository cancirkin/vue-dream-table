import * as components from './components'

const componentList = components?.default
const DreamTable = {
 install(Vue) {
  Object.keys(componentList).forEach((key) => {
   Vue.component(key, componentList[key])
  })
 }
}

export default DreamTable
