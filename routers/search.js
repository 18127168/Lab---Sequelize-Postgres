var express = require('express');
var router = express.Router();


var controller = require('../controllers/blogController');
router.get('/:id', (req, res) => {
    
    controller.getAll(function(recipes) {
        console.log(recipes);
    });
    res.render('search');
})

module.exports = router;