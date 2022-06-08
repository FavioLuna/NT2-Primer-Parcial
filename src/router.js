import Vue from "vue";
import VueRouter from "vue-router";
import IndexFormulario from "./components/IndexFormulario.vue"
import Respuestas from './components/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario'},
        { path: '/formulario', component: IndexFormulario},
        { path: '/respuestas', component: Respuestas}
    
    ]
})