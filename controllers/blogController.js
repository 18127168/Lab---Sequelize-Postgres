var controller = {};

var models = require('../models');
var Recipes = models.Recipe;


controller.getRecipes = function (callback) {
	
	Recipes.findAll().then(function(recipes) {
		callback(recipes);
	});
};

module.exports = controller;