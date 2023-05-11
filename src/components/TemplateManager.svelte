<script>
	import {createEventDispatcher} from "svelte";
	import { jsPDF } from "jspdf";
	import domtoimage from 'dom-to-image';

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
	//front side
  const content = document.getElementById('front');
  const imgData = await domtoimage.toPng(content);

  pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth()/2;
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

	//add the first image to the pdf file
  pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth, pdfHeight);

  //back side
	const content2 = document.getElementById('back');
  const imgData2 = await domtoimage.toPng(content2);
  const imgProps2 = pdf.getImageProperties(imgData2);
  const pdfWidth2 = pdf.internal.pageSize.getWidth()/2;
  const pdfHeight2 = (imgProps2.height * pdfWidth2) / imgProps2.width;

	//add the second image to the pdf file
  pdf.addImage(imgData2, 'PNG', 20, pdf.internal.pageSize.getHeight() - pdfHeight2 - 20, pdfWidth2, pdfHeight2);

	//download the pdf file
  pdf.save('card.pdf');
}


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
