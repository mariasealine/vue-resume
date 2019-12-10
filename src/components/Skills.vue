<template>
  <b-container class="skills-container">
    <a name="skills"></a>
    <h4 class="header-line">
      <span class="header-title">{{title[currentLanguage]}}</span>
      </h4>
      <section class="skills-item__container">
          <div v-for="(item, index) in listSkills[currentLanguage]" :key="index" class="skills__item hidden">
                <div class="history-cards__item--text"></div>
                {{item}}
            </div>
      </section>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      title: {
        Eng: 'Skills',
        Sve: 'Kompetenser'
      },
      listSkills: {
        Eng: ['JavaScript', 'Git', 'Vue', 'Vuex', 'Typescript', 'HTML', 'CSS', 'Sass', 'Less', 'Scrum', 'Sourcetree', 'Java', 'Jquery', 'Bootstrap'],
        Sve: ['JavaScript', 'Git', 'Vue', 'Vuex', 'Typescript', 'HTML', 'CSS', 'Sass', 'Less', 'Scrum', 'Sourcetree', 'Java', 'Jquery', 'Bootstrap']
      }
    }
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.skills-item__container {
  margin: 70px 50px 50px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .skills__item {
    padding: 20px;
    &:nth-child(1) {
      font-size: 64px;
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      font-size: 42px;
        animation-delay: 0.5s;
    }
    &:nth-child(3) {
      font-size: 56px;
      animation-delay: 1s;
    }
    &:nth-child(4) {
      font-size: 32px;
      animation-delay: 0.1s;
    }
    &:nth-child(5) {
      font-size: 36px;
      animation-delay: 1.2s;
    }
    &:nth-child(6) {
      font-size: 42px;
      animation-delay: 1s;
    }
    &:nth-child(7) {
      font-size: 64px;
      animation-delay: 0.3s;
    }
    &:nth-child(8) {
      font-size: 45px;
      animation-delay: 0.6s;
    }
    &:nth-child(9) {
      font-size: 56px;
    }
    &:nth-child(10) {
      font-size: 36px;
      animation-delay: 0.7s;
    }
    &:nth-child(11) {
      font-size: 40px;
      animation-delay: 0.4s;
    }
    &:nth-child(12) {
      font-size: 36px;
      animation-delay: 0.7s;
    }
    &:nth-child(13) {
      font-size: 45px;
      animation-delay: 0.2s;
    }
    &:nth-child(14) {
      font-size: 32px;
      animation-delay: 0.4s;
    }
  }
}
</style>