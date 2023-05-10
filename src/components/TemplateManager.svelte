<script>
	import {createEventDispatcher} from "svelte";
	import { jsPDF } from "jspdf";
  import html2canvas from "html2canvas";
	import { onMount } from 'svelte';

	let pdf;


	export let values;
	export let templateComponent;
	export let paletteIndex = 0;

	let component;
	const dispatch = createEventDispatcher();
	$: {
		if (component) {
			// Send event loadComponent
			if (!component.palettes) {
				alert('No colors found in component');
			} else {
				dispatch('loadComponent', component.palettes);
				paletteIndex = 0;
			}
		}
	}





	async function pdfExport() {
  		const content = document.getElementById('card_container');
      const canvas = await html2canvas(content);
      const imgData = canvas.toDataURL('image/png');

			pdf = new jsPDF('p', 'mm', 'a4');
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth()/2;
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
			pdf.save('sample.pdf');

    }

		onMount(pdfExport);

	let flipped = false;
</script>

<div>
	<div id="card_container" class="templateContainer" class:flipped>
		<svelte:component bind:this={component} {paletteIndex} this={templateComponent} {values}/>
	</div>
	<button on:click={() => flipped = !flipped}>Flip {flipped ? "🔒" : "🔓"}</button>
</div>
<button on:click={pdfExport}>Exporter en PDF</button>
<style lang="scss">
	.templateContainer {
		width: 26.5rem;
		background: transparent;
		perspective: 1000px;
		margin: 1rem;

		&:hover, &.flipped {
			:global(.cardContainer) {
				transform: rotateY(180deg);
			}
		}
	}

	:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	line-height: 1.5;
	font-weight: 400;

	color-scheme: light dark;
	color: rgba(255, 255, 255, 0.87);
	background-color: #242424;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

a {
	font-weight: 500;
	color: #646cff;
	text-decoration: inherit;
}

a:hover {
	color: #535bf2;
}

body {
	margin: 0;
	display: flex;
	place-items: center;
	min-width: 320px;
	min-height: 100vh;
}

h1 {
	font-size: 3.2em;
	line-height: 1.1;
}

.card {
	padding: 2em;
}

#app {
	width: 100%;
	padding: 2rem;
	text-align: center;
	user-select: none;
}

button {
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #1a1a1a;
	cursor: pointer;
	transition: border-color 0.25s;
}

button:hover {
	border-color: #646cff;
}

button:focus,
button:focus-visible {
	outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
	:root {
		color: #213547;
		background-color: #ffffff;
	}

	a:hover {
		color: #747bff;
	}

	button {
		background-color: #eee;
	}
}

</style>
