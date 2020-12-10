var express = require('express');
var router = express.Router();


var controller = require('../controllers/blogController');
router.get('/', (req, res) => {
    controller.getAll(function(recipes) {
        console.log(recipes);
    });
    res.render('index');
})

module.exports = router;