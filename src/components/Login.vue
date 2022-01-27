<template>
  <div>
    <h1>欢迎登陆</h1>
    <el-button @click="goHome">登陆确认</el-button>
  </div>
</template>

<script >
export default {
  name: 'Login',
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style >
</style>
