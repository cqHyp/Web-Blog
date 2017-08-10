<template>
  <div class="v-header">
    <div class="blogName">
      <router-link to="/" class="name">blog name</router-link>
    </div>
    <div class="navbar">
      <ul class="nav navbar-nav">
        <li><a href="#" class="navbar_text">navbar</a></li>
        <li><a href="#" class="navbar_text">navbar</a></li>
        <li><a href="#" class="navbar_text">navbar</a></li>
      </ul>
    </div>
    <div class="search">
      <form class="navbar-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
      </form>
    </div>
    <div class="headerStyle recentArticle" v-if="recentArticles">
      <aside>
        <h3>近期文章</h3>
        <li v-for="item in recentArticles"><a>{{ item.name }}</a></li>
      </aside>
    </div>
    <div class="headerStyle recentComment">
      <aside>
        <h3>近期评论</h3>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
      </aside>
    </div>
    <div class="headerStyle articleArchive">
      <aside>
        <h3>文章归档</h3>
        <li><a>articleArchive</a></li>
        <li><a>articleArchive</a></li>
        <li><a>articleArchive</a></li>
      </aside>
    </div>
    <div class="headerStyle articleSort">
      <aside>
        <h3>分类目录</h3>
        <li><a>articleSort</a></li>
        <li><a>articleSort</a></li>
        <li><a>articleSort</a></li>
      </aside>
    </div>
    <div class="headerStyle features">
      <aside>
        <h3>功能</h3>
        <li><a data-toggle="modal" data-target=".bs-example-modal-sm">login</a></li>
        <li><router-link to="/manage">features</router-link></li>
        <li><a>features</a></li>
      </aside>
    </div>
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-header" style="background: white;text-align: center;">
          <img src="../../common/img/hat.png"/>
        </div>
        <div class="modal-content">
          <div class="login-content">
            <div class="login__name">
              <h3>用户名</h3>
              <input type="text" name="username" v-model="username" v-on:change="userNameChange" class="form-control" :placeholder="username"/>
            </div>
            <div class="login__pwd" >
              <h3>密码</h3>
              <input type="password" class="form-control" name="password"/>
            </div>
            <div class="login__label">
              <label>
                <input type="checkbox"><span class="checkbox-rememberMe">记住我的登录信息</span>
              </label>
              <a type="button" @click="submit" class="btn btn-primary btn-login">登陆</a>
            </div>
            <div class="forgetPassword-wrapper">
              <a class="forgetPassword">忘记密码？</a>
            </div>
            <div class="backTo-wrapper">
              <a class="backTo">← 回到 {{ this.guessCity }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {cityGuess} from '../../service/getData';
  export default {
    props: ['placeholder'],
    data() {
      return {
        guessCity: '',
        guessCityid: '',
        username: '',
        recentArticles: [{
          name: 'Length of Last Word–LeetCode#58',
          id: 5
        }, {
          name: 'Reverse String–LeetCode#344',
          id: 4
        }, {
          name: 'Distribute Candies–LeetCode#575',
          id: 3
        }, {
          name: 'Fizz Buzz–LeetCode#412',
          id: 2
        }, {
          name: 'Reverse Words in a String–LeetCode#151',
          id: 1
        }]
      };
    },
    mounted() {
      cityGuess().then(res => {
        this.guessCity = res.name;
        this.guessCityid = res.id;
      });
    },
    methods: {
      userNameChange() {
        this.$store.state.user_name = this.username;
      },
      submit() {
        this.$store.commit('showUserName');
      }
    }
  };
</script>
<style>
  a,a:enabled{
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover,a:active,a:link{
    color: gray;
    text-decoration: none;
  }
  h3{
    font-size: 12px;
    color: gray;
    margin: 10px 0;
  }
  .v-header{
    background: #333333;
    position: relative;
  }
  .blogName{
    height: 150px;
    width: 100%;
    display: flex;
  }
  .name{
    font-size: 42px;
    margin: auto;
  }
  .navbar{
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-top: 1px solid rgba(255,255,255,0.2);
    border-radius: 0;
    margin-bottom: 0;
  }
  .nav>li>a:focus, .nav>li>a:hover{
    background: none;
  }
  .search{
    height: 80px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    display: flex;
  }
  .navbar-form{
    margin: auto;
  }
  .headerStyle{
    padding: 10px 20px 20px;
    color: #fff;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .recentArticle{

  }
  .recentComment{

  }
  .articleArchive{

  }
  .articleSort{

  }
  .features{

  }

  .modal-header{
    border: none;
  }
  .modal-content{
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 0;
  }
  .login-content{
    width: 300px;
    margin: 0 auto;
  }
  .login__name,.login__pwd{
    margin: 0 auto;
  }
  .login__label{
    margin: 10px auto;
    font-size: 0;
    position: relative;
  }
  .checkbox-rememberMe{
    font-size: 14px;
    font-weight: 300;
  }
  .btn-login{
    position: absolute;
    right: 0;
  }
  .forgetPassword-wrapper{
    margin: 5px 0;
  }
  .forgetPassword{
    color: gray;
  }
  .backTo{
    text-align: center;
    color: gray;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
  }
  .backTo-wrapper{
    margin: 5px 0;
  }
</style>
