<template>
  <div>
    <b-container class="about-container">
        <a name="about"></a>
        <h4 class="header-line">
        <span class="header-title">{{title[currentLanguage]}}</span>
        </h4>
        <div class="about-text hidden">
        {{text[currentLanguage]}}
        </div>
    </b-container>
    <div class="testing"><p>"I hate cliché inspirational quotes and yet I feel like putting one here"</p></div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        title: {
          Eng: 'About',
          Sve: 'Om mig'
        },
        text: {
          Eng: `So who am I in a few hundred words. Let’s give it a go! 
          To begin with I am a person who really enjoys to challenge myself. 
          I love learning new things, and strive to get excellent in the things I find most interesting. 
          As a result from this I’ve been studying and working with a variety of things. 
          In the end I found what now feels like what I was meant to do, developing. 
          What I love most about this line of work is the creativity and the possibilities, 
          along with the endless opportunities of things to learn. 
          If you want to know more about me, don’t hesitate to contact me by email or linkedin!`,
          Sve: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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



<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');

.about-container {
  margin-top: 70px;
}
.testing {
  width: 100%;
  height: 150px;
  background-color: #164658;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
  }
}

h4 {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  margin-top: 40px;
}

h4.header-line {
    position: relative;
    z-index: 1;
}
h4.header-line:before {
    border-top: 2px solid #dfdfdf;
    content:"";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
    top: 50%; left: 0; right: 0; bottom: 0;
    width: 95%;
    z-index: -1;
}

.header-title { 
    background: #fff; 
    padding: 10px;
    font-size: 24px;
    border-radius: 4%;
    border: 3px solid #d7c100;
}

.about-text {
  padding: 36px;
  font-family: 'Raleway', sans-serif;
  font-size: 25px;
}

@media screen and (max-width: 576px) {
    .about-text {
        font-size: 18px;
        padding: 10px;
        padding-top: 25px;
    }
    .header-title {
        margin-left: 20px;
        text-align: left;
    }
    .header-line {
        text-align: left;
    }
}

</style>
