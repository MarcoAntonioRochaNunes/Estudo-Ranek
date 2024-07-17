<template>
<section>
  <h1>👍Compre ou Venda👋</h1>
  <ProdutosBuscar />
  <ProdutosLista />
</section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";


export default {
  name: 'HomeView',
  components:{
    ProdutosBuscar,
    ProdutosLista
  }
}
</script>
<style scoped>
h1{
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>