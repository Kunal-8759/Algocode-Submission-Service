const SubmissionRepository=require('./submission.repository');
const fp=require('fastify-plugin');
async function repositoryPlugin(fastify,options){
    fastify.decorate('submissionRepository',new SubmissionRepository)
}

module.exports=fp(repositoryPlugin);