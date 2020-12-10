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

// controller.search = function(query, callback){
// 	Product.findAll({
// 		where: {
// 			$or: [
// 				{
// 					title: {
// 						$like: `%${query}%`
// 					}
// 				},
// 				{
// 					summary: {
// 						$like: `%${query}%`
// 					}
// 				},
// 				{
// 					description: {
// 						$like: `%${query}%` 
// 					}
// 				},
// 			]
// 		}
// 	}).then(funcion( ))
// };

module.exports = controller;