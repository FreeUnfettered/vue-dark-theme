import Vue from 'vue'

Vue.component('layout-aside', require('@/components/Layouts/Aside').default)
Vue.component('layout-header', require('@/components/Layouts/Header').default)

Vue.component('chart-bar', require('@/components/Charts/Bar').default)
Vue.component('chart-line', require('@/components/Charts/Line').default)
Vue.component('chart-radar', require('@/components/Charts/Radar').default)

Vue.component('form-video', require('@/components/Forms/Video').default)
