const Rental = require('../modules/rentals');
var ObjectID = require('mongodb').ObjectID;

var getAll = (req, res, next) => {
    Rental.find({},function(err,allRentals){
        if(err){
            res.status(500).send({errors:[{title:'Rentals not found',details:'sorry we cant find dentals'}]});
        }
        res.json(allRentals);
    })

};

var getRentalById = (req, res, next)=> {

    Rental.findById(req.params.id,function(err,rental){
        if(err){
            res.status(500).send({errors:[{title:'Rental not found',details:'sorry could not find this rental'}]});

        }
        res.json(rental);
    })

}

module.exports = {
    getAll,
    getRentalById
};
