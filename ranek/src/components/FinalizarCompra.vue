<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from './UsuarioForm.vue'
export default {
  name:"FinalizarCompra",
  components:{
    UsuarioForm
  },
  props: ["produto"]
}
</script>

<style scoped>
  .btn{
    grid-column: 2;
    width: 100%;
  }
</style>