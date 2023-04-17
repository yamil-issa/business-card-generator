<script>
    export let values;
</script>

<div>
    <h2>Template par défaut</h2>
    <p>{values.firstName}</p>
    {#if values.logo.base64}
        <img src={values.logo.base64} alt="Logo"/>
    {/if}
</div>