<script>
    import Form from "./components/Form.svelte";
    import Viewer from "./components/Viewer.svelte";

    const STORAGE_KEY = "values";

    // Get values from localStorage or use default values
    let values = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {
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

    // Save values in localStorage on change
    $: {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    }
</script>

<main class="mainContainer">
    <!--  Read and write  -->
    <Form bind:values/>
    <!--  Read only  -->
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
