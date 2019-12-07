<template>
  <b-container fluid class="home-container">
    <a name="home"></a>
    <b-row class="name-header container">
      <b-col cols="10" class="text-wrapper">
        <div class="pl-2">
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
    </b-container>
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
  background: url('../assets/me-bench.png') no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 500px;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.5);
}
.name-header {
  padding-top: 80px;
  align-content: center;
  font-family: 'Staatliches';
  font-size: 70px;
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
    #email-link {
        display: inline-block;
        margin-right: 15px;
        color: #d6c10b;
        transition: transform .2s;
        &:hover {
            transform: scale(1.2);
        }
    }
    #linkedin-link {
        display: inline-block;
        margin-right: 15px;
        color: white;
        transition: transform .2s;
        &:hover {
            transform: scale(1.2);
        }
    }
    #github-link {
        display: inline-block;
        color: #d6c10b;
        transition: transform .2s;
        &:hover {
            transform: scale(1.2);
        }
    }
}

@media screen and (max-width: 576px) {
    .text-wrapper {
    padding-left: 0;
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
</style>
