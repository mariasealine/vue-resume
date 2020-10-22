<template>
  <div class="resume-container" :class="colorSwitch ? 'invert' : ''">
    <a name="resume"></a>
      <button class="download-resume" :class="colorSwitch ? 'invert' : ''" @click="openLanguageModal"><font-awesome-icon icon="file-download" />{{buttonName[currentLanguage]}}</button>
      <div class="circle" @click="[colorSwitch = !colorSwitch]"></div>
      <div class="download-resume-modal">
        <div class="link-wrapper">
          <button class="close"><font-awesome-icon icon="times" /></button>
          <a class="download-resume language" :href="`${publicPath}resume-english.pdf`" download="maria-sjolin-resume"><i class="flag-icon flag-icon-gb" />English</a>
          <a class="download-resume language" :href="`${publicPath}resume-swedish.pdf`" download="maria-sjolin-cv"><i class="flag-icon flag-icon-se" />Svenska</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorSwitch: false,
      publicPath: process.env.BASE_URL,
      buttonName: {
        Eng: 'Download resume',
        Sve: 'Ladda ner CV'
      }
    }
  },
  methods: {
    openLanguageModal() {
      const modal = document.querySelector('.download-resume-modal');
      const close = document.querySelector('.close');
      modal.style.display = 'block';
      close.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
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
}
</script>

<style lang="scss">

.resume-container {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Titillium Web', sans-serif;
  padding: 36px;
  margin: 30px 0;
  background: #2c4b50;
  position: relative;
  &.invert {
    background: #c55544;
  }
  .download-resume {
    background: #bf9c4c;
    color: white;
    padding: 10px;
    border: 2px solid white;
    text-transform: uppercase;
    &.invert {
      background: #2c4b50;
    }
    &:hover, &:focus, &:active {
      background: #a77a12;
    }
    svg {
      margin-right: 10px;
    }
  }
  .circle {
    cursor: pointer;
    z-index: 1;
    position: absolute;
    right: 50px;
    top: -15px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-color: #c55544;
    -webkit-animation: growing-obj 6s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: growing-obj 6s infinite; /* Firefox < 16 */
    -ms-animation: growing-obj 6s infinite; /* Internet Explorer */
    -o-animation: growing-obj 6s infinite; /* Opera < 12.1 */
    animation: growing-obj 6s infinite;
  }
  .download-resume-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0, 0, 0, 0.6);
    .link-wrapper {
      z-index: 2;
      display: flex;
      justify-content: center;
      position: relative;
      background: #1e363a;
      margin: 25% auto;
      padding: 20px;
      border: 1px solid black;
      width: 90%;
      .close {
        position: absolute;
        right: 10px;
        top: 6px;
        color: white;
      }
      .language {
        margin: 10px;
      }
      .flag-icon {
        margin-right: 8px;
      }
    }
  }
}
@media screen and (min-width: 576px) {
  .resume-container {
    justify-content: center;
    .download-resume-modal {
      .link-wrapper {
        width: 65%;
      }
    }
  }
}
</style>
