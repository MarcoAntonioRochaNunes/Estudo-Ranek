<template>
  <div class="produto" v-if="produto">
    <router-link class="produto_img" :to="{name: 'ProdutoHome', params:{ id: produto.id } }">
      <img v-if="produto.fotos" :src="porduto.fotos[0].src" :alt="porduto.fotos[0].titulo">
      <p>Ver Produto</p>
    </router-link>
    <div class="info">
      <p class="preco">{{produto.preco | numeroPreco}}</p>
      <h2 class="titulo">{{produto.nome}}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProdutoItem",
  props:["produto"]
}
</script>

<style scoped>
  .produto{
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
  }
  .info{
    align-self: end;
  }
  .produto_img{
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
  }
</style>