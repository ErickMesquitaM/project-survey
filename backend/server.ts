require("dotenv").config()
require('@cspotcode/source-map-support').install();

import qs from 'qs';

import fastify from 'fastify';

import routes from '@routes/root';
import database from '@db/index';

const server = fastify({ logger: true });

// connect MongoDB
database();


// parser for the content type application/x-www-form-urlencoded.
server.register(require('@fastify/formbody'), { parser: (str: string) => qs.parse(str) })


// declare a routes
server.register(routes);


// run the server!
( async () => {

  try {
    await server.listen({ port: 8080 })
  
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  
  }
})()