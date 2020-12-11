var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');


router.get('/', (req, res) => {
    res.locals.foot_name = "18127153 - Phan Nhat Minh";

    controller.getRecipes(function(recipes) {
        controller.getIngredient(function(ingredients) {
            recipes = recipes.slice(0, 5);
            ingredients = ingredients.slice(0, 5) + ingredients.slice(10, 15) + ingredients.slice(20, 25) + ingredients(30, 35);
            
            res.render('recipes',{recipes :recipes, ingredients: ingredients});
        });
    });

})

module.exports = router;
