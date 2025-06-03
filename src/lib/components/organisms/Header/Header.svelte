<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	const appName: string = PUBLIC_APP_NAME || 'Dinopedia';
	import { m } from '$lib/paraglide/messages.js';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { mode, setMode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let darkMode = mode.current === 'light';
	$: setMode(darkMode ? 'dark' : 'light');

	// Scroll Behavior
	let lastScrollTop = 0;
	let hideHeader = false;
	let scrollTimeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			if (currentScroll > lastScrollTop && currentScroll > 50) {
				hideHeader = true; // scroll down
			} else {
				hideHeader = false; // scroll up
			}
			lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				hideHeader = false;
			}, 150); // muncul kembali setelah scroll berhenti
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Untuk toggle mobile menu
	let mobileMenuOpen = false;
</script>

<header
	class="fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-in-out"
	class:translate-y-[-100%]={hideHeader}
>
	<nav class="flex items-center justify-between p-6 lg:px-8 bg-background dark:bg-background rounded-b-full shadow dark:shadow-sm dark:shadow-gray-600" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5 text-gray-700 dark:text-gray-200">
				<span class="sr-only">{appName.toLocaleUpperCase}</span>
				<img
					class="h-8 w-auto"
					src="https://cdn-icons-png.flaticon.com/128/472/472751.png"
					alt=""
				/>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				on:click={() => (mobileMenuOpen = true)}
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
			<a href="/" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">{m.nav_home()}</a
			>
			<a href="/" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200">{m.dino()}</a>
			<a href="/" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200"
				>{m.nav_explorer()}</a
			>
			<a href="/" class="text-sm/6 font-semibold text-gray-900 dark:text-teal-200"
				>{m.nav_about()}</a
			>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<div class="flex items-center space-x-2">
				<Switch bind:checked={darkMode} id="dark-mode" />
				<Label for="dark-mode" class="font-normal text-gray-900 dark:text-teal-200">
					{darkMode ? m.dark_mode() : m.light_mode()}
				</Label>
			</div>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true" transition:fade>
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-50"></div>
		<div
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-black"
		>
			<div class="flex items-center justify-between">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">{appName}</span>
					<img
						class="h-8 w-auto"
						src="https://cdn-icons-png.flaticon.com/128/472/472751.png"
						alt=""
					/>
				</a>
				<button
					type="button"
					on:click={() => (mobileMenuOpen = false)}
					class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
				>
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
				<div class="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
					<div class="space-y-2 py-6">
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300"
							>{m.nav_home()}</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300"
							>{m.dino()}</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300"
							>{m.nav_explorer()}</a
						>
						<a
							href="/"
							class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-300"
							>{m.nav_about()}</a
						>
					</div>
					<div class="py-6">
						<div class="flex items-center space-x-2">
							<Switch bind:checked={darkMode} id="dark-mode" />
							<Label for="dark-mode" class="font-normal text-gray-900 dark:text-teal-200">
								{darkMode ? m.dark_mode() : m.light_mode()}
							</Label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
