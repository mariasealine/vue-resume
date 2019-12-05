<template>
  <b-container fluid class="home-container">
    <a name="home"></a>
    <b-container fluid class="home-container-image">
    <b-row class="name-header container">
      <b-col cols="10" class="text-wrapper">
        <div class="pl-2">
          <b><p class="name">Maria</p> <p class="surname">Sjölin</p></b>
          <p class="profession">{{ text[currentLanguage] }}</p>
        </div>
<!--           <a class="download-btn" v-bind:href="item.loc" download>{{item[currentLanguage]}}</a>
 -->    </b-col>
        <div class="contact-icons">
            <a id="email-link" href="mailto:mia.sjolin@gmail.com">
            <font-awesome-icon icon="envelope" />
            </a>
            <a id="linkedin-link" href="https://www.linkedin.com/in/maria-sjölin-56398715a/">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
        </div>
    </b-row>
    </b-container>
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
}
.surname {
  color: #d6c00b;
}
.profession {
  color: #f8f9fa;
  font-size: 40px;
  height: 180px;
}
.download-btn {
  font-size: 16px;
  border: 2px solid #d6c00b;
}
.contact-icons {
    font-size: 25px;
    position: absolute;
    right: 5%;
    bottom: 27%;
    #email-link {
        margin-right: 15px;
        color: #d6c10b;
    }
    #linkedin-link {
        margin-right: 15px;
        color: white;
    }
}

@media screen and (max-width: 576px) {
    .text-wrapper {
    padding-left: 0;
    }
}
</style>
