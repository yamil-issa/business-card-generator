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

<div class="templatePickerContainer">
	{#each templates as template, i}
		<button
			on:click={() => index = i}
			aria-label={template.description}
		>
			Template {i + 1}
		</button>
	{/each}
</div>


<style lang="scss">
	.templatePickerContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;

		gap: 2rem;
		padding: .5rem;
		box-sizing: border-box;

		border-radius: inherit;
		background-color: #2b2b2b;

		@media (prefers-color-scheme: light) {
			background-color: #dddddd;
		}

		button {
			position: relative;
			flex: 1;
			max-width: 10rem;
			border-radius: 5rem;

			&::after {
				content: attr(aria-label);

				position: absolute;
				width: max-content;
				padding: 0.5rem;
				margin: auto;
				left: 50%;
				transform: translateX(-50%) translateY(1rem);
				text-align: center;
				border-radius: 0.2em;
				top: -2.7rem;

				background-color: #666;

				@media (prefers-color-scheme: light) {
					background-color: #bbb;
				}
			}

			&::before {
				position: absolute;
				content: "";
				height: 0;
				width: 0;
				border-top: 0.5rem solid #666;
				border-left: 0.5rem solid transparent;
				border-right: 0.5rem solid transparent;
				transform: translateY(1rem);
				margin: auto;
				left: 0;
				right: 0;
				bottom: 2.4rem;

				@media (prefers-color-scheme: light) {
					border-top: 0.5rem solid #bbb;
				}
			}

			&::before, &::after {
				visibility: hidden;
				opacity: 0;
				transition: opacity 0.2s ease-in-out,
				visibility 0.2s ease-in-out,
				transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
			}


			&:hover, &:focus, &:focus-within {
				&::after {
					transform: translateX(-50%) translateY(0);
				}

				&::before {
					transform: translateY(0);
				}

				&::before, &::after {
					visibility: visible;
					opacity: 1;
				}
			}
		}
	}
</style>
