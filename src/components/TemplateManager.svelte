<script>
	import {createEventDispatcher} from "svelte";
	import domtoimage from 'dom-to-image';
	import {jsPDF} from "jspdf";
	import loading from '../assets/loading.svg';

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
				// paletteIndex = 0; // Vu que les templates ont fondamentalement les mêmes palettes
			}
		}
	}

	let isDownloading = false;
	async function pdfExport() {
		isDownloading = true;
		const doc = new jsPDF("p", "px", "a4");
		const width = Math.floor(doc.internal.pageSize.getWidth());
		const height = doc.internal.pageSize.getHeight();

		const margin = 20;
		const widthSpacing = 5;
		const aspectRatio = 1 / 2;

		// Get the images
		async function getImage(side) {
			let face = await domtoimage.toPng(document.getElementById(side), null);

			//create an image object from the path
			const originalImage = new Image();
			originalImage.src = face;

			//initialize the canvas object
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			//wait for the image to finish loading
			await new Promise((resolve, reject) => {
				originalImage.onload = resolve;
				originalImage.onerror = reject;
			});

			//set the canvas size to the new width and height
			canvas.width = 600;
			canvas.height = 300;

			//draw the image
			if (side === 'back') {
				ctx.translate(canvas.width, 0);
				ctx.scale(-1, 1); // flip horizontally
			}
			ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
			face = canvas.toDataURL('image/png');

			return face;
		}

		const [rectoImage, versoImage] = await Promise.all([
			getImage('front'),
			getImage('back')
		]);

		const imageWidth = (width - widthSpacing - 2 * margin) / 2;
		const imageHeight = imageWidth * aspectRatio;

		const linesPerPage = 5;
		const heightSpacing = (height - 2 * margin - linesPerPage * imageHeight) / (linesPerPage - 1);

		for (let i = 0; i < linesPerPage; i++) {
			doc.addImage(rectoImage, "PNG", margin, margin + (imageHeight + heightSpacing) * i, imageWidth, imageHeight);
			doc.addImage(versoImage, "PNG", margin + imageWidth + widthSpacing, margin + (imageHeight + heightSpacing) * i, imageWidth, imageHeight);
		}

		// Save the PDF document
		doc.save('cards.pdf');
		isDownloading = false;
	}

	let flipped = false;
</script>

<div class="templateManager">
	{#if !component}
		<img class="templateManager__loading" src={loading} alt="loading"/>
	{/if}
	<div class="templateContainer" class:flipped>
		<svelte:component bind:this={component} {paletteIndex} this={templateComponent} {values}/>
	</div>
	<button on:click={() => flipped = !flipped}>* click to {flipped ? "unflip" : "flip"}! *</button>
	{#if isDownloading}
		<img class="templateManager__downloading" src={loading} alt="loading"/>
	{:else}
		<button class="templateContainer__download" on:click={pdfExport}>Exporter en PDF</button>
	{/if}
</div>
<style lang="scss">
	.templateManager {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
		height: 100%;

		&__loading {
			width: 100px;
			aspect-ratio: 1;

			animation: spin 2s linear infinite;
		}

		&__downloading {
			width: 20px;
			aspect-ratio: 1;
			margin-top: .5rem;

			animation: spin 2s linear infinite;
		}

		@keyframes spin {
			100% {
				transform: rotate(360deg);
			}
		}
	}

	.templateContainer {
		background: transparent;
		perspective: 1000px;
		margin: 1rem;

		&:hover, &.flipped {
			:global(.cardContainer) {
				transform: rotateY(180deg);
			}
		}

		&__download {
			margin-top: 1rem;
		}
	}
</style>
