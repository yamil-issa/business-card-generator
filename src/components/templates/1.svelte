<script>
    import BaseTemplate from "../BaseTemplate.svelte";

    export const palettes = [{
        primary: '#643131',
        secondary: '#377237'
    }, {
        primary: '#7e0d7e',
        secondary: '#097979'
    }];
    export let paletteIndex;

    export let values;
</script>

<BaseTemplate {palettes} {paletteIndex}>
    <div slot="front">
        <h2>Autre template</h2>
        <p>Adresse: {JSON.stringify(values.address)}</p>
    </div>
</BaseTemplate>
