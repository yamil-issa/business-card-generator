<script>
    import {dataInputs} from "../utils/store.js";

    let values;

    dataInputs.subscribe(value => {
        values = value;
    })
</script>

{JSON.stringify(values)}

{#if values.logo.base64}
    <img src={values.logo.base64} alt="Logo"/>
{/if}