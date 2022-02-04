<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

</script>

<template>
    
<div class="m-4">
	<span>Count: {{count}}</span>
	<button class="block border-blue-700 border-solid border-2 p-2" @click="() => (count++)"
		>Click me</button
	>
</div>

</template>

