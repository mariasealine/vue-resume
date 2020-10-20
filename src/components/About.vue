<template>
  <div class="about-container">
    <a name="about"></a>
    <div class="contact-me__box">
      <div class="arrows-wrapper">
        <div class="animate-arrow"></div>
        <div class="animate-arrow"></div>
        <div class="animate-arrow"></div>
      </div>
      <p class="contact-me__box--text">{{contactText[currentLanguage]}}</p>
    </div>
    <div class="about-text hidden">
      <div class="header">{{title[currentLanguage]}}</div>
      {{text[currentLanguage]}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: {
        Eng: 'Who am I?',
        Sve: 'Vem är jag?'
      },
      text: {
        Eng: `To begin with I am a person who really enjoys to challenge myself. 
        I love learning new things, and strive to get excellent in the things I find most interesting. 
        As a result from this I’ve been studying and working with a variety of things. 
        Before I started working as a developer, I worked as a speech and language therapist for several years, 
        and this is a profession that is still very close to my heart. 
        However, I have always felt curious about coding and what I’ve come to love the most about this line of work is 
        the creativity and the possibilities, along with the endless opportunities of things to learn.`,
        Sve: `Till att börja med är jag en person som verkligen tycker om att utmana mig själv. Jag älskar att lära mig nya saker 
        och strävar efter att bli riktigt bra på det jag gillar. Som ett resultat av detta har jag studerat och arbetat inom flertalet 
        områden. Innan jag kom in på banan som utvecklare arbetade jag som legitimerad logoped under flera år, och detta är ett yrke 
        som fortfarande ligger mig mycket varmt om hjärtat. Jag har dock alltid känt en nyfikenhet gentemot kod och det jag gillar 
        mest med detta arbete är kreativiteten och möjligheterna, samt att det alltid finns nya saker att lära sig.`
      },
      contactText: {
        Eng: 'If you want to know more about me, don’t hesitate to contact me by email or linkedin! Feel free to check out my code on github aswell.',
        Sve: 'Vill du veta mer om mig, ta gärna kontakt med mig via mail eller linkedin! Du kan även ta en titt på min kod på github.'
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
@import '../assets/keyframes.scss';

.about-container {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  height: auto;
  font-family: 'Titillium Web', sans-serif;
  .about-text {
    width: 70%;
    padding: 36px;
    padding-top: 50px;
    font-family: 'Titillium Web', sans-serif;
    font-size: 25px;
    font-weight: 200;
    .header {
      background-color: #2c4b50;
      color: white;
      width: 33%;
      padding: 10px;
      margin-bottom: 36px;
    }
  }
  .contact-me__box {
    height: 300px;
    width: 30%;
    background-color: #dcb55c;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    padding-top: 70px;
    &--text {
      font-size: 16px;
      font-weight: 400;
    }
    .arrows-wrapper {
      font-size: 25px;
      position: absolute;
      right: 5%;
      top: 500px;
      .animate-arrow {
        display: inline-block;
        margin-right: 12px;
        width: 0;
        height: 0;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-bottom: 20px solid #c55645;
        -webkit-animation: arrow 4s infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: arrow 4s infinite; /* Firefox < 16 */
        -ms-animation: arrow 4s infinite; /* Internet Explorer */
        -o-animation: arrow 4s infinite; /* Opera < 12.1 */
        animation: arrow 4s infinite;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .about-container {
    flex-direction: column;
    height: auto;
    padding: 0;
    .about-text {
      width: 100%;
      font-size: 20px;
      .header {
        width: 43%;
      }
    }
    .contact-me__box {
      height: 220px;
      width: 100%;
    }
  }
}
</style>