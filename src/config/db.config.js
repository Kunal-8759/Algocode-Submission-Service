const mongoose=require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB(){
    try {
        if(NODE_ENV=="development"){
            await mongoose.connect(ATLAS_DB_URL);
            console.log('connected to the mongodb');
        }
    } catch (error) {
        console.log('unable to connect to the db server');
        console.log(error);
    }
}

module.exports={
    connectToDB
}