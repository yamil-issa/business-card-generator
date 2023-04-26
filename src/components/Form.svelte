<script>
    export let values;

    function addFile(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        // Max = 2Mb
        const MAX_SIZE = 2097152;
        if (file.size > MAX_SIZE) {
            alert("The file is too big! Max size is 2Mb");
            return;
        }

        // File is png or jpg/jpeg
        const MIME_TYPES = ["image/png", "image/jpg", "image/jpeg"];
        if (!MIME_TYPES.includes(file.type)) {
            alert("This file type is not supported!");
            return;
        }

        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            const base64 = btoa(String(reader.result));
            values.logo.path = file.name;
            values.logo.base64 = `data:${file.type.split("/")[1]};base64,${base64}`;
        };
        reader.onerror = () => {
            alert("An error occurred while reading the file!");
        };
    }
</script>

<form on:submit|preventDefault>
    <div>
        <label for="firstName">First name</label>
        <input bind:value={values.firstName} id="firstName" type="text"/>
    </div>
    <div>
        <label for="lastName">Last name</label>
        <input bind:value={values.lastName} id="lastName" type="text"/>
    </div>
    <div>
        <label for="street">Street</label>
        <input bind:value={values.address.street} id="street" type="text"/>
    </div>
    <div>
        <label for="city">City</label>
        <input bind:value={values.address.city} id="city" type="text"/>
    </div>
    <div>
        <label for="zip">Zip</label>
        <input bind:value={values.address.zip} id="zip" type="text"/>
    </div>
    <div>
        <label for="job">Job</label>
        <input bind:value={values.job} id="job" type="text"/>
    </div>
    <div>
        <label for="website">Website</label>
        <input bind:value={values.website} id="website" type="url"/>
    </div>
    <div>
        <label for="email">Email</label>
        <input bind:value={values.contact.email} id="email" type="email"/>
    </div>
    <div>
        <label for="phone">Phone</label>
        <input bind:value={values.contact.phone} id="phone" type="tel"/>
    </div>
    <div>
        <label for="logo">Logo</label>
        <input accept="image/png, image/jpeg, image/jpg" id="logo" on:change={addFile} type="file"/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>