import { FastifyInstance } from "fastify"

import addUser from "@controllers/addUser"

export default async function(app: FastifyInstance ) {

  app.post('/new-user', addUser )
} 