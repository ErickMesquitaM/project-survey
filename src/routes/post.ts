import { FastifyInstance } from "fastify"


export default async function(app: FastifyInstance ) {

  app.post('/', async (req, rep) => {
    return 'post'
  })

} 