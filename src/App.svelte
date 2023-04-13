<script>
    import Form from "./components/Form.svelte";
    import Viewer from "./components/Viewer.svelte";
    import {dataInputs} from "./utils/store.js";

    let values;

    dataInputs.subscribe(value => {
        values = value;
    });

</script>

<main>
    <Form/>
    <Viewer/>
</main>

<style>
</style>
