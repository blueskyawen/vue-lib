import vlFormGroup from './src/vl-form-group'
import vlFormControl from './src/vl-form-control'
import vlFormLabel from './src/vl-form-label'
import vlInput from './src/vl-input'
import vlTextarea from './src/vl-textarea'

vlFormGroup.install = function (Vue) {
    Vue.component(vlFormGroup.name, vlFormGroup)
}
vlFormControl.install = function (Vue) {
    Vue.component(vlFormControl.name, vlFormControl)
}
vlFormLabel.install = function (Vue) {
    Vue.component(vlFormLabel.name, vlFormLabel)
}
vlInput.install = function (Vue) {
    Vue.component(vlInput.name, vlInput)
}
vlTextarea.install = function (Vue) {
    Vue.component(vlTextarea.name, vlTextarea)
}

export default [vlFormGroup, vlFormControl, vlFormLabel, vlInput, vlTextarea]
