<script lang="ts">
	import { DinosaurClasification, DinosaurImage, DinosaurSource } from "$lib/components/molecules";
    export let dinosaur;
</script>

<div class="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">{dinosaur.name}</h2>
    <p class="mb-3 italic text-gray-600">{dinosaur.temporalRange}</p>
    <p class="mb-4">{dinosaur.description}</p>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DinosaurImage image={dinosaur.image} />
      <div>
        <p><strong>Diet:</strong> {dinosaur.diet}</p>
        <p><strong>Lokomosi:</strong> {dinosaur.locomotionType}</p>
  
        <DinosaurClasification classification={dinosaur.classificationInfo} />
      </div>
    </div>
  
    <DinosaurSource source={dinosaur.source} />
  </div>