<script>
	import {createEventDispatcher} from "svelte";

	export let values;
	export let templateComponent;
	export let paletteIndex = 0;

	let component;
	const dispatch = createEventDispatcher();
	$: {
		if (component) {
			// Send event loadComponent
			if (!component.palettes) {
				alert('No colors found in component');
			} else {
				dispatch('loadComponent', component.palettes);
				paletteIndex = 0;
			}
		}
	}

	let flipped = false;
</script>

<div class="templateManager">
	<div class="templateContainer" class:flipped>
		<svelte:component bind:this={component} {paletteIndex} this={templateComponent} {values}/>
	</div>
	<button on:click={() => flipped = !flipped}>* click to {flipped ? "unflip" : "flip"}! *</button>
</div>

<style lang="scss">
	.templateManager {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.templateContainer {
		width: 26.5rem;
		background: transparent;
		perspective: 1000px;
		margin: 1rem;

		&:hover, &.flipped {
			:global(.cardContainer) {
				transform: rotateY(180deg);
			}
		}
	}
</style>
