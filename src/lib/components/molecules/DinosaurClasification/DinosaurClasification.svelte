<script lang="ts">
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

<div class="mt-2 rounded border-r border-b border-gray-200 dark:border-gray-400 bg-white dark:bg-linear-to-tl dark:from-gray-700 dark:to-gray-400 p-4">
	<h4 class="mb-2 font-bold text-gray-800 underline decoration-yellow-500">Klasifikasi</h4>
	<ul class="space-y-1 text-sm text-gray-800">
		<li><strong>Domain:</strong> <span class="dark:text-gray-300">{classification.domain}</span></li>
		<li><strong>Kingdom:</strong> <span class="dark:text-gray-300">{classification.kingdom}</span></li>
		<li><strong>Phylum:</strong> <span class="dark:text-gray-300">{classification.phylum}</span></li>
		<li><strong>Clade:</strong> <span class="dark:text-gray-300">{classification.clade?.join(', ')}</span></li>
		{#if family || subfamily}
			{#if family}
				<li><strong>Family:</strong> <span class="dark:text-gray-300">{family.value}</span></li>
			{/if}
			{#if subfamily}
				<li><strong>Subfamily:</strong> <span class="dark:text-gray-300">{subfamily.value}</span></li>
			{/if}
		{/if}

		{#if classification.genusInfo.length}
			<li><strong>Genus:</strong> <span class="dark:text-gray-300">{classification.genusInfo[0].value}</span></li>
		{/if}
		{#if classification.speciesInfo.length}
			<li><strong>Species:</strong> <span class="dark:text-gray-300">{classification.speciesInfo[0].value}</span></li>
		{/if}
	</ul>
</div>
