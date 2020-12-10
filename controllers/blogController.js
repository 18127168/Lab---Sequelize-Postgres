var controller = {};

var models = require('../models');
var Recipes = models.Recipe;
var Ingredients = models.Ingredient;

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}


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
						[Op.like]: `%${query}%`
					}
				},
				{
					summary: {
						[Op.like]: `%${query}%`
					}
				},
				{
					description: {
						[Op.like]: `%${query}%` 
					}
				},
			]
		},
		
	}).then(function(search_recipes) {
		callback(search_recipes);
	});

};

module.exports = controller;