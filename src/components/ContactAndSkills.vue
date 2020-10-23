<template>
  <div class="skills-container">
    <a name="skills"></a>
    <div class="contact-me__box">
      <div class="arrows-wrapper">
        <div class="animate-arrow"></div>
        <div class="animate-arrow"></div>
        <div class="animate-arrow"></div>
      </div>
      <p class="contact-me__box--text">{{contactText[currentLanguage]}}</p>
    </div>
    <div class="skills-text hidden">
      <span class="header">{{title[currentLanguage]}}</span>
      <div class="intro">{{text[currentLanguage]}}</div>
      <div class="skills-item-wrapper">
        <div v-for="(item, index) in listSkills" :key="index" class="skills__item hidden">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: {
        Eng: 'Skills',
        Sve: 'Kompetens'
      },
      text: {
        Eng: `I've made this site with Vue which is a framework I really enjoy working with. 
        Here comes a list of things I have working experience with:`,
        Sve: `Den här sidan har jag byggt i Vue vilket är ett ramverk som jag verkligen tycker om
        att arbeta med. Nedan följer en lista av vad jag har erfarenhet att jobba med:`
      },
      listSkills: ['JavaScript,', 'HTML,', 'CSS,', 'Vue,', 'Vuex,', 'Sass,', 'Less,', 'Git,', 'Scrum,', 'Sourcetree,', 'Typescript,', 'Jquery,', 'Bootstrap,', 'Java'],
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

.skills-container {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  height: auto;
  font-family: 'Titillium Web', sans-serif;
  .skills-text {
    width: 70%;
    padding: 36px;
    padding-top: 50px;
    font-family: 'Titillium Web', sans-serif;
    font-size: 25px;
    font-weight: 200;
    .header {
      background-color: #2c4b50;
      color: white;
      padding: 10px;
      margin-bottom: 36px;
    }
  }
  .intro {
    padding-top: 32px;
  }
  .skills-item-wrapper {
    display: flex;
		flex-wrap: wrap;
		text-transform: uppercase;
    padding-top: 30px;
    font-weight: 400;
    .skills__item {
			padding-right: 8px;
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
  .skills-container {
    flex-direction: column;
    height: auto;
    padding: 0;
    .skills-text {
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