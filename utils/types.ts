import { z } from 'zod'

export type Post = z.infer<typeof postSchema>
