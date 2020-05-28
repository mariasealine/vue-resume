<template>
  <div class="history-container">
    <a name="history"></a>
    <div class="new-header">{{title[currentLanguage]}}</div>
    <div v-for="(item, index) in text[currentLanguage]" :key="index" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front" :class="'flip-card-front--'+index">
          <h5 class="card-front--year">{{item.year}}</h5>
          <p class="card-front--title">{{item.title}}</p>
        </div>
        <div class="flip-card-back">
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
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
        Eng: [{year: '2018-now', title: 'Software developer', description: 'Telia company AB, software developer'}, 
        {year: '2018', title: 'Accelerated learning programme', description: 'Accelerated learning programme, Academy'},
        {year: '2013-2016', title: 'Speech and language therapist', description: 'Speech and language therapist, Röstkonsulten AB'},
        {year: '2009-2013', title: 'Speech and language therapy studies', description: 'Speech and language therapy studies, Karolinska Institutet'},
        {year: '2008', title: 'Law studies', description: 'Law survey course, Uppsala University'},
        {year: '2007-2009', title: 'Hotel receptionist', description: 'Hotel receptionist, Ibis Arlanda'},
        {year: '2006-2007', title: 'Pharmacy studies', description: 'Pharmacy studies, Uppsala University'},
        {year: '2005', title: 'French studies', description: 'French studies, Univeritée Paul Valery, Montpellier'}],
        //TODO: fel ordning på svenska
        Sve: [{year: 2005, description: `Franska (15 hp), Universitée Paul Valery, Montpellier`}, 
        {year: '2006-2007', description: `Apotekarprogrammet (2 terminer, 60 hp) Uppsala Universitet.`},
        {year: 2008, description: `Juridisk översiktskurs (15 hp) på Uppsala Universitet.`},
        {year: '2009-2013', description: `Logopedprogrammet (240 hp), Karolinska institutet.`},
        {year: 2015, description: `Handledarutbildning (2 hp) Karolinska Institutet`},
        {year: 2018, description: `Accelerated Learning Programme Java, Academy Stockholm`}
        ]
      }
    }
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.history-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .new-header {
    margin-top: 20px;
    margin-bottom: 40px;
    background-color: #2c4b50;
    color: white;
    width: 90%;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    font-family: "Raleway", sans-serif;
  }
  .flip-card-front {
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    &--0 {
      background: #c55644;
    }
    &--1 {
      background: #2c4b50;
      border-radius: 50%;
    }
    &--2 {
      background: #2c4b50;
      border-radius: 50%;    }
    &--3 {
      background: #dcb55c;
      border-radius: 50%;
    }
    &--4 {
      background: #2c4b50;
      border-radius: 50%;  
    }
    &--5 {
      background: #dcb55c;
    }
    &--6 {
      background: #dcb55c;
      border-radius: 50%;
    }
    &--7 {
      background: #2c4b50;
    }
    & .card-front {
      &--year {
        width: 160px;
      }
      &--title {
        width: 250px;
      }
    }
  }

  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    margin: 10px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-back {
    background-color: #f2f2f2;
    color: black;
    transform: rotateY(180deg);
    padding: 15px;
    & p {
      text-align: left;
    }
  }
}


</style>