<template>
  <div id="app">
    <v-header class="header"></v-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header';

  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  };
</script>

<style>
  #app{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    background: whitesmoke;
  }
  .header{
    width: 25%;
  }
  .content{
    width: 75%;
  }
</style>
