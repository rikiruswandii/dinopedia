<script lang="ts">
	import { onMount } from 'svelte';

	interface DinosaurImage {
		title: string;
		description: string;
		imageURL: string;
		authorURL: string;
		author: string;
		licenseURL: string;
		license: string;
	}

	// DinosaurList.svelte
	export let image: DinosaurImage = {
		title: '',
		description: '',
		imageURL: '',
		authorURL: '',
		author: '',
		licenseURL: '',
		license: ''
	};

	let directImageURL = '';

	// Ambil URL langsung dari Wikimedia API
	async function getDirectImageURL(filename: string) {
		const title = filename.replace('https://commons.wikimedia.org/wiki/File:', '');
		const apiURL = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json&origin=*`;

		const res = await fetch(apiURL);
		const data = await res.json();

		const pages = data.query.pages;
		const page:any = Object.values(pages)[0];

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
		<div class="flex h-64 w-full items-center justify-center bg-gray-200 text-sm text-gray-500">
			Memuat gambar...
		</div>
	{/if}

	<div class="rounded-b dark:border-r dark:border-b dark:border-gray-400 bg-gray-100 dark:bg-linear-to-tr dark:from-gray-700 dark:to-gray-400 px-4 py-2">
		<h3 class="font-semibold dark:text-gray-300">{image.title}</h3>
		<p class="text-sm text-gray-600 dark:text-gray-300">{@html image.description}</p>
		<p class="mt-2 text-xs dark:text-gray-300">
			By
			<a href={image.authorURL} target="_blank" class="text-teal-500 hover:underline hover:decoration-yellow-500">
				{image.author}
			</a>
			<br />
			License:
			<a href={image.licenseURL} target="_blank" class="text-teal-500 hover:underline hover:decoration-yellow-500">
				{image.license}
			</a>
		</p>
	</div>
</div>
