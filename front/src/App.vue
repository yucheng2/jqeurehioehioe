<template>
  <div>
    <button @click="handleClick">获取文件</button>
  </div>
</template>

<script setup lang="ts">
import * as $ from 'jquery';

const handleClick = ()=>{
  $.ajax({
    url: '/api/file',
    type: 'GET',
    xhrFields: {
      responseType: 'blob'
    },
    success: function(response) {
      const url = window.URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'download.docx');
      document.body.appendChild(link);
      link.click();
    }
  });
}
</script>

<style scoped>

</style>