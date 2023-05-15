<script>
	import github from '../assets/github.svg';
	import logo from '../assets/logo-long.svg';
</script>

<header class="headerContainer">
	<img alt="Noobz Society" class="headerContainer__logo" src={logo}>
	<h1 class="headerContainer__title">Business Card Generator</h1>
	<a href="https://github.com/yamil-issa/business-card-generator" target="_blank">
		<img alt="Go to our github" class="headerContainer__github" src={github}/>
	</a>
</header>

<style lang="scss">
	.headerContainer {
		display: flex;
		justify-content: space-between;
		background: #1a1a1a;
		height: 75px;
		padding: 20px;

		@media (prefers-color-scheme: light) {
			background: #eee;
			color: #1a1a1a;
		}

		&__logo {
			height: 100%;
		}

		&__title {
			margin: 0;
			align-self: center;
		}

		&__github {
			height: 100%;
		}
	}
</style>
