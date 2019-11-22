<template>
<div id="my-nav">
  <b-navbar fixed="top" class="my-nav" toggleable="sm" type="dark">
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#home">{{ text[currentLanguage][0] }}</b-nav-item>
        <b-nav-item href="#about">{{ text[currentLanguage][1] }}</b-nav-item>
        <b-nav-item href="#education">{{ text[currentLanguage][2] }}</b-nav-item>
        <b-nav-item href="#experience">{{ text[currentLanguage][3] }}</b-nav-item>
        <b-nav-item href="#contact">{{ text[currentLanguage][4] }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <button @click="toEnglish" class="flag-icon flag-icon-gb language-button">Eng</button>
        <button @click="toSwedish" class="flag-icon flag-icon-se language-button">Sve</button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data() {
      return {
        text: {
          Eng: ['Home', 'About', 'Education', 'Experience', 'Contact'],
          Sve: ['Hem', 'Om', 'Utbildning', 'Erfarenhet', 'Kontakt']
        }
    }
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
    toEnglish() {
      this.$store.dispatch('updateLanguage', 'Eng')
    },
    toSwedish() {
      this.$store.dispatch('updateLanguage', 'Sve')
    }
  }
}
</script>


<style>
#my-nav .my-nav {
  background-color: #131313;
  font-family: 'Raleway', sans-serif;

}

#my-nav .language-button {
  border: none;
  background-color: transparent;
  margin: 5px;
}

#my-nav .language-button:focus {
  outline: none;
}

</style>