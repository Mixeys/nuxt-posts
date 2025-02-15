export default defineNuxtPlugin({
	name: 'fetch',
	parallel: true,
	setup() {
		const appFetch = $fetch.create({
			baseURL: 'https://jsonplaceholder.typicode.com',
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
