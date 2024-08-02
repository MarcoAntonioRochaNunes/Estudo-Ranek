<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Editar Usuario</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue"
import { api } from "@/services.js";

export default {
  name:"UsuariosEditar",
  components:{
    UsuarioForm
  },
  methods:{
    atualizarUsuario(){
      api.put(`/usuario/${this.$store.state.usuario.id}`, this.$store.state.usuario).then(() => {
        this.$store.dispatch("getUsuario")
        this.$router.push({name:"UsuarioView"})
      }).catch(error => {
        console.log(error.response)
      });
    }
  }
}
</script>

<style>

</style>