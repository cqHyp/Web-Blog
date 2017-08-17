<template>
  <div class="adminHeader">
    <div class="adminHeader-wrapper">
      <div class="admin-wrapper">
        <ul class="adminHeader-ul">
          <li class="adminHeader-li">
            <a class="nav-item" href="#" >
              <img src="../../common/img/hat.png"/>
            </a>
          </li>
          <li class="adminHeader-li">
            <a class="nav-item">
              <img src="../../common/img/theme.png"/>
              <span class="nav-item-span">cqh</span>
            </a>
          </li>
          <li class="adminHeader-li">
            <a class="nav-item">
              <img src="../../common/img/pen.png"/>
              <span>自定义</span>
            </a>
          </li>
          <li class="adminHeader-li">
            <a class="nav-item">
              <img src="../../common/img/update.png"/>
              1
            </a>
          </li>
          <li class="adminHeader-li">
            <router-link to="/sendArticle" class="nav-item">
              <img src="../../common/img/add.png"/>
              <span>新建</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="user-wrapper">

      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .adminHeader{
    height: 35px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #23282D;
    color: white;
    padding: 0;
    z-index: 9;
  }
  .adminHeader img{
    height: 20px;
    width: 20px;
  }
  .nav-item{
    height: 35px;
    line-height: 35px;
    overflow: hidden;
  }
  .nav-item-span{
    line-height: 20px;
  }
  .admin-wrapper{
    width: 40%;
  }
  .adminHeader-ul{
    list-style: none;
    height: 35px;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .adminHeader-li{
    text-align: center;
  }
</style>
