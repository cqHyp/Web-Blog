<template>
  <div class="mainPage">
    <div>
      <router-link to="/article">{{ msg }}</router-link>

    </div>
    <button class="btn btn-success" @click="btn__click()">bootstrap</button>
    <v-bottom></v-bottom>
  </div>

</template>

<script>
  import bottom from 'components/Bottom/copyright';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'It\'' + 's my first article'
    };
  },
  methods: {
    btn__click: function () {
      alert('jquery Test!');
    }
  },
  components: {
    'v-bottom': bottom
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .mainPage{
    background: rgb(255,255,255);
    display: flex;
    flex-direction: column;
  }
</style>
