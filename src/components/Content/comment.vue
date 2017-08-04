<template>
  <div class="comment">
    <div class="comment__title">
      <span>{{comment_num}}</span>COMMENT
    </div>
    <div class="comment__body">
      <img :src="face_url" class="comment__face"/>
      <div class="comment__content">
        <div class="comment__top">
          <h1 class="comment__name">ibm rack</h1>
          <span class="comment__time">七月 27, 2017 7:53 上午</span>
        </div>
        <div class="comment__mid"></div>
        <div class="comment__end"></div>
      </div>
    </div>
    <div class="comment__response">
      <div class="comment__response-title">发表评论</div>
      <form class="comment__form">
        comment__form
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        comment_num: 1,
        face_url: 'http://cqhpoldi.com/Gakki.jpg'
      };
    }
  };
</script>
<style>
  .comment{
    background: white;
  }


  .comment__face{
    width: 80px;
    height: 80px;
  }
</style>
