const submissionProducer = require('../producers/submission.producer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository=submissionRepository;
    }

    async addSubmission(submissionPayload){
        const submission=await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw {message:'not able to create submission'};
        }

        //adding submission to the producer then Queue
        const response=await submissionProducer(submissionPayload);
        return {queueResponse:response,submission};
    }
}

module.exports=SubmissionService;