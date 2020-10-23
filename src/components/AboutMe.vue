<template>
  <div class="about-container">
    <a class="about-anchor" name="about"></a>
    <div class="about-header"><span class="title">{{title[currentLanguage]}}</span></div>
		<div class="section-one hidden">{{aboutSectionOne[currentLanguage]}}</div>
		<div class="section-two hidden">{{aboutSectionTwo[currentLanguage]}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      title: {
        Eng: 'About me',
        Sve: 'Vem är jag?'
			},
			aboutSectionOne: {
				Eng: `To begin with I am a person who really enjoys to challenge myself. 
				I love learning new things, and strive to get excellent in the things I find most interesting. 
				As a result from this I’ve been studying and working with a variety of things. 
				Before I started working as a developer, I worked as a speech and language therapist for several years, 
				and this is a profession that is still very close to my heart.`,
				Sve: `Till att börja med är jag en person som verkligen tycker om att utmana mig själv. Jag älskar att lära mig nya saker 
				och strävar efter att bli riktigt bra på det jag gillar. Som ett resultat av detta har jag studerat och arbetat inom flertalet 
				områden. Innan jag kom in på banan som utvecklare arbetade jag som legitimerad logoped under flera år, och detta är ett yrke 
				som fortfarande ligger mig mycket varmt om hjärtat.`
			},
			aboutSectionTwo: {
				Eng: `However, I have always felt curious about coding and what I’ve come to love the most about this line of work is 
				the creativity and the possibilities, along with the endless opportunities of things to learn.`,
				Sve: `Jag har dock alltid känt en nyfikenhet gentemot kod och det jag gillar 
				mest med detta arbete är kreativiteten och möjligheterna, samt att det alltid finns nya saker att lära sig..`
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
.about {
	&-anchor {
		display: block;
    position: relative;
    top: -120px;
    visibility: hidden;
	}
	&-container {
		display: flex;
		flex-wrap: wrap;
		padding: 36px;
		font-size: 25px;;
		font-family: 'Titillium Web', sans-serif;
		font-weight: 200;
		margin-bottom: 85px;
		.section-two {
			padding-top: 24px;
		}
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
}

@media screen and (max-width: 576px) {
  .about {
		&-container {
			font-size: 20px;
		}
	}
}
@media only screen and (device-width: 768px) {
	.about-container {
		margin-bottom: 110px;
	}
}

</style>