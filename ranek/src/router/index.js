import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoHome from '../views/ProdutoHome.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioView from '../views/usuario/UsuarioView.vue'
import UsuariosProdutos from '../views/usuario/UsuariosProdutos.vue'
import UsuariosVendas from '../views/usuario/UsuariosVendas.vue'
import UsuariosCompras from '../views/usuario/UsuariosCompras.vue'
import UsuariosEditar from '../views/usuario/UsuariosEditar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/usuario',
    component: UsuarioView,
    children:[
      {
        path: "",
        name:"UsuarioView",
        component: UsuariosProdutos
      },
      {
        path: "vendas",
        name:"UsuariosVendas",
        component: UsuariosVendas
      },
      {
        path: "compras",
        name:"UsuariosCompras",
        component: UsuariosCompras
      },
      {
        path: "editar",
        name:"UsuariosEditar",
        component: UsuariosEditar
      },
    ]
  },
  {
    path: '/produto/:id',
    name: 'ProdutoHome',
    component: ProdutoHome,
    props: true
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return window.scrollTo( {top: 0, behavior:"smooth"} );
  }
})

export default router
