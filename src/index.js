const fastify=require('fastify')({logger:false});
const {PORT} =require('./config/server.config');

const app=require('./app');
fastify.register(app);

fastify.listen({port:PORT},(err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log(`server started at port ${PORT}`);
})