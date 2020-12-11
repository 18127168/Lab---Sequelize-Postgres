var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');


router.get('/', (req, res) => {
    res.locals.foot_name = "18127153 - Phan Nhat Minh";

    controller.getRecipes(function(recipes) {
        controller.getIngredient(function(ingredients) {
            var recipes = recipes.slice(0, 5);
            var ingredients = ingredients.slice(0,5);
            res.render('recipes',{recipes :recipes, ingredients: ingredients});
        });
    });

})

module.exports = router;
