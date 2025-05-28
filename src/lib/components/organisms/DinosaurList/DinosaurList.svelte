<script lang="ts">
	import { onMount } from 'svelte';
	import { DinosaurCard } from '../DinosaurCard';
	import { loadMoreDinos } from '$lib/api/dinosaur';

	interface DinosaurResponse {
		count: number;
		currentPage: number;
		data: Array<any>;
		nextPage: string;
		prevPage: string;
	}

	// DinosaurList.svelte
	export let dinosaurs: DinosaurResponse = {
		count: 0,
		currentPage: 0,
		data: [],
		nextPage: '',
		prevPage: ''
	};

	let loading = false;
	let sentinel: HTMLDivElement | null = null;

	async function loadMore() {
		if (!dinosaurs.nextPage || loading) return;

		loading = true;
		try {
			const result: DinosaurResponse = await loadMoreDinos(dinosaurs.nextPage);
			dinosaurs = {
				...result,
				data: [...dinosaurs.data, ...result.data]
			};
		} catch (e) {
			console.error('Gagal load lebih banyak:', e);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		const observer = new IntersectionObserver(async (entries) => {
			if (entries[0].isIntersecting) {
				await loadMore();
			}
		});

		if (sentinel) observer.observe(sentinel);
		return () => observer.disconnect();
	});
</script>

<div class="columns-2 gap-4">
	{#each dinosaurs.data as dino (dino.id)}
		<div class="mb-4 break-inside-avoid">
			<DinosaurCard dinosaur={dino} />
		</div>
	{/each}
</div>

<div bind:this={sentinel} class="h-10"></div>

{#if loading}
	<p class="mt-4 text-center">Memuat...</p>
{/if}
