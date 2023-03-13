import { FastifyInstance } from "fastify"

import handlerGet from './get';
import handlerPost from './post';
import handlerPut from './put';
import handlerDelete from './delete';



export default async function(app: FastifyInstance ) {

  app.register(handlerGet);
  app.register(handlerPost);
  app.register(handlerPut);
  app.register(handlerDelete);
} 