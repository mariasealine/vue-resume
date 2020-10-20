<template>
  <div class="home-container" :class="colorSwitch ? 'blue' : 'yellow'">
    <!-- <div class="moving-object moving-object__small" @click="colorSwitch = !colorSwitch"></div> -->
    <div class="moving-object moving-object__big" :class="{ active: moveSwitch }" @click="[moveSwitch = !moveSwitch, colorSwitch = !colorSwitch]">
    </div>
    <a name="home"></a>
    <b-row class="name-header container">
      <b-col cols="10" class="text-wrapper">
        <div class="pl-4">
          <b><p class="name">Maria</p> <p class="surname">Sjölin</p></b>
          <p class="profession">{{ text[currentLanguage] }}</p>
        </div>
        </b-col>
        <div class="contact-icons">
            <a id="email-link" href="mailto:mia.sjolin@gmail.com">
              <font-awesome-icon icon="envelope" />
            </a>
            <a id="linkedin-link" href="https://www.linkedin.com/in/maria-sjölin-56398715a/">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a id="github-link" href="https://github.com/mariasealine">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorSwitch: false,
      moveSwitch: false,
      text: {
        Eng: 'Software developer',
        Sve: 'Utvecklare'
      },
    }
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      }
    },
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/keyframes.scss';
@import url('https://fonts.googleapis.com/css?family=Staatliches');

.home-container {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  height: 500px;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
  background-image: -webkit-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench.png');
  background-image:  -moz-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench.png');
  background-image:  -o-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench.png');
  background-image:  -ms-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench.png');
  background-image:  linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench.png');
  &.blue {
    background-image: -webkit-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench-blue.png');
    background-image:  -moz-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench-blue.png');
    background-image:  -o-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench-blue.png');
    background-image:  -ms-linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench-blue.png');
    background-image:  linear-gradient(to right, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 90%), url('../assets/me-bench-blue.png');
  }
  .name-header {
    padding-top: 80px;
    align-content: center;
    font-family: 'Staatliches';
    font-size: 70px;
  }
  .moving-object {
    cursor: pointer;
    z-index: 2;
    position: absolute;
    border-radius: 50%;
    &__small {
      width: 30px;
      height: 30px;
      top: 111px;
      right: 100px;
      -webkit-animation: growing-obj 7s linear infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: growing-obj 7s linear infinite; /* Firefox < 16 */
      -ms-animation: growing-obj 7s linear infinite; /* Internet Explorer */
      -o-animation: growing-obj 7s linear infinite; /* Opera < 12.1 */
      animation: growing-obj 7s linear infinite;
    }
    &__big {
      width: 100px;
      height: 100px;
      top: 430px;
      left: 40px;
      background-color: #2c4b50;
      -webkit-animation: movingX 5s infinite; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: movingX 5s infinite; /* Firefox < 16 */
      -ms-animation: movingX 5s infinite; /* Internet Explorer */
      -o-animation: movingX 5s infinite; /* Opera < 12.1 */
      animation: movingX 5s infinite;
      &.active {
        -webkit-animation: bouncing 0.5s cubic-bezier(.5,0.05,1,.5) alternate infinite; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: bouncing 0.5s cubic-bezier(.5,0.05,1,.5) alternate infinite; /* Firefox < 16 */
        -ms-animation: bouncing 0.5s cubic-bezier(.5,0.05,1,.5) alernate infinite; /* Internet Explorer */
        -o-animation: bouncing 0.5s cubic-bezier(.5,0.05,1,.5) alternate infinite; /* Opera < 12.1 */
        animation: bouncing 0.5s cubic-bezier(.5,0.05,1,.5) alternate infinite;
      }
    }
  }
  
  .name {
    color: #f8f9fa;
    margin-bottom: unset;
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }
  .surname {
    line-height: 1;
    color: #d6c00b;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
  }
  .profession {
    color: #f8f9fa;
    font-size: 40px;
    line-height: 1;
    -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 4s; /* Firefox < 16 */
    -ms-animation: fadein 4s; /* Internet Explorer */
    -o-animation: fadein 4s; /* Opera < 12.1 */
    animation: fadein 4s;
  }
  .download-btn {
    font-size: 16px;
    border: 2px solid #d6c00b;
  }
  .contact-icons {
    font-size: 25px;
    position: absolute;
    right: 5%;
    top: 450px;
    a {
      display: inline-block;
      margin-right: 15px;
      transition: transform .2s;
      &:hover {
        transform: scale(1.2);
      }
      &#email-link, &#github-link {
        color: #d6c10b;
      }
      &#linkedin-link {
        color: white;
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .home-container {
    background-position: 15%;
    background-image: url('../assets/me-bench.png');
    background-attachment: unset;
    .name {
      padding-top: 60px;
    }
    .circle__small {
      top: 69px;
      right: 32px;
    }
    &.red {
      background-image: url('../assets/me-bench-blue.png');
      }
    .text-wrapper {
      padding-left: 0;
    }
  }
}

.test-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 111px;
  right: 100px;
  -webkit-animation: growing-obj 7s linear infinite; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: growing-obj 7s linear infinite; /* Firefox < 16 */
  -ms-animation: growing-obj 7s linear infinite; /* Internet Explorer */
  -o-animation: growing-obj 7s linear infinite; /* Opera < 12.1 */
  animation: growing-obj 7s linear infinite;
}
</style>
