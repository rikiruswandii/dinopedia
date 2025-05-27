<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>
<ModeWatcher defaultMode={"light"} themeColors={{ dark: "black", light: "white" }} />
{@render children()}
