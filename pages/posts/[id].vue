<script setup lang="ts">
import { useAppFetch } from '~/composables/useAppFetch'

const router = useRoute()
const id = router.params.id as string

const { data: post, error, status } = await useAppFetch<Post>(`/posts/${id}`)
</script>

<template>
	<div v-if="status === 'pending'">Loading...</div>
	<div v-if="status === 'error'">{{ error }}</div>
	<h1 v-if="post">{{ post.title }}</h1>
	<div v-if="post">{{ post.body }}</div>
	<div v-if="!post">Post not found</div>
</template>
