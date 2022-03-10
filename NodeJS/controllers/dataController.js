const express = require ('express');
const ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

var {data} = require('../models/data');

//router to get all the data from the collection

router.get('/',(req,res)=>
{
data.find((err,docs)=>{
    if(!err)
    {
        res.send(docs);
    }
    else
    {
        console.log("error in retriving");
    }
});
});

router.get('/:id',(req,res)=>
{
    if(!ObjectId.isValid(req.params.id))
    {
        return res.status(400).send('No record with the given id : ${req.params.id}');
    }

    data.findById(req.params.id,(err,doc)=>
    {
        if(!err){res.send(doc);}
        else
        {
            console.log("Error in retriving data");
        }
    });
})

router.post('/viewdata',(req,res)=>
{
    var firstDate = new Date(req.body.date)
    var secondDate = new Date(req.body.date2)

        data.find({        
            date:{ $gte:firstDate,
                $lt:secondDate
            }     
    })
    .then(data=>{
        res.json(data)
    })
    .catch(err=>console.log(err))
})
router.post('/getdata',(req,res)=>{
    //of type data model class
    var sale = new data({
        date:req.body.date,
        sale:req.body.sale,
        purchase:req.body.purchase,
        credit:req.body.credit
    });
    // console.log(sale);
    sale.save((err,doc)=>
    {
        if(!err)
        {
         console.log(doc);
            res.send(doc);
        }
        else
        {
            console.log("error in saving sale");
        }
    });
}
)

module.exports= router;