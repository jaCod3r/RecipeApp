import {Recipe} from "./recipe.model";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'cheese', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'),
    new Recipe('Pizza', 'cheese', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}