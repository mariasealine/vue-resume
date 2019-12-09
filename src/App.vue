<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
    <about></about>
    <history></history>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import History from './components/History.vue'

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
    About,
    History
  },
  created() {
    this.$store.dispatch('updateLanguage', 'Eng')
  },
  mounted() {
    this.setListenersToAnimateInView();
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
  },
  methods: {
    setListenersToAnimateInView() {
      let elsToFadeIn = document.querySelectorAll('.hidden');
      let windowHeight = window.innerHeight;

      function checkPosition() {
        for (var i = 0; i < elsToFadeIn.length; i++) {
          var element = elsToFadeIn[i];
          var positionFromTop = elsToFadeIn[i].getBoundingClientRect().top;

          if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
          } else {
            element.classList.remove('fade-in-element');
            element.classList.add('hidden');
          }
        }
      }
      window.addEventListener('scroll', checkPosition);
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
@import url('https://fonts.googleapis.com/css?family=Staatliches');

body {
  background-color: #cbcbcc !important;
  .hidden {
    opacity: 0;
  }
  .fade-in-element {
    opacity: 1;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
    animation-fill-mode: both;
  }
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
