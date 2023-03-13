import { FastifyInstance } from "fastify"


export default async function(app: FastifyInstance ) {
  
  app.put('/', async (req: unknown, rep: unknown) => {
    return 'put'
  })

} 