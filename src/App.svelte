<script>
	import Form from "./components/Form.svelte";
	import Viewer from "./components/Viewer.svelte";
	import Header from "./components/Header.svelte";

	const STORAGE_KEY = "values";

	// Get values from localStorage or use default values
	let values = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {
		title: "None",
		firstName: "John",
		lastName: "Doe",
		address: {
			street: "42 rue de la paix",
			city: "Paris",
			zip: "75000"
		},
		job: "Developer",
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

<Header/>
<main class="mainContainer">
	<!--  Read and write  -->
	<Form bind:values/>
	<!--  Read only  -->
	<Viewer values={values}/>
</main>

<style lang="scss">
	.mainContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 1rem;
		gap: 1rem;

		> :global(*) {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
			box-sizing: border-box;
			height: 100%;
			background-color: #4f4f4f;
			border-radius: 5px;

			@media (prefers-color-scheme: light) {
				background-color: #eee;
			}
		}
	}
</style>
