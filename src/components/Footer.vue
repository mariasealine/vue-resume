<template>
  <div class="footer-container">
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
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
@import '../assets/keyframes.scss';

.footer-container {
  font-family: "Raleway", sans-serif;
  padding: 36px;
  position: relative;
  .circle {
		z-index: 2;
		position: absolute;
		left: -63px;
		border-radius: 50%;
		width: 200px;
		height: 200px;
		background-color: #c55544;
	}
}
</style>
