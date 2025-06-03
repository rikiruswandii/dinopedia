<script lang="ts">
	import { onMount } from 'svelte';
	import type { Clades, Diets, Locomotions } from '$lib/types/clades';
	import { getCombinedChartOptions } from '$lib/utils/chartOptions';

	export let clades: Clades;
	export let diets: Diets;
	export let locomotions: Locomotions;

	let chartInstance: any;
	let chartEl: HTMLDivElement; // referensi DOM

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		// Fungsi untuk mendeteksi apakah mode gelap aktif berdasarkan class
		const getDarkMode = () => document.documentElement.classList.contains('dark');

		// Ambil status awal
		let isDark = getDarkMode();
		console.log('[INIT] Mode:', isDark ? 'Dark' : 'Light');

		// Buat chart awal
		const options = getCombinedChartOptions(clades, diets, locomotions, isDark);
		chartInstance = new ApexCharts(chartEl, options);
		chartInstance.render().then(() => {
			console.log('[INIT] Chart rendered');
		});

		// Observer untuk memantau perubahan class di <html>
		const observer = new MutationObserver(() => {
			const newDark = getDarkMode();
			if (newDark !== isDark) {
				isDark = newDark;
				console.log('[CLASS CHANGE] Mode:', isDark ? 'Dark' : 'Light');
				const updatedOptions = getCombinedChartOptions(clades, diets, locomotions, isDark);
				chartInstance.updateOptions(updatedOptions).then(() => {
					console.log('[CLASS CHANGE] Chart updated');
				});
			}
		});

		// Jalankan observer pada elemen <html>
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});
	});
</script>

<div bind:this={chartEl} class="h-72 w-full"></div>
