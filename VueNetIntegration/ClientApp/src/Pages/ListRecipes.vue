<template>
    <div class="loading" v-if="recipesStore.loading">
        Loading recipies...
    </div>
    <div class="container">
        <div class="row">
            <div :key="recipe.id" class="col-12 col-sm-8 col-md-6 col-lg-4" v-for="recipe in recipesStore.recipes">
                <Recipe :recipe="recipe"/>
            </div>
        </div>
    </div>
    <div class="container" v-if="recipesStore.error != null">
        <p>{{ recipesStore.error }}</p>
    </div>
</template>

<script setup>
   import { ref, onMounted } from 'vue'
   import { useRecipesStore } from '../stores/RecipesStore';
   import Recipe from '../components/Recipe.vue';


    const recipesStore = useRecipesStore();

    onMounted(()=> {
        recipesStore.getRecipes();
    })
</script>

<style scoped>

</style>