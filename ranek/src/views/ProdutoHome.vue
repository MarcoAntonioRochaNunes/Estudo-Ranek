<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(fotos, index) in produto.fotos" :key="index">
          <img :src="fotos.src" :alt="fotos.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{produto.nome}}</h1>
        <p class="preco">{{ produto.preco | numeroPreco}}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <transition mode="out-in" v-if="produto.vendido === 'false'">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">Comprar</button>
          <FinalizarCompraVue v-else :produto="produto"/>
        </transition>
        <button v-else class="btn" disabled> Produto Vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import { api } from '@/services/';
import FinalizarCompraVue from '@/components/FinalizarCompra.vue';

export default {
 name:"ProdutoHome",
 components:{
  FinalizarCompraVue
 },
 data(){
  return {
    produto:null,
    finalizar: false
  }
 },
 props:['id'],
 methods:{
  getProduto(){
    api.get(`/produto/${this.id}`).then((response) => {
      this.produto = response.data;
    })
  }
 },
 created(){
  this.getProduto();
 }
}

</script>

<style scoped>
  .produto{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    max-width: 900px;
    padding: 60px 20px;
    margin: 0 auto;
  }
  .preco{
    color: #e80;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
  .descricao{
    font-size: 1.2rem;
  }
  .btn{
    margin-top: 60px;
    width: 200px;
  }
</style>