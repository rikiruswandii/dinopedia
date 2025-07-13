<script lang="ts">
	import { DinosaurClasification, DinosaurImage, DinosaurSource } from '$lib/components/molecules';
	export let dinosaur;
	import { onMount } from 'svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

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
	let image: DinosaurImage = dinosaur.image || {
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
		const page: any = Object.values(pages)[0];

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

<div
	class="mb-8 max-w-7xl rounded border border-gray-200 bg-white p-6 shadow-sm dark:border dark:border-gray-500 dark:bg-transparent"
>
	<h2 class="mb-4 text-2xl font-bold underline decoration-teal-500">{dinosaur.name}</h2>
	<p class="mb-3 text-gray-600 italic dark:text-gray-300">{dinosaur.temporalRange}</p>
	<p class="mb-4 text-justify">{dinosaur.description}</p>

	<div class="grid grid-cols-2 gap-6 md:grid-cols-[auto_1fr]">
		<div class="overflow-x-auto">
			<div class="mx-auto max-w-md overflow-hidden rounded shadow">
				{#if directImageURL}
					<img src={directImageURL} alt={image.title} class="h-64 w-full object-contain" />
				{:else}
					<div
						class="flex h-64 w-full items-center justify-center bg-gray-200 text-sm text-gray-500"
					>
						Load image...
					</div>
				{/if}
			</div>
		</div>
		<div>
			<ul
				class="space-y-1 rounded border-t border-l border-gray-200 p-4 text-sm text-gray-800 dark:border-gray-400"
			>
				<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
					<h4 class="font-bold text-gray-800 underline decoration-yellow-500">Diet</h4>
					<span class="justify-self-end">:</span>
					<span class="hover:underline hover:decoration-yellow-500"
						>{#if dinosaur.diet}
							{dinosaur.diet}
						{:else}
							<Badge variant="secondary" class="text-xs">unrecognized</Badge>
						{/if}</span
					>
				</li>
				<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
					<span class="font-bold text-gray-800 underline decoration-yellow-500">Locomotion</span>
					<span class="justify-self-end">:</span>
					<span class="hover:underline hover:decoration-yellow-500"
						>{#if dinosaur.locomotionType}
							{dinosaur.locomotionType}
						{:else}
							<Badge variant="secondary" class="text-xs">unrecognized</Badge>
						{/if}</span
					>
				</li>
			</ul>
			<Separator />
			<DinosaurClasification classification={dinosaur.classificationInfo} />
		</div>
		<div class="col-span-2">
			<div
				class="rounded-sm border-r border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-200 dark:bg-linear-to-tr dark:from-gray-700 dark:to-gray-400"
			>
				<h3 class="font-semibold dark:text-gray-300">{image.title}</h3>
				<p class="text-justify text-sm text-gray-600 dark:text-gray-300">
					{@html image.description}
				</p>
				<p class="mt-2 text-xs dark:text-gray-300">
					By
					<a
						href={image.authorURL}
						target="_blank"
						class="text-teal-500 hover:underline hover:decoration-yellow-500"
					>
						{image.author}
					</a>
					<br />
					License:
					<a
						href={image.licenseURL}
						target="_blank"
						class="text-teal-500 hover:underline hover:decoration-yellow-500"
					>
						{image.license}
					</a>
				</p>
			</div>
		</div>
	</div>
	<DinosaurSource source={dinosaur.source} />
</div>
