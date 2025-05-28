<script>
	import { onMount } from 'svelte';

	export let image = {};

	let directImageURL = '';

	// Ambil URL langsung dari Wikimedia API
	async function getDirectImageURL(filename) {
		const title = filename.replace('https://commons.wikimedia.org/wiki/File:', '');
		const apiURL = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json&origin=*`;

		const res = await fetch(apiURL);
		const data = await res.json();

		const pages = data.query.pages;
		const page = Object.values(pages)[0];

		if (page.imageinfo && page.imageinfo[0].url) {
			directImageURL = page.imageinfo[0].url;
		}
	}

	onMount(() => {
		if (image.imageURL) {
			getDirectImageURL(image.imageURL);
		}
	});
</script>

<div class="mx-auto max-w-md overflow-hidden rounded shadow">
	{#if directImageURL}
		<img src={directImageURL} alt={image.title} class="h-64 w-full object-contain" />
	{:else}
		<div class="h-64 w-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">Memuat gambar...</div>
	{/if}

	<div class="bg-gray-100 px-4 py-2">
		<h3 class="font-semibold">{image.title}</h3>
		<p class="text-sm text-gray-600">{image.description}</p>
		<p class="mt-2 text-xs">
			By
			<a href={image.authorURL} target="_blank" class="text-blue-600 hover:underline">
				{image.author}
			</a>
			<br />
			License:
			<a href={image.licenseURL} target="_blank" class="text-blue-600 hover:underline">
				{image.license}
			</a>
		</p>
	</div>
</div>
