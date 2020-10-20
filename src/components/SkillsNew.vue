<template>
  <div class="skills-container">
    <a name="skills"></a>
    <div class="skills-header"><span class="title">{{title[currentLanguage]}}</span></div>
		<div class="skills-item-wrapper">
			<div v-for="(item, index) in listSkills" :key="index" class="skills__item hidden">
				{{item}}
			</div>
		</div>
		<div class="circle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      title: {
        Eng: 'Skills',
        Sve: 'Kompetenser'
			},
			listSkills: ['JavaScript,', 'Git,', 'Vue,', 'Vuex,', 'Typescript,', 'HTML,', 'CSS,', 'Sass,', 'Less,', 'Scrum,', 'Sourcetree,', 'Java,', 'Jquery,', 'Bootstrap']
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
.skills {
	&-container {
		display: flex;
		flex-wrap: wrap;
		padding: 36px;
		font-size: 25px;;
		font-family: "Raleway", sans-serif;
		margin-bottom: 80px;
	}
	&-header {
		width: 100%;
		margin-bottom: 36px;
		.title {
			background: #2c4b50;
			color: white;
			padding: 10px;
		}
	}
	&-item-wrapper {
		display: flex;
		flex-wrap: wrap;
		.skills__item {
			padding-right: 8px;
		}
	}
}

@media screen and (max-width: 576px) {
  .skills {
		&-container {
			font-size: 20px;
		}
	}
}

</style>