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
        <input type="text" id="firstName" bind:value={values.firstName}/>
    </div>
    <div>
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" bind:value={values.lastName}/>
    </div>
    <div>
        <label for="street">Street</label>
        <input type="text" id="street" bind:value={values.address.street}/>
    </div>
    <div>
        <label for="city">City</label>
        <input type="text" id="city" bind:value={values.address.city}/>
    </div>
    <div>
        <label for="zip">Zip</label>
        <input type="text" id="zip" bind:value={values.address.zip}/>
    </div>
    <div>
        <label for="job">Job</label>
        <input type="text" id="job" bind:value={values.job}/>
    </div>
    <div>
        <label for="website">Website</label>
        <input type="url" id="website" bind:value={values.website}/>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={values.contact.email}/>
    </div>
    <div>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" bind:value={values.contact.phone}/>
    </div>
    <div>
        <label for="logo">Logo</label>
        <input type="file" accept="image/png, image/jpeg, image/jpg" id="logo" on:change={addFile}/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>