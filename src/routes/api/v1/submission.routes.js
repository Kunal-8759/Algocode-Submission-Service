const createSubmission = require("../../../controllers/submission.controller");

async function submissionRoutes(fastify,options){
    fastify.post('/',createSubmission);
}

module.exports=submissionRoutes;
