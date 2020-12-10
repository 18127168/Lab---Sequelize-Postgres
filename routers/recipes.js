var express = require('express');
var router = express.Router();


var controller = require('../controllers/blogController');
router.get('/', (req, res) => {
    res.locals.foot_name = "18127153 - Phan Nhat Minh";

    controller.getRecipes(function(recipes) {
        res.locals.recipes = recipes;
        res.render('recipes');
    });
    
})

module.exports = router;