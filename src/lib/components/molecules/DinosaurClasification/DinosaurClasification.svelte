<script>
	export let classification = {};
</script>

<div class="rounded border border-gray-200 bg-white p-4 shadow-sm">
	<h4 class="mb-2 font-semibold">Klasifikasi</h4>
	<ul class="space-y-1 text-sm text-gray-700">
		<li><strong>Domain:</strong> {classification.domain}</li>
		<li><strong>Kingdom:</strong> {classification.kingdom}</li>
		<li><strong>Phylum:</strong> {classification.phylum}</li>
		<li><strong>Clade:</strong> {classification.clade?.join(', ')}</li>
		{#if classification.familyInfo.length}
			<li><strong>Family:</strong> {classification.familyInfo[0].value}</li>
		{/if}
		{#if classification.genusInfo.length}
			<li><strong>Genus:</strong> {classification.genusInfo[0].value}</li>
		{/if}
	</ul>
</div>
