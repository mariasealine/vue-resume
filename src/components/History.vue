<template>
  <b-container class="history-container">
    <div class="new-header">{{title[currentLanguage]}}</div>
    <a name="history"></a>
    <!-- <h4 class="header-line">
      <span class="header-title">{{title[currentLanguage]}}</span>
      </h4> -->
      <section class="history-cards__container">
        <div v-for="(item, index) in text[currentLanguage]" :key="index" class="history-cards__item hidden dont-show-yet">
          <h5 class="history-cards__item--year">{{item.year}}</h5>
          <div class="history-cards__item--text">{{item.description}}</div>
        </div>
        <div class="history-cards__item show-more-box">
          <div class="animated-button">Further back</div>
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
  mounted() {
    this.showItemsStart();
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      }
    }
  },
  methods: {
    showItemsStart() {
      const items = document.querySelectorAll('.history-cards__item');
      console.log(items);
      for (let i = 0; i<3; i++) {
        items[i].classList.remove('dont-show-yet');
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.history-container {
  margin-top: 70px;
  .new-header {
    background-color: #c55644;
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    font-family: "Raleway", sans-serif;
  }
}
.history-cards {
    &__container {
      margin-top: 70px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .show-more-box {
        display: flex;
        justify-content: center;
        .animated-button {
          height: 150px;
          width: 150px;
          background-color: #dcb55c;
          text-align: center;
          padding-top: 19%;
          border-radius: 50%;
        }
      }
    }
    &__item {
      width: 40%;
      height: 200px;
      padding: 20px;
      margin: 20px;
      &:nth-child(1) {
        background-color: #f8f9fa;
      }
      &:nth-child(2) {
        background-color: #eacfae;
      }
      &:nth-child(3) {
        background-color: #9cafc3;
      }
      &--year {
        text-align: center;
      }
      &.dont-show-yet {
        display: none;
      }
    }
}
//TODO Fix this
@media screen and (max-width: 576px) {
  .history-cards {
    &__container {
      justify-content: left;
    }
    &__item {
      width: 100%;
    }
  }
}
</style>