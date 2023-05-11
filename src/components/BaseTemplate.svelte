<script>
	export let palettes;
	export let paletteIndex = 0;
	$: palette = palettes[paletteIndex];

	let card;
	$: {
		if (card) {
			// Create CSS variables for each color in the palette and set them on the card
			["primary", "secondary", "tertiary"].forEach((color, i) => {
				card.style.setProperty(`--${color}`, Object.values(palette)[i]);
			});
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
	<div id="back" class="cardContainer__side cardContainer__side--back">
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
		aspect-ratio: 8.5/5.4;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;

		&__side {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			border-radius: 1rem;

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
