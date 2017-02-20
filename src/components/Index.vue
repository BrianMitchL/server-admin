<template>
  <div class="index">
    <uptime/>
    <p class="info" v-if="info !== ''">{{ info }}</p>
    <button v-on:click="powerOff">Power off</button>
    <button v-on:click="restartPlex">Restart Plex</button>
  </div>
</template>

<script>
import Uptime from './Uptime'

export default {
  name: 'index',
  data () {
    return {
      info: ''
    }
  },
  components: {
    'uptime': Uptime
  },
  methods: {
    powerOff: function () {
      this.$http.get('/power-off').then((response) => {
        console.log(response)
        this.info = 'Shutting down...'
      })
    },
    restartPlex: function () {
      this.$http.get('/restart-plex').then((response) => {
        console.log(response)
        this.info = 'Restarting Plex...'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  font-size: 1.2rem;
}

.uptime, .info {
  flex: 1 0 0;
}

button {
  flex: 2 0 0;
  font-family: inherit;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  color: #ffffff;
  border: none rgba(0, 0, 0, 0);
  text-decoration: none;
  border-radius: 10px;
  background-color: #0074D9;
  margin: 8px;

  &:hover, &:focus {
    background-image: linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10));
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: 0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset;
    border-color: #000;
  }
}

</style>
