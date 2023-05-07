<script>
	import templates from "../utils/templates.js";

	const STORAGE_KEY = "template";

	// Get the index of the template from local storage, or default to 0
	let index = Math.max(templates.findIndex(t => t.fileName === localStorage.getItem(STORAGE_KEY)), 0);

	export let templateComponent;
	$: {
		const fileName = templates[index].fileName;

		const promise = import(`./templates/${fileName}.svelte`);
		promise.then(module => {
			templateComponent = module.default;
		}).catch(e => {
			// Shouldn't happen, but just in case
			console.error("Problème à l'import du template, vérifier que tout est conforme dans templates.js", e);
		});

		localStorage.setItem(STORAGE_KEY, fileName);
	}
</script>

<div>
	<select bind:value={index}>
		{#each templates as template, i}
			<option value={i}>{template.description}</option>
		{/each}
	</select>
</div>
