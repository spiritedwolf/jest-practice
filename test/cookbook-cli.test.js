const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `add`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];

      const testValue = myCookBookCli.run(cmd, recipeName, recipeIngredients);

      expect(testValue).toBe(`Successfully added the following recipe: ${recipeName}`);

    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `list`;
      const recipe = myCookBook.listRecipes();

      const testValue = myCookBookCli.run(cmd);

      expect(testValue).toEqual(`You have the following recipes: ${recipe}`);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
