<!-- THIS FILE IS AN EXAMPLE -->
<!-- IT IS COMMENTED IN templates.js SO IT CAN'T BE SEEN NOR USED -->
<!-- IT IS ONLY HERE TO SHOW YOU HOW TO WRITE A TEMPLATE -->

<script>
	import Exemple from "../../assets/example.svg";

	// ALL THE VARIABLES AND IMPORTS HERE ARE NEEDED BY THE TEMPLATE AND CAN'T BE OMITTED
	import BaseTemplate from "../BaseTemplate.svelte";

	/**
	 * palettes is an array of colors. Each object is a palette.
	 * You can add as many palettes as you want.
	 * Any color format recognized by CSS is accepted.
	 * @type {{background: string, text: string, shapes: string[]}[]}
	 */
	export const palettes = [{
		background: "#64b5e5",
		text: "white",
		shapes: ["#303e48"]
	}, {
		background: "#4b084b",
		text: "white",
		shapes: ["#51E5FF"]
	}];

	// paletteIndex is the index of the palette to use given by the palette picker.
	export let paletteIndex = 0;

	// values is an object containing the values of the form.
	export let values;
</script>

<!-- HERE IS THE BASIC TEMPLATE REQUIRED -->
<!-- There is a placeholder if you let BaseTemplate empty -->
<!--<BaseTemplate {palettes} {paletteIndex}>
    <div slot="front">
    </div>
    <div slot="back">
    </div>
</BaseTemplate>-->

<BaseTemplate {paletteIndex} {palettes}>
	<div class="cardFront" slot="front">
		<div class="topPart">
			<div class="topPart__container">
				<div class="topPart__text">
					<h2>île<span>de</span>France</h2>
					<span>mobilités</span>
				</div>
				<div class="topPart__icon"><img alt="logo idf mobilités" src={Exemple}></div>
			</div>
		</div>
		<p class="indication">Hover to flip</p>
	</div>
	<div class="cardBack" slot="back">
		<div class="topPart">
			<div class="topPart__container"></div>
		</div>
		<div class="bottomPart">
			<span style="text-transform: capitalize">{values.firstName}</span>
			<span style="text-transform: uppercase">{values.lastName}</span>
			<span>{values.contact.phone}</span>
			<img alt="logo" src="{values.logo.base64}"/>
		</div>
	</div>
</BaseTemplate>

<!-- You can use SCSS by adding lang="scss" -->
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

	// This will allow you to have a different style for each palette.
	// Here, the second palette will have a different color (for better text contrast).
	:global(.cardContainer[data-palette="1"]) .indication {
		text-decoration: underline;
	}

	.cardFront, .cardBack {
		background-color: var(--background);
		color:var(--text);
		font-family: Raleway, sans-serif;
	}

	.indication {
		font-size: 4rem;
		margin: 1.75rem 0 0;
	}

	.topPart {
		display: flex;
		width: 100%;
		background: var(--shape1);
		color: var(--background);
		padding-bottom: .2rem;

		h2 {
			font-size: 2.5rem;
			font-weight: 700;
			margin: 0;
			line-height: 20px;

			span {
				font-weight: 400;
				color: inherit;
				font-size: inherit;
			}
		}

		span {
			font-size: 1.8rem;
			color: var(--text);
		}

		&__container {
			display: flex;
			column-gap: .2rem;
			padding-top: 1rem;
			padding-bottom: .5rem;
			margin: 0 auto;
			height: 5rem;
			box-sizing: border-box;
		}

		&__text {
			text-align: end;
		}

		&__icon {
			background: var(--background);
			border-radius: .75rem;
			height: 3.25rem;
			padding: .2rem;
			box-sizing: border-box;

			img {
				transform: rotate(90deg);
				max-width: 100%;
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}

	.bottomPart {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		margin-left: 1rem;

		writing-mode: vertical-rl;
		transform: rotate(180deg);
		color: var(--text);
		text-align: end;
		line-height: 1rem;

		span {
			font-weight: bold;
		}

		img {
			object-fit: contain;
			width: 15rem;
			transform: rotate(180deg);
			padding-left: 1rem;
		}
	}
</style>
