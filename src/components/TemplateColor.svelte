<script>
    export let templateColors;
    export let paletteIndex;
</script>

{#if templateColors}
    {#each templateColors as colors, i}
        <button style="margin-bottom: 1rem" on:click={() => paletteIndex = i}>
            {#each Object.entries(colors).splice(1) as [_, value] }
                <span style="display: inline-block; width: 3rem; height: 1rem; background-color: {value}"></span>
            {/each}
        </button>
    {/each}
    <pre>{JSON.stringify(templateColors)}</pre>
{/if}