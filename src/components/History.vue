<template>
<div>
  <b-container class="history-container">
    <a name="history"></a>
      <section class="history-cards__container">
        <div class="new-header">{{title[currentLanguage]}}</div>
        <div class="slideshow-container">
          <div v-for="(item, index) in text[currentLanguage]" :key="index" class="history-cards__item my-slides" :style="{ background: 'url(' + text[currentLanguage][index].image + ')' }">
            <h5 class="history-cards__item--year">{{item.year}}</h5>
            <div class="history-cards__item--text">{{item.description}}</div>
          </div>
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
          <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
      </section>
  </b-container>
</div>
</template>
<script>
export default {
    data() {
      return {
        further: true,
        slideIndex: 1,
        title: {
          Eng: 'My history',
          Sve: 'Min historia'
        },
        buttontext: {
          Eng: {back: 'Further back', topresent: 'Back to the present'},
          Sve: {back: 'Längre tillbaka', topresent: 'Tillbaka till nutid'}
        },
        text: {
          Eng: [{year: '2018-now Software developer', description: 'Telia company AB, software developer'}, 
          {year: '2018 Software development studies', description: 'Accelerated learning programme, Academy'},
          {year: '2013-2016 SLT', description: 'Speech and language therapist, Röstkonsulten AB'},
          {year: '2009-2013 SLT studies', description: 'Speech and language therapy studies, Karolinska Institutet', image: '../assets/logoped.png'},
          {year: '2008 Law studies', description: 'Law survey course, Uppsala University'},
          {year: '2007-2009 Hotel receptionist', description: 'Hotel receptionist, Ibis Arlanda'},
          {year: '2006-2007 Pharmacy studies', description: 'Pharmacy studies, Uppsala University'},
          {year: '2005 French studies', description: 'French studies, Univeritée Paul Valery, Montpellier'}],
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
  mounted() {
    this.showSlides(this.slideIndex);
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      }
    }
  },
  methods: {
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("my-slides");
      // var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      /* for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      } */
      slides[this.slideIndex-1].style.display = "block";
      // slides[this.slideIndex-1].style.background = `${this.text[this.currentLanguage][this.slideIndex-1].background}`;
      // console.log(this.text[this.currentLanguage][this.slideIndex-1].background);

      // dots[slideIndex-1].className += " active";
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    }
  }
};
</script>

<style lang="scss" scoped>
.history-container {
  width: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  .new-header {
    margin-top: 20px;
    background-color: #2c4b50;
    color: white;
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 24px;
    font-family: "Raleway", sans-serif;
  }
}
* {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  padding-top: 40px;
  height: 300px;
  display: flex;
  justify-content: center;
}

/* Hide the images by default */
.my-slides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 20px;
  border-radius: 3px 0 0 3px;
}
.prev {
  left: 20px;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>