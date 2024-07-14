const SubmissionCreationError = require('../errors/submissionCreation.error');
const submissionProducer = require('../producers/submission.producer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository=submissionRepository;
    }

    async addSubmission(submissionPayload){
        const submission=await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            throw new SubmissionCreationError('Failed to Create a submission in the repository');
        }

        //adding submission to the producer then Queue
        const response=await submissionProducer(submissionPayload);
        return {queueResponse:response,submission};
    }
}

module.exports=SubmissionService;