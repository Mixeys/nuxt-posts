<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: Object as () => NuxtError,
})
</script>

<template>
	<div>
		<h1>{{ error?.statusCode }}</h1>
		<NuxtLink to="/">Go to Home</NuxtLink>
	</div>
</template>
