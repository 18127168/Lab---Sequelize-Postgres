var express = require('express');
var router = express.Router();
var controller = require('../controllers/blogController');

router.get('/', (req, res) => {
    res.locals.foot_name = "18127168 - Tran Bui Tai Nhan";

    var query = req.query.query;
    controller.search(query, function(search_recipes) {
        controller.getIngredient(function(ingredients) {
            console.log(search_recipes);
            for (let i = 0; i < search_recipes.length; i++){
                search_recipes[i].id = i + 1;
            }
            console.log(search_recipes);
            res.render('recipes',{recipes :search_recipes, ingredients: ingredients});
        });
    });
})

module.exports = router;