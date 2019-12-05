<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
    <about></about>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  data() {
    return {
      locales: [ {id: 'Eng', name: 'English'}, {id: 'Sve', name: 'Svenska'}]
    }
  },
  components: {
    Navbar,
    Home,
    About
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
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
@import url('https://fonts.googleapis.com/css?family=Staatliches');

body {
  background-color: #cbcbcc !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

select {
  position: fixed;
  top: 2px;
  right: 2px;
  background-color: transparent;
  border: none;
  color: #d7c100;
  font-family: 'Staatliches';
}
select:focus {
  outline: none;
}

option {
  background-color: none;
  color: #d7c100; 
}
</style>
