<template>
  <div class="footer-container">
    <div class="circle" @click="active = !active"><div class="mini-circle" :class="active ? 'show' : 'hidden'"></div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
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
@import '../assets/keyframes.scss';

.footer-container {
  position: relative;
  height: 200px;
  width: 100%;
  .circle {
		z-index: 2;
		left: -63px;
		width: 200px;
		height: 200px;
    background-color: #c55544;
    .mini-circle {
      &.hidden {
        display: none;
      }
      &.show {
        width:40px;
        height:40px;
        background-color:#2c4b50;;
        border-radius:50%;
        position:absolute;
        top:0; bottom:0; left:0; right:0;
        overflow:hidden;
        margin:auto;
        animation: circleAround 8s linear infinite;
      }
    }
	}
}

</style>
