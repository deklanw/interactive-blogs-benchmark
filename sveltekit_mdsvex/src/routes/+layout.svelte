<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col items-center justify-between bg-gray-200">
	<div class="m-10 w-1/2 flex justify-around align-top items-middle">
		<header class="text-2xl"><a href="/">Your Website</a></header>

		<nav class="w-40">
			<ul class="flex flex-row justify-around">
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</div>

	<main class="flex-grow m-4 w-1/2">
		<slot />
	</main>

	<footer class="p-10">Footer info goes here</footer>
</div>
