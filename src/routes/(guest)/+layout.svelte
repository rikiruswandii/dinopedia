<script lang="ts">
	import '../../app.css';
	import { ModeWatcher } from "mode-watcher";
	import {Footer} from '$lib/components/organisms/Footer';
	import {Header} from '$lib/components/organisms/Header';
	let { children } = $props();
</script>
<ModeWatcher defaultMode={"light"} themeColors={{ dark: "black", light: "white" }} />
<Header />
{@render children()}
<!-- Footer -->
<Footer />