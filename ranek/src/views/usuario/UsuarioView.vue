<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li><router-link :to="{name: 'UsuarioView'}">Produtos</router-link></li>
        <li><router-link :to="{name: 'UsuariosCompras'}">Compras</router-link></li>
        <li><router-link :to="{name: 'UsuariosVendas'}">Vendas</router-link></li>
        <li><router-link :to="{name: 'UsuariosEditar'}">Editar Usuario</router-link></li>

        <li><button @click.prevent="deslogar">Deslogar</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name:"UsuarioView",
  methods:{
    deslogar(){
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login")
    }
  }
}
</script>

<style>
  .usuario{
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    max-width: 900px;
    margin: 40px auto;
    grid-gap: 30px;
    padding: 20px;
  }

  @media screen and (max-width: 500px){
    .usuario{
      grid-template-columns: 1fr;
      margin: 0px auto;
    }
  }

  .sidenav a {
    padding: 10px;
    display: block;
  }
</style>