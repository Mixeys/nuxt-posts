<script setup lang="ts">
import { useAppFetch } from '~/composables/useAppFetch'

type Todo = {
	completed: boolean
	id: number
	title: string
	userId: number
}

const { data: todos, error, status } = await useAppFetch('/todos')
</script>

<template>
	<h1>Home</h1>
	<div v-if="status === 'pending'">Loading...</div>
	<div v-if="status === 'error'">{{ error }}</div>
	<ul v-if="Array.isArray(todos) && todos.length">
		<li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
	</ul>
</template>
