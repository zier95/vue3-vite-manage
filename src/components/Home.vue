<template>
  <!--此页面为根组件，根组件内可以放菜单，页面主结构，加载其他子组件内容 -->
  <div>
    <h1>欢迎myhome</h1>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
