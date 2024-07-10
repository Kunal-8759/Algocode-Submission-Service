const SubmissionService=require('./submission.service');
const fp=require('fastify-plugin');

async function servicePlugin(fastify,options){
    fastify.decorate('submissionService',new SubmissionService(this.submissionRepository));

}

module.exports=fp(servicePlugin);