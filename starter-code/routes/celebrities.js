const express = require('express');
const routerCelebretity = express.Router();
const Celebrity = require('./../models/celebrity')



routerCelebretity.get('/', (req, res) => {
  Celebrity.find()
    .then( (allCelebrities) => {
    res.render('celebrities', {celebrities: allCelebrities})
  })
    .catch( (err) => console.log(err));
})

routerCelebretity.get('/:id', (req, res) =>{
  Celebrity.findById(req.params.id)
    .then( oneCelebrity => {
      res.render('celebrities/show', {celebrity: oneCelebrity})
    })
    .catch( (err) => console.log(err));
})

module.exports = routerCelebretity; 