const submissionQueue = require("../queues/submission.queue")


//the payload is overall one submission from the client side or req.body
module.exports=async function(payload){
    await submissionQueue.add("SubmissionJob",payload);
    console.log("added a new submission job");
}