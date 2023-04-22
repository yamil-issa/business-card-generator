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
</script>

<div class="templateContainer">
    <svelte:component bind:this={component} this={templateComponent} {paletteIndex} {values}/>
</div>

<style>
    .templateContainer {
        width: 26.5rem;
        background: transparent;
        perspective: 1000px;
    }

    .templateContainer:hover :global(.cardContainer) {
        transform: rotateY(180deg);
    }

    .templateContainer :global(img) {
        max-width: 50%;
        object-fit: cover;
    }

    :global(.cardContainer) {
        position: relative;
        aspect-ratio: 8.5/5.4;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    :global(.cardSide) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        overflow: hidden;

        position: absolute;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    :global(.cardSide--back) {
        transform: rotateY(180deg);
    }
</style>