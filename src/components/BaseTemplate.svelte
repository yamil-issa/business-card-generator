<script>
	export let palettes;
	export let paletteIndex = 0;

	$: palette = palettes[paletteIndex];

	let card;
	$: {
		if (card) {
			// Create CSS variables for each color in the palette and set them on the card
			for (const [key, value] of Object.entries(palette)) {
				if (key === "shapes") {
					for (let i = 0; i < value.length; i++) {
						card.style.setProperty(`--shape${i + 1}`, value[i]);
					}
				} else {
					card.style.setProperty(`--${key}`, value);
				}

			}
		}
	}
</script>

<div bind:this={card} class="cardContainer" data-palette={paletteIndex}>
	<div id="front" class="cardContainer__side cardContainer__side--front">
		<slot name="front">
			<div class="cardContainer__placeholder">
				<h2>Card Front</h2>
			</div>
		</slot>
	</div>
	<div id="back"  class="cardContainer__side cardContainer__side--back">
		<slot name="back">
			<div class="cardContainer__placeholder">
				<h2>Card Back</h2>
			</div>
		</slot>
	</div>
</div>

<style lang="scss">
	.cardContainer {
		position: relative;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		text-align: center;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;

		width: 600px;
		aspect-ratio: 2;

		:global(span) {
			display: block;
			font-size: 20px;

			:global(strong) {
				font-size: 30px;
				font-weight: normal;
				text-transform: capitalize;
			}
		}

		&__side {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;

			color: var(--text);
			background: var(--background);

			position: absolute;

			backface-visibility: hidden;
			overflow: hidden;

			box-shadow: 0 0 1rem rgba(255, 255, 255, 0.5);

			@media (prefers-color-scheme: light) {
				box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
			}

			&--back {
				transform: rotateY(180deg);
			}

			> :global(*) {
				height: 100%;
			}
		}

		&__placeholder {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #242424;
		}
	}
</style>
