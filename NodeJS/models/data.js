const mongoose = require('mongoose');

var data= mongoose.model('data',
{
    date: {type: Date},
    sale:{type:Number},
    purchase:{type:Number},
    credit:{type:Number}
});

module.exports = {
    data:data
};

