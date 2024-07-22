<template>
 <section>
  <h2>Crie a Sua Conta</h2>
  <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">Criar Conta</button>
    <UsuarioForm v-else>
      <button class="btn btn-form" @click.prevent="criarUsuario">Criar Usuario</button>
    </UsuarioForm>
  </transition>

 </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";

export default {
  name:"LoginCiar",
  data(){
    return {
      criar: false
    }
  },
  components: {
    UsuarioForm
  },
  methods:{
    async criarUsuario(){
      await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
      await this.$store.dispatch("getUsuario", this.$store.state.usuario.email);
      this.$router.push({name:"UsuarioView"})
    }
  }
}
</script>

<style scoped>
h2{
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn{
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form{
  max-width: 100%;
}
</style>