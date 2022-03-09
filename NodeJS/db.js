const mongoose= require('mongoose');


//to connect to mongoose
mongoose.connect('mongodb+srv://admin-sonali:sonali1205@cluster0.3v3kd.mongodb.net/SalesDataDB?retryWrites=true&w=majority',{useNewUrlParser: true},(err)=>
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






