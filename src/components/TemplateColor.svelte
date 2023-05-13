<script>
	export let templateColors;

	export let paletteIndex;
</script>

{#if templateColors}
	<div class="colorPickerContainer">
		{#each templateColors as colors, i}
			<button on:click={() => paletteIndex = i}>
				<span class="bubble">
					<span style:background-color={colors.background}></span>
					<span style:background-color={colors.shapes[0]}></span>
				</span>
			</button>
		{/each}
	</div>
{/if}

<style lang="scss">
	.colorPickerContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		width: 100%;
		gap: 5rem;
		padding: .5rem;
		box-sizing: border-box;

		border-radius: inherit;
		background-color: #2b2b2b;

		@media (prefers-color-scheme: light) {
			background-color: #dddddd;
		}

		button {
			display: inline-block;
			padding: 0;
			border-radius: 50%;
			overflow: hidden;
		}

		.bubble {
			display: flex;
			aspect-ratio: 1;
			transform: rotate(-45deg);
			height: 3rem;

			& > span {
				flex: 1;
			}
		}
	}
</style>
