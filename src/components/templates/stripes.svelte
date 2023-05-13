<script>
	import BaseTemplate from "../BaseTemplate.svelte";

	export const palettes = [{
		background: "#393E41",
		text: "#759379",
		shapes: ["#9BC995", "#54655C"]
	}, {
		background: "#FBFBFB",
		text: "#B9A6AC",
		shapes: ["#9B8189", "#D9CFD2"]
	}, {
		background: "#00171F",
		text: "#873138",
		shapes: ["#D72638", "#432A31"]
	}, {
		background: "#DEE5EF",
		text: "#566B95",
		shapes: ["#094074", "#99A3C0"]
	}, {
		background: "#F0B67F",
		text: "#785F55",
		shapes: ["#483D3F", "#ED7F66"]
	}];

	export let paletteIndex = 0;

	export let values;
</script>

<BaseTemplate {paletteIndex} {palettes}>
	<div class="cardFront" slot="front">
		<div class="cardFront__logo">
			<div class="cardFront__logoImage">
				{#if values.logo.base64}
					<img src={values.logo.base64} alt="Your logo"/>
				{/if}
			</div>
			<div class="card__rect cardFront__rect--1"></div>
			<div class="card__rect cardFront__rect--2"></div>
			<div class="card__rect cardFront__rect--3"></div>
		</div>
		<div class="cardFront__content">
			{#if values.title}
				<span><strong>{values.title} {values.firstName}</strong></span>
			{:else}
				<span><strong>{values.firstName}</strong></span>
			{/if}
			<span><strong>{values.lastName}</strong></span>
			<br/>
			<span>{values.job}</span>
			<hr/>
			<span>{values.contact.phone}</span>
		</div>
	</div>
	<div class="cardBack" slot="back">
		<div class="cardBack__content">
			<span>{values.contact.email}</span>
			<br>
			<span>{values.address.street}</span>
			<span>{values.address.city}</span>
			<span>{values.address.zip}</span>
			<span class="cardBack__content--website">{values.website}</span>
		</div>
		<div class="cardBack__logo">
			<div class="cardBack__logoImage">
				{#if values.logo.base64}
					<img src={values.logo.base64} alt="Your logo"/>
				{/if}
			</div>
		</div>
		<div class="card__rect cardBack__rect--1"></div>
		<div class="card__rect cardBack__rect--2"></div>
		<div class="card__rect cardBack__rect--3"></div>
		<div class="card__rect cardBack__rect--4"></div>
		<div class="card__rect cardBack__rect--5"></div>
	</div>
</BaseTemplate>

<style lang="scss">
	.card {
		&Front {
			display: flex;
			align-items: center;

			&__logo {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 50%;
				height: 100%;
				box-sizing: border-box;
				padding: 1rem;

				&Image {
					width: 70%;
					aspect-ratio: 1;
					border-radius: 50%;
					overflow: hidden;
					margin: 0 auto;
					background: var(--shape1);
					z-index: 2;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}

			&__content {
				width: 50%;
				padding: 1rem;
				box-sizing: border-box;

				hr {
					width: 35%;
					height: .3rem;
					margin: 1rem auto;
					border: none;
					background: var(--shape1);
				}
			}

			&__rect {
				&--1 {
					$size: 45px;

					top: -50%;
					left: #{$size + 30px};
					transform: rotateZ(32deg);
					width: $size;
					height: 200%;
					background: var(--shape2);
				}

				&--2 {
					$size: 15px;

					top: -50%;
					left: #{$size * 2 + 115px};
					transform: rotateZ(32deg);
					width: $size;
					height: 200%;
					background: var(--shape1);
				}

				&--3 {
					$size: 30px;

					top: -25%;
					left: #{$size * 4 + 110px};
					transform: rotateZ(32deg);
					width: $size;
					height: 100%;
					background: var(--shape2);
				}
			}
		}

		&Back {
			display: flex;

			&__content {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				width: 40%;
				height: 80%;
				padding: 1rem;
				box-sizing: border-box;
				text-align: start;
				margin-left: 2rem;

				&--website {
					position: absolute;
					color: var(--shape1);
					bottom: 1rem;
					left: 25%;
				}
			}

			&__logo {
				width: 60%;
				box-sizing: border-box;
				padding: 1rem;

				&Image {
					height: 100%;
					aspect-ratio: 1;
					border-radius: 50%;
					overflow: hidden;
					margin: 0 auto;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}

			&__rect {
				&--1 {
					$size: 45px;

					bottom: #{$size - 140px};
					left: #{$size - 35px};
					transform: rotateZ(-40deg);
					width: $size;
					height: 75%;
					background: var(--shape2);
				}

				&--2 {
					$size: 15px;

					bottom: #{$size * 4 - 120px};
					left: #{$size * 4 - 15px};
					transform: rotateZ(-40deg);
					width: $size;
					height: 75%;
					background: var(--shape1);
				}

				&--3 {
					$size: 45px;

					top: #{$size * 2 - 150px};
					right: #{$size * 2 - 45px};
					transform: rotateZ(-40deg);
					width: $size;
					height: 100%;
					background: var(--shape2);
				}

				&--4 {
					$size: 15px;

					top: #{$size * 4 - 120px};
					right: #{$size * 4 - 15px};
					transform: rotateZ(-40deg);
					width: $size;
					height: 75%;
					background: var(--shape1);
				}

				&--5 {
					$size: 30px;

					top: #{$size - 140px};
					right: #{$size - 35px};
					transform: rotateZ(-40deg);
					width: $size;
					height: 100%;
					background: var(--shape2);
				}
			}
		}

		&__rect {
			position: absolute;
		}
	}
</style>
