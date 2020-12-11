var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');


router.get('/', (req, res) => {
    res.locals.foot_name = "18127153 - Phan Nhat Minh";

    controller.getRecipes(function(recipes) {
        controller.getIngredient(function(ingredients) {
            recipes = recipes.slice(0, 5);
            ingredients = ingredients.slice(0,20);

            for (let i = 0; i < 5; i++){
                ingredients[i*4].RecipeId = i + 1;
                ingredients[i*4 + 1].RecipeId = i + 1;
                ingredients[i*4 + 2].RecipeId = i + 1;
                ingredients[i*4 + 3].RecipeId = i + 1;
            }
            
            res.render('recipes',{recipes :recipes, ingredients: ingredients});
        });
    });

})

module.exports = router;
