import { FastifyInstance } from "fastify"


export default async function(app: FastifyInstance ) {

  app.get('/', async (req: unknown, rep: unknown) => {
    return 'hello world'
  })

  app.get('/pong', async (req: unknown, rep: unknown) => {
    return 'ping'
  })

  app.get('/ping', async (req: unknown, rep: unknown) => {
    return 'pong'
  })

} 