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

			//new jspdf instance
			pdf = new jsPDF('p', 'mm', 'a4');
			const imgProps = pdf.getImageProperties(imgData);
			const pdfWidth = pdf.internal.pageSize.getWidth()/2;
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

			pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth, pdfHeight);
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
<a id="downloadLink" download="image.png" style="display:none;">Download Image</a>

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


</style>
