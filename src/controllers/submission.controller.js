async function createSubmission(req,res){
    console.log(req.body);
    const response=await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error:{},
        data:response,
        success:true,
        message:'created submission successfully'
    })
}
module.exports=createSubmission;