<template>
	<header>
		<nav>
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/posts">Posts</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
		</nav>
	</header>
	<main>
		<slot />
	</main>
</template>
