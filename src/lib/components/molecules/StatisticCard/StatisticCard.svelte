<script lang="ts">
	import type { Clades } from '$lib/types/clades';

	export let clades: Clades;
	const maxClade = clades.data.reduce((max, item) => item.count > max.count ? item : max, clades.data[0]);
</script>

<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
	<div class="rounded bg-blue-50 p-6 text-center shadow dark:bg-white/20 dark:backdrop-blur-sm">
		<h3 class="text-4xl font-bold text-blue-600">{clades.uniqueClades}</h3>
		<p class="text-gray-600 dark:text-teal-100">Total Clade Unik</p>
	</div>
	<div class="rounded bg-green-50 p-6 text-center shadow dark:bg-white/20 dark:backdrop-blur-sm">
		<h3 class="text-4xl font-bold text-green-600">{maxClade.count}</h3>
		<p class="text-gray-600 dark:text-teal-100">Total Clade Tercatat</p>
	</div>
	<div class="rounded bg-yellow-50 p-6 text-center shadow dark:bg-white/20 dark:backdrop-blur-sm">
		<h3 class="text-4xl font-bold text-yellow-600">{maxClade.clade}</h3>
		<p class="text-gray-600 dark:text-teal-100">Clade Terbesar</p>
	</div>
</div>
