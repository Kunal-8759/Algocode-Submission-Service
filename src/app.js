const fp=require('fastify-plugin');

async function app(fastify,options){
    await fastify.register(require('fastify-cors'));
    await fastify.register(require('./repositories/repository.plugin'));
    await fastify.register(require('./services/service.plugin'));
    await fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
}
module.exports=fp(app);
