var controller = {};

var models = require('../models');
var Recipes = models.Recipe;
var Ingredients = models.Ingredient;


controller.getRecipes = function (callback) {
	
	Recipes.findAll().then(function(recipes) {
		callback(recipes);
	});
};

controller.getIngredient = function (callback) {
	
	Ingredients.findAll().then(function(ingredients) {
		callback(ingredients);
	});
};

controller.search = function(query, callback){
	Recipes.findAll({
		where: {
			$or: [
				{
					title: {
						$like: `%${query}%`
					}
				},
				{
					summary: {
						$like: `%${query}%`
					}
				},
				{
					description: {
						$like: `%${query}%` 
					}
				},
			]
		},
	}).then(function(search_recipes) {
		callback(search_recipes);
	});

};

module.exports = controller;