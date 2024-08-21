<template>
      <div class="card">
        <img class="card-img-top" :src="recipe.image" alt="">
        <div class="card-body">
          <h4 class="card-title">{{recipe.name}}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Difficulty: {{ recipe.difficulty }}</h6>
          <p class="card-text">{{ recipe.cuisine }} </p>
          <RouterLink :to="{ name: 'recipeDetail', params: { id: recipe.id }}">Read More</RouterLink>
        </div>
      </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

    const props = defineProps({recipe : Object})
</script>

<style scoped>

</style>