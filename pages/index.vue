<script setup lang="ts">
import { useAppFetch } from '~/composables/useAppFetch'

const { data: posts, error, status } = await useAppFetch<Post[]>('/posts')
</script>

<template>
	<h1>Last posts:</h1>
	<div v-if="status === 'pending'">Loading...</div>
	<div v-if="status === 'error'">{{ error }}</div>
	<ul v-if="Array.isArray(posts) && posts.length">
		<li v-for="post in posts.slice(0, 3)" :key="post.id">{{ post.title }}</li>
	</ul>
</template>
