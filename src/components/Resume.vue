<template>
  <div class="resume-container" :class="colorSwitch ? 'invert' : ''">
    <a name="resume"></a>
      <a class="download-resume" :class="colorSwitch ? 'invert' : ''" :href="`${publicPath}${resume[currentLanguage]}`" download="resume"><font-awesome-icon icon="file-download" />{{buttonName[currentLanguage]}}</a>
      <div class="circle" @click="[colorSwitch = !colorSwitch]"></div>
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
      },
      resume: {
        // TODO: Add correct files for resumes
        Eng: 'favicon.ico',
        Sve: 'favicon3.ico'
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
    z-index: 2;
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
}
@media screen and (min-width: 576px) {
  .resume-container {
    justify-content: center;
  }
}
</style>
