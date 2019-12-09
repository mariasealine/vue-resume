<template>
  <b-container class="history-container">
    <a name="history"></a>
    <h4 class="header-line">
      <span class="header-title">{{title[currentLanguage]}}</span>
      </h4>
      <section class="history-cards__container">
          <div v-for="(item, index) in text[currentLanguage]" :key="index" class="history-cards__item hidden">
                <h5 class="history-cards__item--year">{{item.year}}</h5>
                <div class="history-cards__item--text"></div>
                {{item.description}}
            </div>
      </section>
  </b-container>
</template>
<script>
export default {
    data() {
      return {
        title: {
          Eng: 'My history',
          Sve: 'Min historia'
        },
        text: {
          Eng: [{year: 2005, description: 'French (15 hp), Universitée Paul Valery, Montpellier'}, 
          {year: '2006-2007', description: 'Pharmacy (2 semesters, 60 hp, Uppsala University'},
          {year: 2008, description: 'Law survey course (15 hp), Uppsala University'},
          {year: '2009-2013', description: 'Speech and language therapy (240 hp), Karolinska Institutet'},
          {year: 2015, description: 'Mentoring course (2 hp), Karolinska Institutet Stockholm'},
          {year: 2018, description: 'Accelerated Learning Programme in programming, Academy Stockholm'}],
          Sve: [{year: 2005, description: `Franska (15 hp), Universitée Paul Valery, Montpellier`}, 
          {year: '2006-2007', description: `Apotekarprogrammet (2 terminer, 60 hp) Uppsala Universitet.`},
          {year: 2008, description: `Juridisk översiktskurs (15 hp) på Uppsala Universitet.`},
          {year: '2009-2013', description: `Logopedprogrammet (240 hp), Karolinska institutet.`},
          {year: 2015, description: `Handledarutbildning (2 hp) Karolinska Institutet`},
          {year: 2018, description: `Accelerated Learning Programme Java, Academy Stockholm`}
          ]
        },
        guideHeader: null
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
.history-container {
  margin-top: 70px;
}
.history-cards {
    &__container {
      margin-top: 70px;
      display: flex;
      flex-wrap: wrap;
    }
    &__item {
      width: 300px;
      height: 200px;
      &--year {
        text-align: center;
      }
    }
}
</style>