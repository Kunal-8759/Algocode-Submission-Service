const fp=require('fastify-plugin');

async function app(fastify,options){
    fastify.register(require('fastify-cors'));
    fastify.register(require('./services/service.plugin'));
    fastify.register(require('./routes/api/apiRoutes'),{prefix:'/api'});
}
module.exports=fp(app);