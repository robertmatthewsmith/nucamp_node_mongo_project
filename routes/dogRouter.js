const express = require('express');
const Dog = require('../models/dog');

const dogRouter = express.Router();

dogRouter.route('/')
.get((req, res, next) => {
    Dog.find()
    .then(dogs => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dogs);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
   Dogs.create(req.body)
    .then(dogs => {
        console.log('Dog Profile Created ', dog);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dog');
})
.delete((req, res, next) => {
    Dog.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

dogRouter.route('/:dogsId')
.get((req, res, next) => {
    Dog.findById(req.params.dogId)
    .then(dog => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /dogs/${req.params.dogId}`);
})
.put((req, res, next) => {
    Dog.findByIdAndUpdate(req.params.dogId, {
        $set: req.body
    }, { new: true })
    .then(dog => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    })
    .catch(err => next(err));
})
    .delete((req, res, next) => {
       Dog.findByIdAndDelete(req.params.dogId)
        .then(response => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(response);
        })
        .catch(err => next(err));
    });

    
module.exports = dogRouter;





