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

<div class="mt-2 rounded border border-gray-200 bg-white p-4">
	<h4 class="mb-2 font-semibold text-gray-700">Klasifikasi</h4>
	<ul class="space-y-1 text-sm text-gray-700">
		<li><strong>Domain:</strong> {classification.domain}</li>
		<li><strong>Kingdom:</strong> {classification.kingdom}</li>
		<li><strong>Phylum:</strong> {classification.phylum}</li>
		<li><strong>Clade:</strong> {classification.clade?.join(', ')}</li>
		{#if family || subfamily}
			{#if family}
				<li><strong>Family:</strong> {family.value}</li>
			{/if}
			{#if subfamily}
				<li><strong>Subfamily:</strong> {subfamily.value}</li>
			{/if}
		{/if}

		{#if classification.genusInfo.length}
			<li><strong>Genus:</strong> {classification.genusInfo[0].value}</li>
		{/if}
		{#if classification.speciesInfo.length}
			<li><strong>Species:</strong> {classification.speciesInfo[0].value}</li>
		{/if}
	</ul>
</div>
