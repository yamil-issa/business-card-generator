<script>
    const DEFAULT_TEMPLATE = 'default';

    export let values;
    export let template;

    let Comp;

    $: {
        const promise = import(`./templates/${template}.svelte`);
        promise.then(module => {
            Comp = module.default;
        }).catch(() => {
            const promise2 = import(`./templates/${DEFAULT_TEMPLATE}.svelte`);
            promise2.then(module => {
                Comp = module.default;
            });
        });
    }
</script>

<div class="templateContainer">
    <svelte:component this={Comp} values={values}/>
</div>

<style>
    .templateContainer :global(img) {
        max-width: 100%;
        object-fit: cover;
    }
</style>