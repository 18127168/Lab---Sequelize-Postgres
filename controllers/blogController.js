var controller = {};

var models = require('../models');
var Recipes = models.Recipe;
// controller.getAll = () => {
// 	return models.Blog.findAll();
// }

controller.getAll = function (callback) {
	
	Recipes.findAll().then(function(recipes) {
		callback(recipes);
	});
};

module.exports = controller;