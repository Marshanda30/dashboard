import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)


axios.defaults.baseURL = 'http://localhost:8000/api'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

let routes =[
  { path: '/', component:require('./components/view/Home.vue').default },
  { path: '/shelter', component:require('./components/view/Shelter.vue').default },
  { path: '/tabel', component:require('./components/view/Tabel.vue').default },
  { path: '/report', component:require('./components/view/Report.vue').default },
  { path: '/login', component:require('./components/view/Login.vue').default },
  { path: '/register', component:require('./components/view/Register.vue').default }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



