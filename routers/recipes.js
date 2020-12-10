var express = require('express');
var router = express.Router();


var controller = require('../controllers/blogController');
router.get('/', (req, res) => {
    res.locals.foot_name = "18127142 - Trinh Hoang Long";

    controller.getRecipes(function(recipes) {
        controller.getIngredient(function(ingredients) {

            res.render('recipes',{recipes :recipes, ingredients: ingredients});
        });
    });

})

module.exports = router;