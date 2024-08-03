<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus Produtos</h2>
    <transition-group v-if="usuario_produtos" name="list" tag="ul">
    <li v-for="produto in usuario_produtos" :key="produto.id">
      <ProdutoItem :produto="produto">
        <p class="preco">{{produto.descricao}}</p>
        <button class="deletar" @click="deletarProduto(produto.id)">Deletar</button>
      </ProdutoItem>
    </li>
    </transition-group>

  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name:"UsuariosProdutos",
  components:{
    ProdutoAdicionar,
    ProdutoItem
  },
  computed:{
    ...mapState(["login", "usuario", "usuario_produtos"])
  },
  methods:{
    ...mapActions(["getUsuarioProdutos"]),
    deletarProduto(id){
      const confirmar = window.confirm("Voce deseja remover este produto?");
      if(confirmar){
        api.delete(`/produto/${id}`).then(response => {
          this.getUsuarioProdutos();
          console.log('isso ai' + response)
        }).catch(error => {
          console.log(error.response)
        });
      }
    }
  },
  watch:{
    login(){
      this.getUsuarioProdutos()
    }
  },
  created(){
    if(this.login){
      this.getUsuarioProdutos()
    }
    console.log(this.getUsuarioProdutos())
  }
}
</script>

<style scoped>
  h2{
    margin-bottom: 20px;
  }

  .list-leave-to,
  .list-enter{
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  .list-enter-active,
  .list-leave-active{
    transition: all .3s ;
  }
  .deletar{
    position: absolute;
    top: 0px;
    right: 0px;
    background: url("../../assets/remove.svg") no-repeat center center;
    width: 24px;
    height: 24px;
    text-indent: -140px;
    overflow: hidden;
    cursor: pointer;
    border: none;
  }
</style>