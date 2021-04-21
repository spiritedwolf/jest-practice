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
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `get`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      myCookBook.addRecipe(recipeName, recipeIngredients);

      const testValue = myCookBookCli.run(cmd, recipeName);

      expect(testValue).toEqual(`The ingredients for Chicken Pizza are: bread,chicken,sizzling`);
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `remove`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      myCookBook.addRecipe(recipeName, recipeIngredients);

      const testValue = myCookBookCli.run(cmd, recipeName);

      expect(testValue).toEqual(`Successfully removed the following recipe: ${recipeName}`);
    });
  });

  // Stretch goals
  describe(`Check if recipe exists already`, () => {
    test('should receive the recipe name and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `add`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      myCookBook.addRecipe(recipeName, recipeIngredients);
      myCookBookCli.run(cmd, recipeName);
      const testValue = myCookBookCli.run(cmd, recipeName);

      expect(testValue).toEqual(`The recipe ${recipeName} is already added in your cookbook.`);
    });
  });

  describe(`Check if recipe does not exists`, () => {
    test('should receive the recipe name and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `get`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      myCookBook.addRecipe(recipeName, recipeIngredients);

      const testValue = myCookBookCli.run(cmd, 'IDoesNotExist');

      expect(testValue).toEqual(`The recipe IDoesNotExist does not exists.`);
    });
  });

  describe(`Deleting of recipe`, () => {
    test('should receive the recipe name and display the correct message', () => {
      const myCookBook = new Cookbook();
      const myCookBookCli = new CookbookCli(myCookBook);
      const cmd = `remove`;
      const recipeName = `Chicken Pizza`;
      const recipeIngredients = ['bread','chicken','sizzling'];
      myCookBook.addRecipe(recipeName, recipeIngredients);

      const testValue = myCookBookCli.run(cmd, 'IDoesNotExist');

      expect(testValue).toEqual(`The recipe IDoesNotExist does not exists.`);
    });
  });


});
