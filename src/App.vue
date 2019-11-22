<template>
  <div id="app">
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  data() {
    return {
      locales: [ {id: 'Eng', name: 'English'}, {id: 'Sve', name: 'Svenska'}]
    }
  },
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('updateLanguage', 'Eng')
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      },
      set(str) {
        this.$store.dispatch('updateLanguage', str)
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
