import store from '@state/store'
import api from '@/src/services/api'

export default [{
    path: '/',
    name: 'home',
    component: () =>
        import ( /* webpackChunkName: "about" */ '@views/home.vue')
}]