<template>
  <div class="resume-container">
    <a name="resume"></a>
      <a class="download-resume" :href="`${publicPath}${resume[currentLanguage]}`" download="resume">{{buttonName[currentLanguage]}}</a>
      <div class="circle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  .download-resume {
    background: #92783b;
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 6px;
    text-transform: uppercase;
    &:hover, &:focus, &:active {
      background: #a77a12;
    }
  }
  .circle {
    z-index: 2;
    position: absolute;
    right: 50px;
    top: -15px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-color: #c55544;
  }
}
</style>
