<script lang="ts">
	import { DinosaurClasification, DinosaurImage, DinosaurSource } from '$lib/components/molecules';
	export let dinosaur;
</script>

<div class="mx-auto mb-8 max-w-4xl rounded bg-white dark:bg-white/20 dark:backdrop-blur-sm p-6 shadow-sm">
	<h2 class="mb-4 text-2xl font-bold">{dinosaur.name}</h2>
	<p class="mb-3 text-gray-600 dark:text-gray-300 italic">{dinosaur.temporalRange}</p>
	<p class="mb-4">{dinosaur.description}</p>

	<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
    <div class="overflow-x-auto">
      <DinosaurImage image={dinosaur.image} />
    </div>
    <div>
      <p><strong>Diet:</strong> {dinosaur.diet}</p>
      <p><strong>Lokomosi:</strong> {dinosaur.locomotionType}</p>
      <DinosaurClasification classification={dinosaur.classificationInfo} />
    </div>
  </div>
  

	<DinosaurSource source={dinosaur.source} />
</div>
