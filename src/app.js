const fp=require('fastify-plugin');

async function app(fastify,options){
    fastify.register(require('@fastify/cors'));
}
module.exports=fp(app);