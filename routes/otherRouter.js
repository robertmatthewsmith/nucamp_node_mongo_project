const express = require('express');

const otherRouter = express.Router();

otherRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
   res.end('List of available \'other\' pets') ;
})
.post((req, res) => {
    res.end(`Adding available pet ${req.body.name}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /other');
})
.delete((req, res) => {
    res.end('Deleting all available \'other\' pets');
});
    
module.exports = otherRouter;
