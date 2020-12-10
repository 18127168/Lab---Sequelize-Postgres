var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');

router.get('/', (req, res) => {
    res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

    var query = req.query.query;
    controller.search(query, function(search_recipes) {
        controller.getIngredient(function(ingredients) {
            res.render('recipes',{search_recipes :search_recipes, ingredients: ingredients});
        });
    });
})

module.exports = router;