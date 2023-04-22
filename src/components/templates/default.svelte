<script>
    export const palettes = [{
        balec: '#23a48c',
        osef: '#a6c926',
        jsp: '#a3a3d5'
    }, {
        primary: '#4b084b',
        secondary: '#26dada',
        tertiary: '#e1e1aa'
    }];
    export let paletteIndex;
    $: palette = palettes[paletteIndex];

    export let values;
</script>

<div>
    <h2>Template par défaut</h2>
    <p>{values.firstName}</p>
    {#if values.logo.base64}
        <img src={values.logo.base64} alt="Logo"/>
    {/if}
    <p>Palette choisie: {JSON.stringify(palette)}</p>
</div>

<style>
    img {
        width: 20rem;
    }
</style>