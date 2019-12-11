<template>
  <div class="home-container">
    <div class="moving-obj"></div>
    <div class="moving-obj2"></div>
    <div class="moving-obj3"></div>
    <div class="moving-obj4"></div>
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
        text: {
          Eng: 'Software developer',
          Sve: 'Utvecklare'
        },
        // item: {Eng: 'Download Resumé', Sve: 'Hämta CV', loc: require('../assets/jag.png')}
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
@import url('https://fonts.googleapis.com/css?family=Staatliches');

.home-container {
  // background: url('../assets/me-bench.png') no-repeat;
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
  .name-header {
    padding-top: 80px;
    align-content: center;
    font-family: 'Staatliches';
    font-size: 70px;
  }
  .moving-obj {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 111px;
    right: 100px;
    -webkit-animation: moving 7s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: moving 7s infinite; /* Firefox < 16 */
    -ms-animation: moving 7s infinite; /* Internet Explorer */
    -o-animation: moving 7s infinite; /* Opera < 12.1 */
    animation: moving 7s infinite;
  }
  .moving-obj2 {
    width: 100px;
    height: 100px;
    z-index: 2;
    border-radius: 50%;
    position: absolute;
    top: 430px;
    left: 40px;
    background-color: #dcb55c;
    -webkit-animation: movingtwo 5s infinite; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: movingtwo 5s infinite; /* Firefox < 16 */
    -ms-animation: movingtwo 5s infinite; /* Internet Explorer */
    -o-animation: movingtwo 5s infinite; /* Opera < 12.1 */
    animation: movingtwo 5s infinite;
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
    height: 180px;
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
    background-image: none;
    background: url('../assets/me-bench.png') no-repeat;
    background-attachment: fixed;
    -webkit-background-size: auto 87%;
    -moz-background-size: auto 87%;
    -o-background-size: auto 87%;
    background-size: auto 87%;
    .text-wrapper {
      padding-left: 0;
    }
  }
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes moving {
    0% { transform: scale(1); background-color: #f8f9fa; }
    50%   { transform: scale(1.5); background-color: #dcb55c; }
    100% { transform: scale(1); background-color: #f8f9fa; }
}

/* Firefox < 16 */
@-moz-keyframes moving {
    0% { transform: scale(1); background-color: #f8f9fa; }
    50%   { transform: scale(1.5); background-color: #dcb55c; }
    100% { transform: scale(1); background-color: #f8f9fa; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes moving {
    0% { transform: scale(1); background-color: #f8f9fa; }
    50%   { transform: scale(1.5); background-color: #dcb55c; }
    100% { transform: scale(1); background-color: #f8f9fa; }
}

/* Internet Explorer */
@-ms-keyframes moving {
    0% { transform: scale(1); background-color: #f8f9fa; }
    50%   { transform: scale(1.5); background-color: #dcb55c; }
    100% { transform: scale(1); background-color: #f8f9fa; }
}

/* Opera < 12.1 */
@-o-keyframes moving {
    0% { transform: scale(1); background-color: #f8f9fa; }
    50%   { transform: scale(1.5); background-color: #dcb55c; }
    100% { transform: scale(1); background-color: #f8f9fa; }
}
@keyframes movingtwo {
    0% { transform: translateX(0%); background-color: #f8f9fa; }
    50%   { transform: translateX(40%); background-color: #dcb55c; }
    100% { transform: translateX(0%); background-color: #f8f9fa; }
}
@-webkit-keyframes movingtwo {
    0% { transform: translateX(0%); background-color: #f8f9fa; }
    50%   { transform: translateX(40%); background-color: #dcb55c; }
    100% { transform: translateX(0%); background-color: #f8f9fa; }
}
</style>
