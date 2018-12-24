import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'cheese',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 5)
      ]),
    new Recipe(
      'Pizza',
      'cheese',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 5)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
