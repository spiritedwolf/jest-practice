const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const cookBook = new Cookbook();
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      const expectedRecipeValue = {};
      expectedRecipeValue[recipeName] = recipeIngredients;
      
      cookBook.addRecipe(recipeName, recipeIngredients);

      expect(cookBook.recipes).toEqual(expectedRecipeValue);
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const cookBook = new Cookbook();
      
      
      const recipe = cookBook.listRecipes();
      

      expect(recipe).toEqual([]);

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const cookBook = new Cookbook();
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      cookBook.addRecipe(recipeName, recipeIngredients);

      const recipe = cookBook.getRecipe(recipeName);  

      expect(recipe).toEqual(recipeIngredients);

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
