<script lang="ts">
	interface DinosaurSource {
		wikipediaURL: string;
		pageTitle: string;
		publisher: string;
		citation: string;
	}

	// DinosaurList.svelte
	export let source: DinosaurSource = {
		wikipediaURL: '',
		pageTitle: '',
		publisher: '',
		citation: ''
	};
</script>

<div class="mt-4 text-xs text-gray-500 dark:text-gray-300 italic">
	<p>
		Sumber: <a href={source.wikipediaURL} target="_blank" class="text-teal-500 hover:underline hover:decoration-yellow-500"
			>{source.pageTitle}</a
		>
		— {source.publisher}
	</p>
	<p>Citation: {source.citation}</p>
</div>
