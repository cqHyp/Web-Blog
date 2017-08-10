<template>
  <div class="comment">
    <div class="comment__title">
      <span>{{comment_num}}</span>COMMENT
    </div>
    <div class="comment__body">
      <img :src="face_url" class="comment__face"/>
      <div class="comment__content">
        <div class="comment__top">
          <span class="comment__name">ibm rack</span>
          <span class="comment__time">七月 27, 2017 7:53 上午</span>
        </div>
        <div class="comment__mid">
          <p>内容</p>
        </div>
        <div class="comment__end">
          <a class="comment__res-btn">回复</a>
        </div>
      </div>
    </div>
    <div class="comment__response">
      <div class="comment__response-title">发表评论</div>
      <form class="comment__form">
        <div>
          <p>电子邮件地址不会被公开。 必填项已用*标注</p>
          <textarea class="comment__response-body"></textarea>
        </div>
        <div>
          <h2>姓名 *</h2>
          <input type="text" class="comment__response-name" name="username"/>
        </div>
        <div>
          <h2>电子邮件 *</h2>
          <input type="text" class="comment__response-email"/>
        </div>
        <div>
          <h2>站点</h2>
          <input type="text" class="comment__response-point"/>
        </div>
        <button class="btn btn-primary commentSubmit">发表评论</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        comment_num: 1,
        face_url: 'http://cqhpoldi.com/Gakki.jpg',
        username: ''
      };
    },
    mounted() {
      this.username = this.$store.state.user_name;
    }
  };
</script>
<style>
  .comment{
    background: white;
  }
  .comment__title{
    color: gray;
    font-size: 14px;
  }

  .comment__body{
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .comment__face{
    width: 82px;
    height: 82px;
  }
  .comment__content{
    margin-left: 40px;
    width: 100%;
  }
  .comment__top{
    position: relative;
    width: 100%;
  }
  .comment__name{
    font-size: 18px;
    font-weight: 700;
    color: #3699DC;
  }
  .comment__time{
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: text-top;
  }

  .comment__mid{
    padding: 10px;
  }

  .comment__res-btn{
    color: #3699DC;
  }

  .comment__response{
    margin-top: 50px;
  }
  .comment__response h2{
    font-size: 18px;
    font-weight: 600;
  }
  .comment__response-title{
    margin: 0 0 20px;
    line-height: 20px;
    font-size: 16px;
  }
  .comment__response-body{
    width: 100%;
    height: 120px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 5px 10px;
    resize: vertical;
  }
  .comment__response-name{
    width: 100%;
    height: 40px;
    font-size: 13px;
    padding: 0 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .comment__response-email{
    width: 100%;
    height: 40px;
    font-size: 13px;
    padding: 0 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .comment__response-point{
    width: 100%;
    height: 40px;
    font-size: 13px;
    padding: 0 10px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .commentSubmit{
    margin-top: 20px;
  }
</style>
