<template>
  <div id="app">
    <TheHeader/>
    <main id="main">
      <router-view/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components:{
    TheHeader,
    TheFooter
  }
}
</script>


<style>

  *{
    box-sizing: border-box;
  }

  body,ul,li,h1,h2,p{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }

  body{
    font-family: "Inter", Arial, Helvetica, sans-serif;
    color: #345;
    background: url('./assets/pattern.svg') repeat top;
  }
  a {
    color: #345;
    text-decoration: none;
  }

  img{
    max-width: 100%;
    display: block;
  }
  .btn{
    display: block;
    padding: 10px 30px;
    background-color: #87f;
    border-radius: 4px;
    color: white;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30,60,90,0.2);
    transition: all .3s;
    border: none;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
  .btn:hover{
    background-color: #65d;
    transform: scale(1.1);
  }
  #app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #main{
    flex: 1;
  }
  input,textarea{
    border-radius: 4px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 apx 8px rgba(30,60,90,0.1);
    transition: all .3s;
    font-size: 1rem;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    margin-block: 15px;
  }
  input:hover,
  input:focus,
  textarea:hover,
  textarea:focus{
    outline: none;
    box-shadow:  6px 12px rgba(30,60,90,0.2);
    border-color: #87f;
  }

</style>