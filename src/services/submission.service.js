const submissionProducer = require('../producers/submission.producer');

class SubmissionService{
    constructor(){

    }

    async addSubmission(submission){
        const response=await submissionProducer(submission);
        return {queueResponse:response,submission};
    }
}

module.exports=SubmissionService;