<script lang="ts">
    let { children } = $props();
</script>
<div class="rounded-2xl bg-gray-100 p-6 shadow">
    <h3 class="mb-4 text-xl font-semibold text-gray-700">
        Top 10 Clade Berdasarkan Jumlah Spesies
    </h3>
    <!-- Chart component will be mounted here -->
    {@render children()}
</div>