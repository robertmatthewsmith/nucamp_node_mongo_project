const express = require('express');

const catRouter = express.Router();

catRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
   res.end('List of available cats') ;
})
.post((req, res) => {
    res.end(`Adding available cat ${req.body.name}.`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /cat');
})
.delete((req, res) => {
    res.end('Deleting all available cats');
});
    
module.exports = catRouter;
