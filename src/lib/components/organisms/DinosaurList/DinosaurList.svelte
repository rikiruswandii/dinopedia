<script lang="ts">
	import { DinosaurCard } from "../DinosaurCard";

	export let dinosaurs: any = [];
</script>

<div class="grid grid-cols-2 gap-4">
	{#each dinosaurs as dino (dino.id)}
		<DinosaurCard dinosaur={dino} />
	{/each}
</div>