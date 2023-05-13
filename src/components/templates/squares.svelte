<script>
	import BaseTemplate from "../BaseTemplate.svelte";
	import QRCodeStyling from "qr-code-styling";
	import {onMount} from "svelte";

	export const palettes = [{
		background: "#393E41",
		text: "#759379",
		shapes: ["#9BC995", "#54655C", "#D5FFCF"]
	}, {
		background: "#FBFBFB",
		text: "#B9A6AC",
		shapes: ["#9B8189", "#D9CFD2", "#D3B1B1"]
	}, {
		background: "#00171F",
		text: "#873138",
		shapes: ["#D72638", "#432A31", "#DA999F"]
	}, {
		background: "#DEE5EF",
		text: "#566B95",
		shapes: ["#094074", "#99A3C0", "#6F9BC4"]
	}, {
		background: "#F0B67F",
		text: "#785F55",
		shapes: ["#483D3F", "#ED7F66", "#BF7E4F"]
	}];

	export let paletteIndex = 0;

	export let values;

	let qrCode;
	let qrCodeContainer;
	onMount(() => {
		qrCode = new QRCodeStyling({
			data: values.website,
			dotsOptions: {
				color: palettes[paletteIndex].shapes[2]
			},
			backgroundOptions: {
				color: palettes[paletteIndex].background
			}
		})

		qrCode.append(qrCodeContainer);
	})

	$: {
		if (qrCode)
			qrCode.update({
				data: values.website,
				dotsOptions: {
					color: palettes[paletteIndex].shapes[2]
				},
				backgroundOptions: {
					color: palettes[paletteIndex].background
				}
			})
	}
</script>

<BaseTemplate {paletteIndex} {palettes}>
	<div class="cardFront" slot="front">
		<div bind:this={qrCodeContainer} class="cardFront__qrcode"></div>
		<div>
			{#if values.title}
				<span><strong>{values.title} {values.firstName} {values.lastName}</strong></span>
			{:else}
				<span><strong>{values.firstName} {values.lastName}</strong></span>
			{/if}
			<span>{values.job}</span>
		</div>
		<div class="card__shape cardFront__shape--1"></div>
		<div class="card__shape cardFront__shape--2"></div>
		<div class="card__shape cardFront__shape--3"></div>
		<div class="card__shape cardFront__shape--4"></div>
		<div class="card__shape cardFront__shape--5"></div>
		<div class="card__shape cardFront__shape--6"></div>
		<div class="card__shape cardFront__shape--7"></div>
	</div>
	<div class="cardBack" slot="back">
		<div class="cardBack__content">
			<div>
				<span>{values.contact.email}</span>
				<span>{values.contact.phone}</span>
				<br/>
				<span>{values.address.street}</span>
				<span>{values.address.city}</span>
				<span>{values.address.zip}</span>
			</div>
		</div>
		<div class="cardBack__logo">
			{#if values.logo.base64}
				<img src={values.logo.base64} alt="Your logo"/>
			{/if}
		</div>
		<div class="card__shape cardBack__shape--1"></div>
		<div class="card__shape cardBack__shape--2"></div>
		<div class="card__shape cardBack__shape--3"></div>
		<div class="card__shape cardBack__shape--4"></div>
		<div class="card__shape cardBack__shape--5"></div>
		<div class="card__shape cardBack__shape--6"></div>
	</div>
</BaseTemplate>

<style lang="scss">
	.card {
		&Front {
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;

			&__qrcode {
				display: flex;
				align-items: center;
				width: 25%;
				aspect-ratio: 1;
				z-index: 2;

				:global(canvas) {
					width: 100%;
					box-sizing: border-box;
				}
			}

			&__shape {
				&--1 {
					$size: 100px;

					width: $size;
					height: $size;

					top: 0;
					left: 0;

					background: var(--shape1)
				}

				&--2 {
					width: 100px;
					height: 40px;

					bottom: 0;
					left: 100px;

					background: var(--shape1)
				}

				&--3 {
					width: 80px;
					height: 65px;

					bottom: 0;
					right: 70px;

					background: var(--shape1)
				}

				&--4 {
					width: 155px;
					height: 20px;

					top: 50%;
					left: 0;

					background: var(--shape1)
				}

				&--5 {
					width: 40px;
					height: 130px;

					top: 0;
					right: 70px;

					background: var(--shape1)
				}

				&--6 {
					width: 45px;
					height: 45px;

					bottom: 45px;
					right: 45px;

					background: var(--shape2);
					opacity: .8;
				}

				&--7 {
					width: 45px;
					height: 45px;

					bottom: 20px;
					left: 75px;

					background: var(--shape2);
					opacity: .8;
				}
			}
		}

		&Back {
			display: flex;

			padding: 2rem;
			box-sizing: border-box;

			&__content {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				height: 100%;
				width: 70%;
				padding-left: 1.5rem;
				box-sizing: border-box;

				> div {
					text-align: start;
				}
			}

			&__logo {
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				width: 30%;
				height: 100%;
				z-index: 2;

				img {
					width: 80%;
					aspect-ratio: 1;
					object-fit: cover;
				}
			}

			&__shape {
				&--1 {
					width: 100px;
					height: 100px;

					bottom: 0;
					left: 0;

					background: var(--shape1)
				}

				&--2 {
					width: 70px;
					height: 70px;

					bottom: 70px;
					left: 60px;

					background: var(--shape2);
					opacity: .8;
				}

				&--3 {
					width: 140px;
					height: 55px;

					top: 0;
					left: 10px;

					background: var(--shape1);
				}

				&--4 {
					width: 100px;
					height: 40px;

					bottom: 0;
					right: 100px;

					background: var(--shape1);
				}

				&--5 {
					width: 45px;
					height: 45px;

					bottom: 20px;
					right: 180px;

					background: var(--shape2);
					opacity: .8;
				}

				&--6 {
					width: 65px;
					height: 200px;

					top: 0px;
					right: 30px;

					background: var(--shape1);
				}
			}
		}

		&__shape {
			position: absolute;
		}
	}
</style>
