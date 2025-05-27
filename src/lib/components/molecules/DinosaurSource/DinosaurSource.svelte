<script>
	export let source = {};
</script>

<div class="mt-4 text-xs text-gray-500 italic">
	<p>
		Sumber: <a href={source.wikipediaURL} target="_blank" class="text-blue-600 hover:underline"
			>{source.pageTitle}</a
		>
		— {source.publisher}
	</p>
	<p>Citation: {source.citation}</p>
</div>
