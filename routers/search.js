var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');

router.get('/', (req, res) => {
    res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

    var query = req.query.query;
    controller.search(query, function(search_recipes) {
        controller.getIngredient(function(ingredients) {
            search_recipes = search_recipes.slice(0, search_recipes.length/2);

            for (let i = 0; i < search_recipes.length; i++){
                search_recipes[i].id = i + 1;
            }

            for (let i = 0; i < 5; i++){
                ingredients[i*4].RecipeId = i + 1;
                ingredients[i*4 + 1].RecipeId = i + 1;
                ingredients[i*4 + 2].RecipeId = i + 1;
                ingredients[i*4 + 3].RecipeId = i + 1;
            }

            res.render('recipes',{recipes :search_recipes, ingredients: ingredients});
        });
    });
})

module.exports = router;