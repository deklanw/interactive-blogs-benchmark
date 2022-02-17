<page>
title: My Site
</page>

<script setup lang="ts">
  const posts = useDocuments('~/pages/posts')
</script>

<template layout="nonpost">
  <h1 class="text-xl font-bold">Posts</h1>
  <ul v-for="post of posts" v-bind:key="post.title">
    <!-- <component :is="post" excerpt/> -->
		<li class="m-4 list-none">
			<a :href="post.href">
				<h2 class="text-lg font-semibold">
					{{post.title}}
				</h2>

				<p>
					{{post.description}}
				</p>
			</a>
		</li>
  </ul>
</template>
