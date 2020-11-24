import * as components from './components'
import * as directives from './directives'
import * as filters from './filters'
import './styles/index.scss'
// 模块安装
const install = function (Vue) {
    if (install.installed) return

    // 注册全局组件、指令、过滤器
    Object.keys(components).map(name => Vue.component(name, components[name]))
    Object.keys(directives).map(name => Vue.directive(name, directives[name]))
    Object.keys(filters).map(name => Vue.filter(name, filters[name]))
}

// 导出模块
export * from './components'

export * from './directives'

export * from './filters'

//export * from './api'

export * from './utils'
// console.log(dom);
export default { install }
