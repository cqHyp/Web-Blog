<template>
  <div class="mainPage">
    <div class="article">
      <div class="article-title__wrapper">
        <router-link to="/article" class="article-title">{{ msg }}</router-link>
      </div>
      <div class="article-subtitle">
        <span>{{ time }}</span>by<span>{{author}}</span>•<span>{{comments_num}}</span>COMMENTS
      </div>
      <div class="article-content">

      </div>
    </div>
    <v-pageNum class="pageNum"></v-pageNum>
    <v-bottom></v-bottom>
  </div>

</template>

<script>
  import bottom from 'components/Bottom/copyright';
  import pageNum from 'components/Content/pageNum';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'It\'' + 's my first article',
      time: '七月 20, 2017',
      author: 'CQH',
      comments_num: '0'
    };
  },
  components: {
    'v-bottom': bottom,
    'v-pageNum': pageNum
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainPage{
    background: rgb(255,255,255);
    display: flex;
    flex-direction: column;
  }
  .article{
    display: flex;
    flex-direction: column;
    padding: 80px 90px;
    border-bottom: 1px solid rgba(238,238,238,1);
  }
  .article-title__wrapper{
    text-align: center;
  }
  .article-title{
    width: 100%;
    color: #34495E;
    font-size: 35px;
  }
  .article-subtitle{
    font-size: 15px;
    text-align: center;
  }
  .article-content{
    width: 100%;
    height: 900px;
    background: powderblue;
  }
  .pageNum{
    margin: auto;
  }
</style>
