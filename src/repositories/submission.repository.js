const submissionModel=require('../models/submission.model');

class SubmissionRepository{
    constructor(){
        this.submissionModel=submissionModel;
    }
    async createSubmission(submission){
        const response = await this.submissionModel.create(submission);
        return response;
    }

}

module.exports=SubmissionRepository;