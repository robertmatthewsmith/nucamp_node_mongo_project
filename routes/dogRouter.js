const express = require('express');

const dogRouter = express.Router();

dogRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
   res.end('List of available dogs') ;
})
.post((req, res) => {
    res.end(`Adding available dog ${req.body.name}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dog');
})
.delete((req, res) => {
    res.end('Deleting all available dogs');
});
    
module.exports = dogRouter;





