import fastify from 'fastify';
import routes from './src/routes/root';

const server = fastify({ logger: true });


// Declare a routes
server.register(routes);


// Run the server!
( async () => {

  try {
    await server.listen({ port: 3000 })
  
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  
  }
})()