<template>
  <div class="uptime">
    <p>{{ uptime }}</p>
  </div>
</template>

<script>
import reticulate from 'reticulating-splines'

export default {
  name: 'uptime',
  data () {
    return {
      uptime: reticulate.random() + '...'
    }
  },
  created () {
    this.$http.get('/uptime').then((response) => {
      console.log(response)
      this.uptime = response.body
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
