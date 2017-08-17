<template>
  <div class="sendArticle">
  <div class="sendArticle-wrapper">
    <quill-editor v-model="content" class="quillEditor"></quill-editor>
  </div>
</div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor';
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        content: '6'
      };
    }
  };
</script>
<style>
  .sendArticle-wrapper{
    background-color: white;
    padding: 80px 90px;
  }
  .quillEditor{
    height: 600px;
  }
</style>
