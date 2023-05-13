<script>
	import BaseTemplate from "../BaseTemplate.svelte";
	import QRCodeStyling from "qr-code-styling";
	import {onMount} from "svelte";

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

	let qrCode;
	let qrCodeContainer;
	onMount(() => {

		qrCode = new QRCodeStyling({
			data: values.website,
			dotsOptions: {
				color: palettes[paletteIndex].background,
				type: "rounded"
			},
			backgroundOptions: {
				color: palettes[paletteIndex].shapes[0]
			},
			cornersDotOptions: {
				type: "dot",
			},
			cornersSquareOptions: {
				type: "dot",
			}
		})

		qrCode.append(qrCodeContainer);
	})

	$: {
		if (qrCode)
			qrCode.update({
				data: values.website,
				dotsOptions: {
					color: palettes[paletteIndex].background,
				},
				backgroundOptions: {
					color: palettes[paletteIndex].shapes[0]
				},
			})
	}
</script>

<BaseTemplate {paletteIndex} {palettes}>
	<div class="cardFront" slot="front">
		<div bind:this={qrCodeContainer} class="cardFront__qrcode"></div>
		<div class="cardFront__content">
			{#if values.title}
				<span><strong>{values.title} {values.firstName}</strong></span>
			{:else}
				<span><strong>{values.firstName}</strong></span>
			{/if}
			<span><strong>{values.lastName}</strong></span>
			<br/>
			<span>{values.job}</span>

			<div class="card__bubble cardFront__bubble--2"></div>
			<div class="card__bubble cardFront__bubble--1"></div>
			<div class="card__bubble cardFront__bubble--3"></div>
			<div class="card__bubble cardFront__bubble--5"></div>
			<div class="card__bubble cardFront__bubble--4"></div>
		</div>
	</div>
	<div class="cardBack" slot="back">
		<div class="cardBack__content">
			<div class="cardBack__contentLeft">
				<span>{values.contact.email}</span>
				<span>{values.contact.phone}</span>
			</div>
			<div class="cardBack__contentRight">
				<span>{values.address.street}</span>
				<span>{values.address.city}</span>
				<span>{values.address.zip}</span>
			</div>

			<div class="card__bubble cardBack__bubble--2"></div>
			<div class="card__bubble cardBack__bubble--1"></div>
			<div class="card__bubble cardBack__bubble--3"></div>
			<div class="card__bubble cardBack__bubble--5"></div>
			<div class="card__bubble cardBack__bubble--4"></div>
		</div>
		<div class="cardBack__logo">
			{#if values.logo.base64}
				<img src={values.logo.base64} alt="Your logo"/>
			{/if}
		</div>
	</div>
</BaseTemplate>

<style lang="scss">
	.card {
		&Front {
			display: flex;
			align-items: center;

			&__qrcode {
				display: flex;
				align-items: center;
				width: 40%;
				height: 100%;
				background: var(--shape1);
				z-index: 2;

				:global(canvas) {
					width: 100%;
					padding: 2rem;
					box-sizing: border-box;
				}
			}

			&__content {
				position: relative;

				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				flex: 1;
				height: 100%;
				background: var(--background);
			}

			&__bubble {
				&--1 {
					$width: 90px;

					top: 10%;
					left: -#{$width / 2};
					width: $width;
					background: var(--shape1);
					opacity: .8;
				}

				&--2 {
					$width: 120px;

					top: -#{$width / 2};
					left: -#{$width / 2};
					width: $width;
					background: var(--shape2);
				}

				&--3 {
					$width: 75px;

					top: -#{$width / 5};
					right: -#{$width / 3};
					width: $width;
					background: var(--shape2);
				}

				&--4 {
					$width: 75px;

					bottom: -#{$width / 5};
					right: -#{$width / 5};
					width: $width;
					background: var(--shape1);
					opacity: .8;
				}

				&--5 {
					$width: 80px;

					bottom: -#{$width / 2};
					right: #{$width / 5};
					width: $width;
					background: var(--shape2);
				}
			}
		}

		&Back {
			display: flex;
			justify-content: center;
			align-items: center;

			&__logo {
				display: flex;
				align-items: center;
				width: 40%;
				height: 100%;
				background: var(--shape1);
				z-index: 2;

				img {
					width: 100%;
					padding: 2rem;
					box-sizing: border-box;
				}
			}

			&__content {
				position: relative;
				box-sizing: border-box;

				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 1rem;
				align-items: center;
				padding: 3rem 1.5rem 1.5rem;

				flex: 1;
				height: 100%;
				background: var(--background);

				&Left, &Right {
					display: flex;
					flex-direction: column;
					justify-content: center;

					width: 100%;
				}

				&Left {
					align-items: flex-start;
				}

				&Right {
					align-items: flex-end;
				}
			}

			&__bubble {
				&--1 {
					$width: 90px;

					top: 10%;
					right: -#{$width / 2};
					width: $width;
					background: var(--shape1);
					opacity: .8;
				}

				&--2 {
					$width: 120px;

					top: -#{$width / 2};
					right: -#{$width / 2};
					width: $width;
					background: var(--shape2);
				}

				&--3 {
					$width: 75px;

					top: -#{$width / 5};
					left: -#{$width / 3};
					width: $width;
					background: var(--shape2);
				}

				&--4 {
					$width: 75px;

					bottom: -#{$width / 5};
					left: -#{$width / 5};
					width: $width;
					background: var(--shape1);
					opacity: .8;
				}

				&--5 {
					$width: 80px;

					bottom: -#{$width / 2};
					left: #{$width / 5};
					width: $width;
					background: var(--shape2);
				}
			}
		}

		&__bubble {
			position: absolute;
			aspect-ratio: 1;
			border-radius: 50%;
		}
	}
</style>
