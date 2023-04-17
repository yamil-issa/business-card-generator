<script>
    import TemplateManager from "./TemplateManager.svelte";
    import templates from "../utils/templates.js";

    const STORAGE_KEY = "template";

    export let values;

    let findIndex = templates.findIndex(t => t.value === localStorage.getItem(STORAGE_KEY));
    let index = localStorage.getItem(STORAGE_KEY) && findIndex !== -1 ? findIndex : 0;

    let template;
    $: {
        template = templates[index].value;
        localStorage.setItem(STORAGE_KEY, template);
    }
</script>

<div>
    <TemplateManager values={values} template={template}/>
    <button on:click={() => index = (index + 1) % templates.length}>Change template</button>
</div>
