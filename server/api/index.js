const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

router.get('/recipes', function(req, res, next){
  Recipe.findAll().then(recipes => {
    res.status(200).send(recipes);
  }).catch(e => {
    console.log(e);
    res.status(500).send({"status": "failed"});
  });
});

router.post('/recipe/new', function(req, res, next){
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description
  });
  recipe.save(() => {
    res.status(200).send({"status": "success"});
  }).catch(e => {
    console.log(e);
    res.status(500).send({"status": "failed"});
  });
});

module.exports = router;
