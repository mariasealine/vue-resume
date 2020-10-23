<template>
  <div class="header-nav">
      <div class="navbar-content">
				<div class="left-content">
					<a class="navbar-link" href="#home">{{ text[currentLanguage][0] }}</a>
					<a class="navbar-link" href="#about">{{ text[currentLanguage][1] }}</a>
					<a class="navbar-link" href="#resume">{{ text[currentLanguage][2] }}</a>
					<a class="navbar-link" href="#skills">{{ text[currentLanguage][3] }}</a>
				</div>
				<div class="right-content">
					<button @click="toEnglish" class="flag-icon flag-icon-gb language-button"></button>
					<button @click="toSwedish" class="flag-icon flag-icon-se language-button"></button>
				</div>
			</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        text: {
          Eng: ['Home', 'About', 'Resume', 'Skills'],
          Sve: ['Hem', 'Om', 'CV', 'Kompetens']
        }
    }
  },
  created() {
		window.addEventListener('scroll', this.myFunction);
  },
  computed: {
    currentLanguage: {
      get() {
        return this.$store.state.currentLanguage
      },
      set(str) {
        this.$store.dispatch('updateLanguage', str)
			}
    }
  },
  methods: {
    toEnglish() {
      this.$store.dispatch('updateLanguage', 'Eng')
    },
    toSwedish() {
      this.$store.dispatch('updateLanguage', 'Sve')
		},
		myFunction() {
			const header = document.querySelector('.header-nav');
			const sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
				header.classList.add('sticky');
			} else {
				header.classList.remove('sticky');
			}
    }
  }
}
</script>


<style lang="scss">
.header-nav {
	z-index: 5;
	position: fixed;
	width: 100%;
  padding: 10px 16px;
  background: #161616;
  color: #afb0b1;;
	.navbar {
		&-content {
			display: flex;
			justify-content: space-between;
			.left-content {
				justify-self: flex-start;;
			}
			.right-content {
				justify-self: flex-end;
			}
		}
		&-link {
			font-family: 'Titillium Web', sans-serif;
			margin: 0 10px;
			color: #b4b5b5;;
			display: inline-block;
			text-decoration: none;
			&:hover {
				color: #d6c00b;
			}
		}
	}
	.language-button {
    border: none;
    background-color: transparent;
    margin: 5px;
  }
  .language-button:focus {
    outline: none;
  }
  .language-button:hover {
    transform: scale(1.2);
  }

}
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

@media screen and (max-width: 350px) {
  .header-nav {
    .navbar {
			&-link {
				margin: 0 6px;
			}
		}
	}
}

</style>