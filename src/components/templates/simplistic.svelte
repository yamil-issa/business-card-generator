<script>
	// ALL THE VARIABLES AND IMPORTS HERE ARE NEEDED BY THE TEMPLATE AND CAN'T BE OMITTED
	import BaseTemplate from "../BaseTemplate.svelte";

	export const palettes = [{
		background: "#393E41",
		text: "#759379",
		shapes: ["#9BC995"]
	}, {
		background: "white",
		text: "#B9A6AC",
		shapes: ["#9B8189"]
	}, {
		background: "#00171F",
		text: "#873138",
		shapes: ["#D72638"]
	}, {
		background: "#DEE5EF",
		text: "#566B95",
		shapes: ["#094074"]
	}, {
		background: "#F0B67F",
		text: "#785F55",
		shapes: ["#483D3F"]
	}];

	export let paletteIndex = 0;

	export let values;
</script>

<BaseTemplate {paletteIndex} {palettes}>
	<div class="cardFront" slot="front">
		{#if values.logo.base64}
			<img src="{values.logo.base64}" alt="Your logo" class="cardFront__logo"/>
		{/if}
		<span>{values.website}</span>
	</div>
	<div class="cardBack" slot="back">
		<div class="cardBack__name">
			{#if values.title}
				<span><strong>{values.title} {values.firstName}</strong></span>
			{:else}
				<span><strong>{values.firstName}</strong></span>
			{/if}
			<span><strong>{values.lastName}</strong></span>
			<br/>
			<span>{values.job}</span>
		</div>
		<div class="cardBack__spacer"></div>
		<div class="cardBack__contact">
			<span>{values.contact.email}</span>
			<span>{values.contact.phone}</span>
			<br/>
			<span>{values.address.street}</span>
			<span>{values.address.city}</span>
			<span>{values.address.zip}</span>
		</div>
	</div>
</BaseTemplate>

<style lang="scss">
	.card {
		&Front {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			font-size: 20px;

			&__logo {
				width: 100%;
				max-width: 50%;
				margin-bottom: 1rem;
				border: 3px solid var(--shape1);
				border-radius: 1rem;
			}
		}

		&Back {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			text-align: start;
			padding: 1rem;

			span {
				display: block;
				font-size: 20px;

				strong {
					font-size: 30px;
					font-weight: normal;
				}
			}

			&__name {
				flex: .4;
				text-transform: capitalize;
				text-align: center;
			}

			&__spacer {
				width: 1rem;
				background: var(--shape1);
				height: 80%;
				margin-right: 1rem;
				margin-left: 1rem;
			}

			&__contact {
				flex: .5;
			}
		}
	}
</style>
