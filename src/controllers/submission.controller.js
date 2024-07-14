const SubmissionSchema = require("../dtos/createSubmission.dto");
const {StatusCodes} =require('http-status-codes')

async function createSubmission(req,res){
    try{
        SubmissionSchema.parse(req.body);

        console.log(req.body);
        const response=await this.submissionService.addSubmission(req.body);
        return res.status(201).send({
            error:{},
            data:response,
            success:true,
            message:'created submission successfully'
        })

    }catch(err){
        
        console.log('not matched with type set');

        return res.status(StatusCodes.BAD_REQUEST).send({
            error:err,
            data:{},
            success:false,
            message:'the type you send is not matched with zod schema'
        })
        
    }
}
module.exports=createSubmission;