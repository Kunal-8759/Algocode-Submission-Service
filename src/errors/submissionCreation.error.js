const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class SubmissionCreationError extends BaseError{
    constructor(details){
        super('SubmissionError',StatusCodes.BAD_REQUEST,'Not able to create Submission',details);
    }
}

module.exports=SubmissionCreationError;