<script lang="ts">
    import { m } from '$lib/paraglide/messages.js';
    import { PUBLIC_APP_NAME } from '$env/static/public';
	const appName: string = PUBLIC_APP_NAME || 'Dinopedia';
</script>

<footer class="bg-background dark:bg-background py-6 text-center text-sm text-gray-700 dark:text-gray-300">
	{m.footer_text({ name: appName })}
</footer>