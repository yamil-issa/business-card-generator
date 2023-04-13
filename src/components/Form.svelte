<script>
    import {dataInputs} from "../utils/store.js";

    let values;

    dataInputs.subscribe(value => {
        values = value;
    })

    // On any change in values, update the store
    $: {
        dataInputs.update(_ => values)
    }

    function addFile(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
            const signatures = {
                JVBERi0: "application/pdf",
                R0lGODdh: "image/gif",
                R0lGODlh: "image/gif",
                iVBORw0KGgo: "image/png",
                "/9j/": "image/jpg"
            };

            function detectMimeType(b64) {
                for (const s in signatures) {
                    if (b64.indexOf(s) === 0) {
                        return signatures[s];
                    }
                }
            }

            const base64 = btoa(String(reader.result));
            values.logo.path = file.name;
            values.logo.base64 = `data:${detectMimeType(base64)};base64,${base64}`;
        };
        reader.onerror = () => {
            alert("TODO mais problème")
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
        <label for="age">Age</label>
        <input type="number" id="age" bind:value={values.age}/>
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
        <input type="file" id="logo" on:change={addFile}/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>