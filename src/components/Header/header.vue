<template>
  <div class="v-header">
    <div class="blogName">
      <h1>blog name</h1>
    </div>
    <div class="navbar">
      <ul class="nav navbar-nav ">
        <li><a href="#">navbar</a></li>
        <li><a href="#">navbar</a></li>
        <li><a href="#">navbar</a></li>
      </ul>
    </div>
    <div class="search">
      <form class="navbar-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <div class="recentArticle">
      <aside>
        <h3>近期文章</h3>
        <li><a>article</a></li>
        <li><a>article</a></li>
        <li><a>article</a></li>
        <li><a>article</a></li>
        <li><a>article</a></li>
      </aside>
    </div>
    <div class="recentComment">
      <aside>
        <h3>近期评论</h3>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
        <li><a>comment</a></li>
      </aside>
    </div>
    <div class="articleArchive">
      <aside>
        <h3>文章归档</h3>
        <li><a>articleArchive</a></li>
        <li><a>articleArchive</a></li>
        <li><a>articleArchive</a></li>
      </aside>
    </div>
    <div class="articleSort">
      <aside>
        <h3>分类目录</h3>
        <li><a>articleSort</a></li>
        <li><a>articleSort</a></li>
        <li><a>articleSort</a></li>
      </aside>
    </div>
    <div class="features">
      <aside>
        <h3>功能</h3>
        <li><a>features</a></li>
        <li><a>features</a></li>
        <li><a>features</a></li>
      </aside>
    </div>
  </div>
</template>
<script>

</script>
<style>
  h3{
    font-size: 15px;
    color: gray;
  }
  .v-header{
    background: #333333;
    color: #fff;
  }
  .blogName{
    height: 150px;
    width: 100%;
    text-align: center;
  }
  .navbar{
    border-bottom: 1px solid rgba(255,255,255,0.2);
    border-top: 1px solid rgba(255,255,255,0.2);
    border-radius: 0;
    margin-bottom: 0;
  }
  .search{
    height: 80px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    display: flex;
  }
  .navbar-form{
    margin: auto;
  }
  .recentArticle{
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .recentComment{
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .articleArchive{
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .articleSort{
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .features{
    padding: 10px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
</style>
