<template>
  <div>
    <button @click="handleClick">获取文件</button>
  </div>
</template>

<script setup lang="ts">
import * as $ from 'jquery';

const handleClick = () => {
  // 兼容移动端, 国产浏览器打不开
  fetch('/api/file?pwd=123456&name=123456').then(async (res) => {
    try{
      const jsonRes= await res.json()
      alert(jsonRes.msg)
    }catch(err){
      // 返回文件流
      window.open('/api/file?pwd=123456&name=123456')
    }
  }).catch(err => {
    console.error(err)
  })
  // $.ajax({
  //   url: '/api/file',
  //   type: 'GET',
  //   xhrFields: {
  //     responseType: 'blob'
  //   },
  //   success: function (response) {
  //     const url = window.URL.createObjectURL(response);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'DOC 文档.doc');
  //     document.body.appendChild(link);
  //     link.click();
  //   }
  // });
}
</script>

<style scoped>

</style>