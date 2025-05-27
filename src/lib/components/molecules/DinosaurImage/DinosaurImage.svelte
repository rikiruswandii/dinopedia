<script>
	export let image = {};
</script>

<div class="mx-auto max-w-md overflow-hidden rounded shadow-lg">
	<img src={image.imageURL} alt={image.title} class="h-64 w-full object-cover" />
	<div class="bg-gray-100 px-4 py-2">
		<h3 class="font-semibold">{image.title}</h3>
		<p class="text-sm text-gray-600">{image.description}</p>
		<p class="mt-2 text-xs">
			By <a href={image.authorURL} target="_blank" class="text-blue-600 hover:underline"
				>{image.author}</a
			>
			<br />
			License:
			<a href={image.licenseURL} target="_blank" class="text-blue-600 hover:underline"
				>{image.license}</a
			>
		</p>
	</div>
</div>
