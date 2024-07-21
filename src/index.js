const fastify=require('fastify')({logger:false});
const {PORT} =require('./config/server.config');

const app=require('./app');

const { connectToDB } = require('./config/db.config');
const errorHandler = require('./utils/errorHandler');
const evaluationWorker = require('./workers/evaluation.worker');


fastify.register(app);
fastify.setErrorHandler(errorHandler)

fastify.listen({port:PORT},async(err)=>{
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log(`server started at port ${PORT}`);
    await connectToDB();
    evaluationWorker('EvaluationQueue');
})