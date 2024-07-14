const {z} = require('zod');

const SubmissionSchema=z.object({
    code:z.string(),
    language:z.string(),
    problemId:z.string(),
    userId:z.string()
})
module.exports=SubmissionSchema;