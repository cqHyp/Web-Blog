<template>
  <div>
    <div class="article">
      <div class="article__title">
        <h1 class="article__title-text">{{ article.title }}</h1>
      </div>
      <div class="article__subtitle">
        <span>time</span>
        by
        <span>author</span>
        •
        <span>num</span>COMMENTS
      </div>
      <div class="article__content">

      </div>
    </div>
    <nav-Links></nav-Links>
    <comment class="commentBody"></comment>
    <v-bottom class="bottom"></v-bottom>
  </div>
</template>
<script>
  import bottom from 'components/Bottom/copyright';
  import navLinks from 'components/Content/article_navLinks';
  import comment from 'components/Content/comment';
  export default {
    components: {
      'v-bottom': bottom,
      'nav-Links': navLinks,
      'comment': comment
    },
    data() {
      return {
        article: {
          title: 'Length of Last Word–LeetCode#58'
        }
      };
    }
  };
</script>
<style>
  .article{
    display: flex;
    flex-direction: column;
    padding: 80px 90px;
    background: white;
  }
  .article__title{
    text-align: center;
  }
  .article__title-text{
    font-size: 40px;
    margin-top: 0;
    color: #555555;
  }
  .article__subtitle{
    text-align: center;
  }
  .article__content{
    width: 100%;
    height: 1500px;
    background: powderblue;
  }

  /*评论*/
  .commentBody{
    padding: 80px 90px;
  }

</style>
