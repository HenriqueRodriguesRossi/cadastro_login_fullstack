import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import Cadastro from '../views/Cadastro/Cadastro.vue'
import Home from "../views/Home/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/novo/login",
      name: "Login",
      component: Login
    },
    {
      path:"/nova/conta",
      name: "Cadastro",
      component: Cadastro
    }
  ]
})

export default router
