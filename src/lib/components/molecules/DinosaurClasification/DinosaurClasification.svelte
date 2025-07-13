<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	interface DinosaurClasification {
		domain: string;
		kingdom: string;
		phylum: string;
		clade: Array<any>;
		familyInfo: Array<any>;
		genusInfo: Array<any>;
		speciesInfo: Array<any>;
	}

	// DinosaurList.svelte
	export let classification: DinosaurClasification = {
		domain: '',
		kingdom: '',
		phylum: '',
		clade: [],
		familyInfo: [],
		genusInfo: [],
		speciesInfo: []
	};

	let family = classification.familyInfo.find((f) => f.familyType === 'Family');
	let subfamily = classification.familyInfo.find((f) => f.familyType === 'Subfamily');
</script>

<div
	class="rounded border-r border-b border-gray-200 bg-white p-4 dark:border-gray-400 dark:bg-linear-to-tl dark:from-gray-700 dark:to-gray-400"
>
	<h4 class="mb-2 font-bold text-gray-800 underline decoration-yellow-500">Classification</h4>
	<ul class="space-y-1 text-sm text-gray-800">
		<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
			<span class="font-semibold">Domain</span>
			<span class="justify-self-end">:</span>
			<span class="dark:text-gray-300">
				{#if classification.domain}
					{classification.domain}
				{:else}
					<Badge variant="secondary" class="text-sm">unrecognized</Badge>
				{/if}
			</span>
		</li>
		<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
			<span class="font-semibold">Kingdom</span>
			<span class="justify-self-end">:</span>
			<span class="dark:text-gray-300">
				{#if classification.kingdom}
					{classification.kingdom}
				{:else}
					<Badge variant="secondary" class="text-xs">unrecognized</Badge>
				{/if}
			</span>
		</li>
		<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
			<span class="font-semibold">Phylum</span>
			<span class="justify-self-end">:</span>
			<span class="dark:text-gray-300">
				{#if classification.phylum}
					{classification.phylum}
				{:else}
					<Badge variant="secondary" class="text-xs">unrecognized</Badge>
				{/if}
			</span>
		</li>
		<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
			<span class="font-semibold">Clade</span>
			<span class="justify-self-end">:</span>
			<span class="dark:text-gray-300">
				{#if classification.clade}
					{classification.clade.join(', ')}
				{:else}
					<Badge variant="secondary" class="text-xs">unrecognized</Badge>
				{/if}</span
			>
		</li>

		{#if family}
			<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
				<span class="font-semibold">Family</span>
				<span class="justify-self-end">:</span>
				<span class="dark:text-gray-300"
					>{#if family.value}
						{family.value}
					{:else}
						<Badge variant="secondary" class="text-xs">unrecognized</Badge>
					{/if}</span
				>
			</li>
		{/if}

		{#if subfamily}
			<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
				<span class="font-semibold">Subfamily</span>
				<span class="justify-self-end">:</span>
				<span class="dark:text-gray-300"
					>{#if subfamily.value}
						{subfamily.value}
					{:else}
						<Badge variant="secondary" class="text-xs">unrecognized</Badge>
					{/if}</span
				>
			</li>
		{/if}

		{#if classification.genusInfo.length}
			<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
				<span class="font-semibold">Genus</span>
				<span class="justify-self-end">:</span>
				<span class="dark:text-gray-300">
					{#if classification.genusInfo.length > 1}
						{#each classification.genusInfo as genus (genus.value)}
							{genus.value}
						{/each}
					{:else}
						<Badge variant="secondary" class="text-xs">unrecognized</Badge>
					{/if}</span
				>
			</li>
		{/if}

		{#if classification.speciesInfo.length}
			<li class="grid grid-cols-[100px_4px_1fr] items-start gap-2">
				<span class="font-semibold">Species</span>
				<span class="justify-self-end">:</span>
				<span class="dark:text-gray-300"
					>{#if classification.speciesInfo.length > 1}
						{#each classification.speciesInfo as speciesInfo (speciesInfo.value)}
							{speciesInfo.value}
						{/each}
					{:else}
						<Badge variant="secondary" class="text-xs">unrecognized</Badge>
					{/if}</span
				>
			</li>
		{/if}
	</ul>
</div>
