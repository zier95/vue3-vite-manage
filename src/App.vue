<script>
export default {
  name: 'app',
  mounted () {
  }
}
</script>

<template>
  <!-- main.js文件入口首先加载router-view，路由跳转后会将组件的内容渲染到router-view中显示 ，不需要导入，官方自带的组件-->
  <router-view></router-view>
</template>

<style lang='scss'>
@import './assets/style/reset.scss';
@import './assets/style/index.scss';
</style>
