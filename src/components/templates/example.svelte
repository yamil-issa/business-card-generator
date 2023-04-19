
<!-- THIS FILE IS AN EXAMPLE -->
<!-- IT IS NOT IN templates.js SO IT CAN'T BE SEEN NOR USED -->
<!-- IT IS ONLY HERE TO SHOW YOU HOW TO WRITE A TEMPLATE -->

<script>
    // ALL THE VARIABLES HERE ARE NEEDED BY THE TEMPLATE AND CAN'T BE OMITTED

    // palettes is an array of object. Each object is a palette.
    // You can add as many palettes as you want and name the colors as you like.
    // The colors are in hexadecimal format.
    // Only the first two colors of each palette will be shown in the palette picker.
    export const palettes = [{
        foo: '#23a48c',
        bar: '#a6c926',
        any: '#a3a3d5'
    }, {
        primary: '#4b084b',
        secondary: '#26dada',
        tertiary: '#e1e1aa'
    }];
    // paletteIndex is the index of the palette to use given by the palette picker.
    export let paletteIndex = 0;
    // palette is the selected palette. It is automatically updated when paletteIndex changes.
    $: palette = palettes[paletteIndex];

    // values is an object containing the values of the form.
    export let values;
</script>

<div>
    <h2>Template d'exemple</h2>
    <p>{values.firstName} {values.lastName}</p>
    {#if values.logo.base64}
        <img src={values.logo.base64} alt="Logo"/>
    {/if}
    <p>Palette choisie: {JSON.stringify(palette)}</p>
</div>