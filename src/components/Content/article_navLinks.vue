<template>
  <div class="nav_links">
    <div class="previous">
      <h3 class="previous-h3">Previous</h3>
      <a class="title">{{ previous }}</a>
    </div>
    <div class="next">
      <h3 class="previous-h3">Next</h3>
      <a class="title">{{ next }}</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previous: 'Distribute Candies–LeetCode#575',
      next: 'Length of Last Word–LeetCode#58'
    };
  }
};
</script>
<style>
  .previous{
    background: #3699DC;
    padding: 37px 90px;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  .next{
    background: #3699DC;
    padding: 37px 90px;
  }
  .previous-h3{
    font-size: 15px;
    color: rgba(238,238,238,0.5);
  }
  .title{
    font-size: 25px;
    color: white;
    cursor: pointer;
  }
  .title:hover{
    color: white;
  }
</style>
