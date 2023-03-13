import { FastifyInstance } from "fastify"


export default async function(app: FastifyInstance ) {

  app.delete('/', async (req: unknown, rep: unknown) => {
    return 'delete'
  })

} 