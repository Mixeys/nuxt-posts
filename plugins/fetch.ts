export default defineNuxtPlugin({
	name: 'fetch',
	parallel: true,
	setup() {
		const config = useRuntimeConfig()

		const appFetch = $fetch.create({
			baseURL: config.public.apiBaseUrl,
			onRequest({ options }) {
				options.headers.append('Accept', 'application/json')
			},
			async onResponseError({ response }) {
				if (response.status === 401) {
					console.error('Unauthorized')
				}
			},
		})

		return {
			provide: {
				fetch: appFetch,
			},
		}
	},
})
