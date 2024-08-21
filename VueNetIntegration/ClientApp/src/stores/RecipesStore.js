import { defineStore } from 'pinia'
import myAPI from '../../api/MyAPI';
import { RecipeInfo } from '../Models/Recipes'; 

export const useRecipesStore = defineStore('recipiesStore', {
   state: () => ({
       recipes: [],
       loading: false,
       error: null
   }),
   getters: {
        getRecipe: (state)=>{
            return (recipeId) =>  state.recipes.find(x => x.id == recipeId)
        }
   },
   actions: {
        async getRecipes() {
            this.loading = true;
            try {
                const response = await myAPI.get('?limit=10')
                this.recipes = response.data.recipes;
            } catch (error) {
                this.error = error
            }finally{
                this.loading = false
            }
        }
    }
})

//You can create many stores as you need,
// each store its responsable for a domain logic, you can call another stores from one store and send data
