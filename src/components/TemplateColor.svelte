<script>
    export let templateColors;
    export let paletteIndex;
</script>

<div class="colorPickerContainer">
    {#if templateColors}
        {#each templateColors as colors, i}
            <button on:click={() => paletteIndex = i}>
            <span class="bubble">
                {#each Object.entries(colors).splice(0, 2) as [_, value] }
                    <span class="color" style="background-color: {value}"></span>
                {/each}
            </span>
            </button>
        {/each}
    {/if}
</div>

<style>
    .colorPickerContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        gap: 1rem;
    }

    .bubble {
        border-radius: 50%;
        background-color: #fff;
        aspect-ratio: 1;
        overflow: hidden;
        transform: rotate(-45deg);
    }

    .color {
        aspect-ratio: 1/2;
    }

    .bubble, .color {
        display: inline-block;
        height: 2rem;
    }
</style>