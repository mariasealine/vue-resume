<template>
  <div class="portfolio-container">
    <a name="portfolio"></a>
    <div class="portfolio-header"><span class="title">{{title[currentLanguage]}}</span></div>
		<div class="portfolio-item-wrapper">
			<div class="portfolio-item get-advice">
				<div class="tag-wrapper">
					<p class="tag">HTML</p><p class="tag">API</p><p class="tag">CSS</p></div>
					<div class="img advice-img"></div>
			</div>
			<div class="portfolio-item whose-dishes">
				<div class="tag-wrapper">
					<p class="tag">HTML</p><p class="tag">JS</p><p class="tag">CSS</p>
				</div>
				<div class="img dishes-img"></div>
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
        Eng: 'Portfolio',
        Sve: 'Portfolio'
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

.portfolio {
	&-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		font-family: 'Titillium Web', sans-serif;
		padding: 36px;
		margin: 30px 0;
		position: relative;
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
		flex-direction: column;
		width: 100%;
		.portfolio-item {
			position: relative;
			.tag-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: center;
				.tag {
					padding: 0 10px;
					margin: 5px;
					border: 1px solid black;
					border-radius: 8px;
				}
			}
			.img {
				width: 100%;
				height: 300px;
				background-size: contain;
				background-repeat: no-repeat;
			}
			.advice-img {
				background-image: url('../assets/get-advice.png');
			}
			.dishes-img {
				background-image: url('../assets/whose-dishes.png');
			}
		}
	}
}
</style>
