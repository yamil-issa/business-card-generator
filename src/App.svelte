<script>
    import Form from "./components/Form.svelte";
    import Viewer from "./components/Viewer.svelte";

    const STORAGE_KEY = "values";

    // Get values from localStorage or use default values
    const defaultValues = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {
        firstName: "toto",
        lastName: "tata",
        address: {
            street: "rue de la paix",
            city: "Paris",
            zip: "75000"
        },
        job: "développeur",
        website: "https://www.google.fr",
        contact: {
            email: "email@example.com",
            phone: "0123456789"
        },
        logo: {
            path: null,
            base64: null
        }
    };

    let values = defaultValues;

    // Save values in localStorage
    $: {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    }

</script>

<main class="mainContainer">
    <Form defaultValues={defaultValues} on:change={e => values = e.detail}/>
    <Viewer values={values}/>
</main>

<style>
    .mainContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mainContainer > :global(*) {
        width: 50%;
    }
</style>
