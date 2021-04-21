// const { Cookbook } = require('./cookbook');

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {

    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }

  add(name, ingredients) {
    const recipe = this.cookbook.listRecipes();
    if(recipe.includes(name)) {
      return `The recipe ${name} is already added in your cookbook.`;
    }
    else {
      this.cookbook.addRecipe(name, ingredients);
      return `Successfully added the following recipe: ${name}`;
    }
  }

  get(name) {
    const recipe = this.cookbook.listRecipes();
    if(recipe.includes(name)) {
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    }
    else {
      return `The recipe ${name} does not exists.`
    }
  }

  remove(name) {
    const recipe = this.cookbook.listRecipes();
    if(recipe.includes(name)) {
      this.cookbook.removeRecipe(name);
      return `Successfully removed the following recipe: ${name}`;
    }
    else {
      return `The recipe ${name} does not exists.`
    }
  }
}

module.exports = { CookbookCli };

