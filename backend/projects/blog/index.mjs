import Fastify from 'fastify'

import * as homepage from './src/homepage.controller.mjs'
import * as tags from './src/tags.controller.mjs'
import * as articles from './src/articles.controller.mjs'
import * as article from './src/article.controller.mjs'
import * as files from './src/files.controller.mjs'

const fastify = Fastify({
    logger: true
})

// Declare a route
fastify
    .get('/api/homepage', homepage.read)
    .get('/api/tags', tags.read)
    .get('/api/articles', articles.read)
    .get('/api/articles/:id', article.read)
    .get('/files/:filename', files.read)

// Run the server!
try {
    await fastify.listen({ port: 3001 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}