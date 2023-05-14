<script>
	import TemplateManager from "./TemplateManager.svelte";
	import TemplatePicker from "./TemplatePicker.svelte";
	import TemplateColor from "./TemplateColor.svelte";

	export let values;

	let templateComponent;
	let templateColors;
	let paletteIndex;

	$: {

	}
</script>

<div class="viewerContainer">
	<h2 class="viewerContainer__title">Card Preview</h2>
	<TemplateColor bind:paletteIndex {templateColors}/>
	<TemplateManager bind:paletteIndex on:loadComponent={e => templateColors = e.detail} {templateComponent} {values}/>
	<TemplatePicker bind:templateComponent/>
</div>

<style lang="scss">
	.viewerContainer {
		flex: 2;
		align-items: center;
		justify-content: center;

		min-width: 680px;

		&__title {
			margin: 0;
			text-align: center;
		}
	}
</style>
