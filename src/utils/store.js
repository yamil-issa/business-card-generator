import {writable} from "svelte/store";

export const dataInputs = writable({
        firstName: "toto",
        lastName: "tata",
        age: 25,
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
    }
);