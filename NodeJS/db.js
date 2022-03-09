const env = require('dotenv').config();
const mongoose= require('mongoose');




//to connect to mongoose
mongoose.connect(process.env.MongoURI,{useNewUrlParser: true},(err)=>
{
    if(!err)
    {
        console.log("MongoDB connection succeded");
    }
    else{
        console.log('Error in DB connection : ' +JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;






