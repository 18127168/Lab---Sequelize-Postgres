var controller = {};

var models = require('../models');
var Recipes = models.Recipe;
var Ingredients = models.Ingredient;

controller.getRecipes = function (callback) {
	
	Recipes.findAll().then(function(recipes) {
		console.log(recipes);
		callback(recipes);
	});
};

controller.getIngredient = function (callback) {
	
	Ingredients.findAll().then(function(ingredients) {
		callback(ingredients);
	});
};

const sequelize = require('sequelize');
controller.search = function(query, callback){
	Recipes.findAll({
		where: {
			[sequelize.Op.or]: [
				{
					title: {
						[sequelize.Op.iLike]: '%' + query + '%'
					}
				},
				{
					summary: {
						[sequelize.Op.iLike]: '%' + query + '%'
					}
				},
				{
					description: {
						[sequelize.Op.iLike]: '%' + query + '%'
					}
				},
			]
		},
		raw: true
		
	}).then(function(search_recipes) {
		callback(search_recipes);
	});

};

module.exports = controller;
