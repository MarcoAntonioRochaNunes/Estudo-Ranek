<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" :key="produtos">

        <div class="produto" v-for="produto in produtos" :key="produto.id">
          <router-link :to="{name: 'ProdutoHome', params: {id: produto.id}}">
            <img
              v-if="produto.foto"
              :src="produto.foto[0].src"
              :alt="produto.foto[0].titulo"
            />
            <p class="preco">{{ produto.preco | numeroPreco }}</p>
            <h2 class="titulo">{{ produto.nome }}</h2>
            <p>{{ produto.descricao }}</p>
          </router-link>
        </div>
        <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/>
      </div>

      <div v-else-if="produtos && produtos.length === 0" :key="sem-resultado">
        <p class="sem-resultados">Busca sem Resultado. Tente buscar outro termo</p>
      </div>
      <PaginaCarregando :key="carregando" v-else/>
    </transition>
  </section>
</template>

<script>

import { api } from "@/services.js";
import { serialize } from "@/helpers.js";
import ProdutosPaginar from '@/components/ProdutosPaginar.vue';


export default {
  name:"ProdutosLista",
  components:{
    ProdutosPaginar
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);
      console.log(query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      this.produtos = null;
      setTimeout(() => {
        api.get(this.url).then((r) => {
          this.produtos = r.data;
          this.produtosTotal = Number(r.headers['x-total-count']);
          console.log(r);
        });
      }, 1500);
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}
.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  transition: all 0.2;
}
.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}
.titulo {
  margin-bottom: 10px;
}
.preco {
  font-weight: bold;
  color: #e80;
}
.sem-resultados {
  text-align: center;
}
</style>
