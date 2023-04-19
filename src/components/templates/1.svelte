<script>
    export const palettes = [{
        primary: '#643131',
        secondary: '#377237',
        tertiary: '#9e9ea8'
    }, {
        primary: '#7e0d7e',
        secondary: '#097979',
        tertiary: '#c2c214'
    }];
    export let paletteIndex;
    $: palette = palettes[paletteIndex];

    export let values;
</script>

<div>
    <h2>Autre template</h2>
    <p>Adresse: {JSON.stringify(values.address)}</p>
    <p>Palette choisie: {JSON.stringify(palette)}</p>
</div>