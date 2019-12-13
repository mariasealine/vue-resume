<template>
  <b-container class="history-container">
    <a name="history"></a>
    <div class="new-header">{{title[currentLanguage]}}</div>
      <section class="history-cards__container">
        <div v-for="(item, index) in text[currentLanguage]" :key="index" class="history-cards__item hidden dont-show-yet">
          <h5 class="history-cards__item--year">{{item.year}}</h5>
          <div class="history-cards__item--text">{{item.description}}</div>
        </div>
        <div class="history-cards__item show-more-box">
          <div class="animated-button" @click="nextItems">
            <p v-if="further">{{buttontext[currentLanguage].back}}</p>
            <p v-else>{{buttontext[currentLanguage].topresent}}</p>
          </div>
        </div>
        {{buttontext[currentLanguage].toPresent}}
      </section>
  </b-container>
</template>
<script>
export default {
    data() {
      return {
        further: true,
        title: {
          Eng: 'My history',
          Sve: 'Min historia'
        },
        buttontext: {
          Eng: {back: 'Further back', topresent: 'Back to the present'},
          Sve: {back: 'Längre tillbaka', topresent: 'Tillbaka till nutid'}
        },
        text: {
          Eng: [{year: '2018-now', description: 'Telia company AB, software developer'}, 
          {year: '2018', description: 'Accelerated learning programme, Academy'},
          {year: '2013-2016', description: 'Speech and language therapist, Röstkonsulten AB'},
          {year: '2009-2013', description: 'Speech and language therapy studies, Karolinska Institutet'},
          {year: 2008, description: 'Law survey course, Uppsala University'},
          {year: '2007-2009', description: 'Hotel receptionist, Ibis Arlanda'},
          {year: '2006-2007', description: 'Pharmacy studies, Uppsala University'},
          {year: '2005', description: 'French studies, Univeritée Paul Valery, Montpellier'}],
          Sve: [{year: 2005, description: `Franska (15 hp), Universitée Paul Valery, Montpellier`}, 
          {year: '2006-2007', description: `Apotekarprogrammet (2 terminer, 60 hp) Uppsala Universitet.`},
          {year: 2008, description: `Juridisk översiktskurs (15 hp) på Uppsala Universitet.`},
          {year: '2009-2013', description: `Logopedprogrammet (240 hp), Karolinska institutet.`},
          {year: 2015, description: `Handledarutbildning (2 hp) Karolinska Institutet`},
          {year: 2018, description: `Accelerated Learning Programme Java, Academy Stockholm`}
          ]
        },
        /* text: {
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
        }, */
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
      for (let i = 0; i<3; i++) {
        items[i].classList.remove('dont-show-yet');
        items[i].classList.add('showing');
      }
    },
    nextItems() {
      const items = document.querySelectorAll('.history-cards__item');
      let x; let y; let z;
      if(items[0].classList.contains('showing')) {
        x = 0; y = 3; z = 6;
      } else if (items[3].classList.contains('showing')) {
        x = 3; y = 6; z = 8;
        this.further = false;
      } else if (items[6].classList.contains('showing')) {
        x = 6; y = 8;
        this.showItemsStart();
        this.further = true;
      }
      for(let i = x; i<y; i++) {
        items[i].classList.remove('showing');
        items[i].classList.add('dont-show-yet');
      } for (let i = y; i<z; i++) {
        items[i].classList.add('showing');
        items[i].classList.remove('dont-show-yet');
      }
    },
    changeText() {
      const textButton = document.querySelector('.animated-button');
      textButton.innerHTML('Back to present');
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
      // flex-wrap: wrap;
      justify-content: center;
      .show-more-box {
        position: absolute;
        right: -100px;
        display: flex;
        justify-content: center;
        .animated-button {
          height: 50px;
          width: 50px;
          background-color: #dcb55c;
          text-align: center;
          padding-top: 19%;
          border-radius: 50%;
        }
      }
    }
    &__item {
      width: 33%;
      height: 400px;
      padding: 15px;
      margin: 5px;
      &:nth-child(1), &:nth-child(5) {
        background-color: #f8f9fa;
      }
      &:nth-child(2), &:nth-child(6), &:nth-child(8) {
        background-color: #eacfae;
      }
      &:nth-child(3), &:nth-child(4), &:nth-child(7) {
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
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }
    &__item {
      width: 100%;
    }
  }
}
</style>