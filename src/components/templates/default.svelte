<script>
    import BaseTemplate from "../BaseTemplate.svelte";

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

    export let values;
</script>

<BaseTemplate {paletteIndex} {palettes}>
    <div slot="front">
        <h2>Template par défaut</h2>
        <p>{values.firstName}</p>
        {#if values.logo.base64}
            <img src={values.logo.base64} alt="Logo"/>
        {/if}
    </div>
    <div slot="back">
        <img alt="Rick Roll" src="https://svelte.dev/tutorial/image.gif">
    </div>
</BaseTemplate>


<style>
    img {
        width: 20rem;
    }

    h2 {
        color: var(--primary);
    }

    p {
        color: var(--secondary);
    }
</style>