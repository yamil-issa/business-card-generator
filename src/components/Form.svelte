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

<form class="formContainer" on:submit|preventDefault>
	<h2 class="formContainer__title">Form</h2>
	<div class="formContainer__section">
		<span>Title</span>
		<div role="radiogroup">
			<label>
				Mr.
				<input bind:group={values.title} type="radio" value={"Mr."}/>
			</label>
			<label>
				Ms.
				<input bind:group={values.title} type="radio" value={"Ms."}/>
			</label>
			<label>
				None
				<input bind:group={values.title} type="radio" value={null}/>
			</label>
		</div>

		<label for="firstName">First name</label>
		<input bind:value={values.firstName} id="firstName" type="text"/>

		<label for="lastName">Last name</label>
		<input bind:value={values.lastName} id="lastName" type="text"/>

		<label for="email">Email</label>
		<input bind:value={values.contact.email} id="email" type="email"/>

		<label for="phone">Phone</label>
		<input bind:value={values.contact.phone} id="phone" type="tel"/>
	</div>

	<div class="formContainer__section">
		<label for="job">Job</label>
		<input bind:value={values.job} id="job" type="text"/>

		<label for="street">Address</label>
		<input bind:value={values.address.street} id="street" type="text"/>

		<label for="city">City</label>
		<input bind:value={values.address.city} id="city" type="text"/>

		<label for="zip">Zip</label>
		<input bind:value={values.address.zip} id="zip" type="text"/>

		<label for="website">Website</label>
		<input bind:value={values.website} id="website" type="url"/>
	</div>

	<div class="formContainer__section">
		<label for="logo">Logo</label>
		<input accept="image/png, image/jpeg, image/jpg" id="logo" on:change={addFile} type="file"/>
	</div>
</form>

<style lang="scss">
	.formContainer {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 400px;
		padding: 1rem;
		box-sizing: border-box;
		text-align: start;

		&__title {
			margin: 0;
			text-align: center;
		}

		&__section {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			gap: 1rem;
			padding: 1rem;
			background-color: #2b2b2b;
			border-radius: inherit;

			@media (prefers-color-scheme: light) {
				background-color: #fff;
			}

			> label, span {
				min-width: 5rem;
			}
		}
	}
</style>
