const submissionProducer = require('../producers/submission.producer');

class SubmissionService{
    constructor(submissionRepository){
        this.submissionRepository=submissionRepository;
    }

    async addSubmission(submission){
        const submissionRes=this.submissionRepository.createSubmission(submission);
        if(!submissionRes){
            throw {message:'not able to create submission'};
        }

        //adding submission to the producer then Queue
        const response=await submissionProducer(submission);
        return {queueResponse:response,submission};
    }
}

module.exports=SubmissionService;