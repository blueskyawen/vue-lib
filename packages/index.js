import vlButton from './vl-button'
import vlSwitch from './vl-switch'
import vlCheckbox from './vl-checkbox'
import vlLoading from './vl-loading'
import vlForm from './vl-form'
import vlFilters from './vl-filters'

// 存储组件列表
const components = [
    vlButton, vlSwitch, vlCheckbox, vlLoading, ...vlForm
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    if (install.installed) return
    install.installed = true

    components.map(component => Vue.component(component.name, component))

    vlFilters.map(filter => Vue.filter(filter.name, filter.func))

    Vue.directive('vlRegIf', function (el, binding) {
        if (binding.value.reg.test(binding.value.value)) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    vlButton, vlSwitch, vlCheckbox, vlLoading, ...vlForm
}
