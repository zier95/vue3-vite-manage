<script>
export default {
  name: 'app',
  mounted () {
    this.$storage.setItem('user', 'aaa1234')
    // this.$storage.clearItem('user')
    const data = this.$storage.getItem('user')
    console.log(data)
  }
}
</script>

<template>
  <!-- main.js文件入口首先加载router-view，路由跳转后会将组件的内容渲染到router-view中显示 ，不需要导入，官方自带的组件-->
  <router-view></router-view>
</template>

<style>
</style>
