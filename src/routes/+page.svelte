<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { mode, setMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { BarChart, DinosaurList } from '$lib/components/organisms';
	import { StatisticCard } from '$lib/components/molecules';
	export let data;
	console.table(data.data)

	onMount(async () => {
		const { default: ApexCharts } = await import('apexcharts');

		const options = {
			chart: {
				type: 'bar',
				height: 280
			},
			series: [
				{
					name: 'Jumlah Spesies',
					data: [1173, 754, 447, 374, 339, 331, 326, 323, 291, 286]
				}
			],
			xaxis: {
				categories: [
					'Dinosauria',
					'Saurischia',
					'Theropoda',
					'Ornithischia',
					'Ornithopoda',
					'Cerapoda',
					'Sauropodomorpha',
					'Avetheropoda',
					'Tetanurae',
					'Coelurosauria'
				]
			},
			colors: ['#3B82F6']
		};

		const chart = new ApexCharts(document.querySelector('#cladeBarChart'), options);
		chart.render();
	});

	// state untuk toggle switch
	let darkMode = mode.current === 'light';

	// perhatikan reaktivitas jika user mengubah switch
	$: setMode(darkMode ? 'dark' : 'light');
</script>

<section class="bg-white dark:bg-black">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5 text-gray-700 dark:text-gray-200">
					<span class="sr-only">DINOPEDIA</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
						alt=""
					/>
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">Home</a>
				<a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">Dinosaurs</a>
				<a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">Habitats</a>
				<a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">About</a>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<div class="flex items-center space-x-2">
					<Switch bind:checked={darkMode} id="dark-mode" />
					<Label for="dark-mode">
						{darkMode ? 'Mode Gelap' : 'Mode Terang'}
					</Label>
				</div>
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-50"></div>
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Close menu</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Home</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Dinosaur</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Habitats</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>About</a
							>
						</div>
						<div class="py-6">
							<div class="flex items-center space-x-2">
								<Switch bind:checked={darkMode} id="dark-mode" />
								<Label for="dark-mode" class="font-normal text-gray-900 dark:text-teal-200">
									{darkMode ? 'Mode Gelap' : 'Mode Terang'}
								</Label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

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
					class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-teal-400 dark:ring-gray-200/10"
				>
					Komunitas Pecinta Dinosaurus
				</div>
			</div>
			<div class="text-center">
				<h1
					class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-teal-200"
				>
					Menjelajahi Dunia Dinosaurus dengan Cara Seru dan Interaktif!
				</h1>
				<p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
					Kenali ratusan spesies dinosaurus, pelajari sejarahnya, dan temukan fakta menarik yang
					tidak diajarkan di sekolah. Yuk, mulai petualanganmu di DINOPEDIA!
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Get started</a
					>
					<a href="#" class="text-sm/6 font-semibold text-gray-900"
						>Learn more <span aria-hidden="true">→</span></a
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

<section class="bg-white py-12">
	<div class="container mx-auto px-20">
		<h2 class="mb-6 text-2xl font-bold text-gray-800">Statistik Clade Dinosaurus</h2>

		<!-- Molecule: Statistic Cards -->
		<StatisticCard />

		<!-- Organism: Bar Chart Placeholder -->
		<BarChart>
			<!-- Chart component will be mounted here -->
			<div id="cladeBarChart" class="h-72"></div>
		</BarChart>
	</div>
</section>

<section class="bg-white py-12">
	<DinosaurList dinosaurs={data.data} />
</section>

<style>
	#cladeBarChart {
		width: 100%;
	}
</style>
