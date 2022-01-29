<template>
  <div>
    <h1>欢迎登陆</h1>
    <el-button @click="goHome">登陆确认</el-button>
  </div>
</template>

<script >
export default {
  name: 'Login',
  async mounted () {
    // 方式1
    // const data = await this.$request({
    //   method: 'get',
    //   url: '/login',
    //   data: {
    //     name: 'aaa',
    //     password: '111'
    //   }
    // })
    // console.log(data);
    // 方式2
    this.$request.get('/login', { name: '11', password: '22' }).then(res => {
      console.log(res);
    })
  },
  methods: {
    goHome () {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style >
</style>
