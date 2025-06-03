<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { mode, setMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { BarChart, DinosaurList, Chart, Footer, Header } from '$lib/components/organisms';
	import { StatisticCard } from '$lib/components/molecules';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { m } from '$lib/paraglide/messages.js';
	import { Shizuka, Suneo, Nobita, Doraemon, Giant, dinoMeme } from '$lib/data/images.js';
	import { loadMoreDinos } from '$lib/api/dinosaur';
	import type { imageInfo } from '$lib/types/clades';
	import { PUBLIC_APP_NAME } from '$env/static/public';
	const appName: string = PUBLIC_APP_NAME || 'Dinopedia';
	export let data;

	const { clades, diets, locomotions } = data;

	let loading: boolean = true;
	let aboutImage: imageInfo = dinoMeme;
	interface Benefit {
		label: string;
		image: imageInfo;
	}

	let itsbenefit: Benefit[] = [
		{ label: 'Clades', image: Giant },
		{ label: 'Diets', image: Shizuka },
		{ label: 'Locomotions', image: Suneo },
		{ label: 'Dinosaurs', image: Nobita },
		{ label: 'Images', image: Doraemon }
	];

	// state untuk toggle switch
	let darkMode = mode.current === 'light';

	// perhatikan reaktivitas jika user mengubah switch
	$: setMode(darkMode ? 'dark' : 'light');
</script>

<section class="bg-background dark:bg-background">
	<Header />

	<div class="relative isolate px-6 pt-14 lg:px-8">
		<div
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm/6 text-yellow-500 ring-1 ring-yellow-200 hover:ring-yellow-300 dark:text-teal-400 dark:ring-yellow-400/10"
				>
					{m.community()}
				</div>
			</div>
			<div class="text-center">
				<h1
					class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-teal-200"
				>
					<span class="underline decoration-teal-400 dark:decoration-green-400"
						>{m.exploring()}</span
					>
					<span class="underline decoration-yellow-200">{m.world()}</span>
					<span class="underline decoration-yellow-500">{m.dino()}</span>
					{m.benefits()}
				</h1>
				<p
					class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-400"
				>
					{m.identify()}
					<span class="underline decoration-yellow-200 dark:decoration-yellow-200/50"
						>{m.more_species()}</span
					>,
					<span class="underline decoration-yellow-500 dark:decoration-yellow-500/50"
						>{m.history()}</span
					>{m.fact()}
					<span class="underline decoration-teal-300 dark:decoration-teal-300/50">{appName}</span>!
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<Button href="/" variant="secondary">{m.getstart()}</Button>
					<a href="/" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-400"
						>{m.learn()} <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
		</div>
		<div
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
	</div>
</section>

<section class="bg-background dark:bg-background h-screen py-12">
	<div class="container px-20 **:mx-auto">
		<h2
			class="mb-6 text-center text-4xl font-extrabold tracking-tight text-teal-600 underline decoration-teal-200 dark:text-yellow-400 dark:decoration-yellow-600"
		>
			{m.what_is_that({ name: appName })}
		</h2>

		<p
			class="text-center text-lg font-medium text-pretty text-gray-700 sm:text-xl/8 dark:text-gray-400"
		>
			<span class="font-semibold text-teal-500">{appName}</span>
			<span class="font-semibold text-yellow-500">{m.is()}</span>
			{m.site_dec_1()} <span class="font-semibold text-teal-500">{m.site_about_dec()}</span>
			{m.site_dec_2()}
		</p>
	</div>
</section>
<section class="bg-background dark:bg-background min-h-screen py-16">
	<div class="container mx-auto px-6 sm:px-12 lg:px-20">
		<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
			<!-- Text Section -->
			<div>
				<h2
					class="mb-6 text-center text-4xl font-extrabold tracking-tight text-teal-600 underline decoration-teal-200 md:text-left dark:text-yellow-400 dark:decoration-yellow-600"
				>
					Jelajahi Dunia Dinosaurus di Dinopedia
				</h2>
				<p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
					Temukan berbagai informasi menarik tentang makhluk purba dari era Jurassic dan Cretaceous!
					Dinopedia menyajikan data interaktif mulai dari jenis dinosaurus, pola makan, hingga cara
					mereka bergerak.
				</p>
				<p class="text-base text-gray-600 dark:text-gray-400">
					Pilih salah satu kategori di samping untuk memulai penjelajahanmu!
				</p>
			</div>

			<!-- Card Grid Section -->
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
				{#each itsbenefit as b, index (index)}
					<a
						href="/"
						class="group relative flex h-32 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800
					{index === 3 ? 'sm:col-span-2' : ''}"
					>
						<div class="z-10">
							<span
								class="text-base font-semibold text-gray-800 transition group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-yellow-300"
							>
								{b.label}
							</span>
						</div>
						<img
							src={b.image.src}
							alt={b.image.alt}
							title={b.image.title}
							class="absolute right-2 bottom-2 h-auto w-20 rounded object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="bg-background dark:bg-background py-12">
	<div class="container mx-auto px-20">
		<h2
			class="mb-6 text-center text-4xl font-extrabold tracking-tight text-teal-600 underline decoration-teal-200 md:text-left dark:text-yellow-400 dark:decoration-yellow-600"
		>
			{m.clade_dino()}
		</h2>

		<!-- Molecule: Statistic Cards -->

		<!-- Organism: Bar Chart Placeholder -->
		<BarChart>
			<!-- Chart component will be mounted here -->
			<Chart clades={clades} diets={diets} locomotions={locomotions} />
		</BarChart>
	</div>
</section>

<!-- <section class="bg-white py-12 dark:bg-black">
	{#if loading}
		<div class="container mx-auto px-4 md:px-10 lg:px-20">
			
			<div class="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each Array(3) as _}
					<Skeleton class="h-[100px] w-full rounded-2xl" />
				{/each}
			</div>

			
			<div class="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
				<Skeleton class="h-[300px] w-full rounded-2xl lg:col-span-2" />
				<Skeleton class="h-[300px] w-full rounded-2xl" />
			</div>
		</div>
	{:else}
		<div class="container mx-auto px-20">
			<h2
				class="text-chart-5 mb-6 text-4xl font-bold underline decoration-teal-200 dark:text-teal-400 dark:underline dark:decoration-yellow-500"
			>
				{m.dino()}
			</h2>
			<DinosaurList dinosaurs={data.data} />
		</div>
	{/if}
</section> -->

<!-- Footer -->
<Footer />
