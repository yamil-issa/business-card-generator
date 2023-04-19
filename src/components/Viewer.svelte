<script>
    import TemplateManager from "./TemplateManager.svelte";
    import TemplatePicker from "./TemplatePicker.svelte";
    import TemplateColor from "./TemplateColor.svelte";

    export let values;

    let templateComponent;
    let templateColors;
    let paletteIndex;
</script>

<div>
    <TemplateColor templateColors={templateColors} bind:paletteIndex/>
    <TemplateManager values={values} templateComponent={templateComponent} paletteIndex={paletteIndex} on:loadComponent={e => templateColors = e.detail}/>
    <TemplatePicker bind:templateComponent={templateComponent}/>
</div>
