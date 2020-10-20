<template>
  <div id="app">
    <div id="overlay">
      <Navbar></Navbar>
      <Home></Home>
      <about></about>
      <resume></resume>
      <skills-new></skills-new>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
// import History from './components/History.vue'
// import HistoryFlipCards from './components/HistoryFlipCards.vue'
import Resume from './components/Resume.vue'
import SkillsNew from './components/SkillsNew.vue'
import Footer from './components/Footer.vue'


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
    SkillsNew,
    Resume,
    Footer
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
@import './assets/keyframes.scss';
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Staatliches');
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway');

body {
  background: antiquewhite;
  #overlay {
    width: 100%;
    height: 100%;
    // background-color: black;
    opacity: 1;
    -webkit-animation: fadeout 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadeout 3s; /* Firefox < 16 */
    -ms-animation: fadeout 3s; /* Internet Explorer */
    -o-animation: fadeout 3s; /* Opera < 12.1 */
    animation: fadeout 3s;
  }
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

</style>
