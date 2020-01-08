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
        In the end I found what now feels like what I was meant to do, developing. 
        What I love most about this line of work is the creativity and the possibilities, 
        along with the endless opportunities of things to learn.`,
        Sve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
@import url('https://fonts.googleapis.com/css?family=Raleway');

.about-container {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  height: auto;
  .about-text {
    // height: 300px;
    width: 70%;
    background-color: white;
    padding: 36px;
    padding-top: 50px;
    font-family: 'Raleway', sans-serif;
    // font-family: 'Source Serif Pro', serif;
    font-size: 25px;
    .header {
      background-color: #c55644;
      width: 33%;
      padding: 10px;
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