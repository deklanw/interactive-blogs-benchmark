<script>
	let count = 0;
</script>

<div class="m-4">
	<span>Count: {count}</span>
	<button class="block border-blue-700 border-solid border-2 p-2" on:click={() => (count += 1)}
		>Click me</button
	>
</div>
