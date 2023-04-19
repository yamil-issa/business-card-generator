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
            }
        }
    }
</script>

<div class="templateContainer">
    <svelte:component bind:this={component} this={templateComponent} paletteIndex={paletteIndex} values={values}/>
</div>

<style>
    .templateContainer :global(img) {
        max-width: 100%;
        object-fit: cover;
    }
</style>