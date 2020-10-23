<template>
  <div class="skills-container">
    <a name="skills"></a>
    <div class="skills-header"><span class="title">{{title[currentLanguage]}}</span></div>
		<div class="skills-item-wrapper">
			<div v-for="(item, index) in listSkills" :key="index" class="skills__item hidden">
				{{item}}
			</div>
		</div>
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
			listSkills: ['JavaScript,', 'HTML,', 'CSS,', 'Git,', 'Vue,', 'Vuex,', 'Typescript,', 'Sass,', 'Less,', 'Scrum,', 'Sourcetree,', 'Jquery,', 'Bootstrap,', 'Java']
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
		font-family: 'Titillium Web', sans-serif;
		margin-bottom: 85px;
	}
	&-header {
		width: 100%;
		margin-bottom: 36px;
		.title {
			font-weight: 200;
			background: #2c4b50;
			color: white;
			padding: 10px;
		}
	}
	&-item-wrapper {
		display: flex;
		flex-wrap: wrap;
		text-transform: uppercase;
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
@media only screen and (device-width: 768px) {
	.skills-container {
		margin-bottom: 110px;
	}
}

</style>