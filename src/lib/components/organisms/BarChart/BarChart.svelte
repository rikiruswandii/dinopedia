<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    let { children } = $props();
</script>
<div class="rounded bg-gray-100 dark:bg-white/20 dark:backdrop-blur-sm p-6 shadow">
    <h3 class="mb-4 text-xl font-semibold text-gray-700 dark:text-teal-200 dark:underline dark:decoration-yellow-200">
       {m.species_distribution()}
    </h3>
    <!-- Chart component will be mounted here -->
    {@render children()}
</div>