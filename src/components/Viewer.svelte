<script>
	import TemplateManager from "./TemplateManager.svelte";
	import TemplatePicker from "./TemplatePicker.svelte";
	import TemplateColor from "./TemplateColor.svelte";

	export let values;

	let templateComponent;
	let templateColors;
	let paletteIndex;
</script>

<div class="viewerContainer">
	<TemplateColor bind:paletteIndex {templateColors}/>
	<TemplateManager bind:paletteIndex on:loadComponent={e => templateColors = e.detail} {templateComponent} {values}/>
	<TemplatePicker bind:templateComponent/>
</div>

<style>
	.viewerContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		height: 100%;
		width: 100%;
	}
</style>
