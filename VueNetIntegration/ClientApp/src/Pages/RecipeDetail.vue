<template>
    <div class="container">
        <div class="row">
            <div class='recipe-card'>
              <div :style="{background:`url(${recipe.image}) no-repeat 50% 50%`}" style="background-size:cover; height: 150px"></div>
              <div class="recipe-card__body">
                <h1 class="recipe-card__heading">{{recipe.name}}</h1>  
                <ul class="recipe-card__nav">
                  <li @click="activeTab ='ingredients'">
                    <h3 :class="activeTab == 'ingredients' ? 'active': ''">Ingredients</h3>
                  </li>
                  <li @click="activeTab ='instructions'">
                    <h3 :class="activeTab == 'instructions' ? 'active': ''">Instructions</h3>
                  </li>
                </ul>         
                <ul class="recipe-card__ingredients" v-show="activeTab == 'ingredients'">
                    <li v-for="ingredient in recipe.ingredients">
                        {{ ingredient }}
                    </li>
                </ul>
                <ol v-show="activeTab == 'instructions'">
                    <li v-for="instructions in recipe.instructions">
                        {{ instructions }}
                    </li>
                </ol>
              </div>
              <button @click="goBack">Go Back</button>
            </div>
        </div>
    </div>

</template>

<script setup>
    import {ref, watchEffect} from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { useRecipesStore } from '../stores/RecipesStore';


    const route = useRoute()
    const router = useRouter()
    const recipesStore = useRecipesStore()
    const recipe = ref(null)
    const activeTab = ref("ingredients")


    watchEffect(() =>{
        const id = route.params.id
        recipe.value = recipesStore.getRecipe(id)
    })

    function goBack(){
        router.back()
    }


</script>

<style  scoped>
.recipe-card {
  -webkit-box-shadow: 0px 0px 20px 1px rgba(240,241,243,1);
  -moz-box-shadow: 0px 0px 20px 1px rgba(240,241,243,1);
  box-shadow: 0px 0px 20px 1px rgba(240,241,243,1);
  border:1px solid #f0f1f3;
  width: 300px;
  margin: 50px auto;
}
.recipe-card__body {    
    padding: 20px;
}
.recipe-card__heading {
  padding: 0;
  margin: 0 0 0;
  color: #444;
}
.recipe-card__subhead {
  font-size: 13px;
  color: #555;
  margin-bottom: 30px;
}
.recipe-card__ingredients {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  column-count: 1;
  li {
    margin-bottom: 5px;
  }
  li:before {
    content: '\2022';
    color: #eb9376;
    margin-right: 5px;
  }
}

.recipe-card__nav {
  margin: 0 0 20px;
  padding: 0;
  border-bottom: 1px solid #eb9376;
  li {
    display: inline-block;
    margin-right: 30px
  }
  h3 {
    margin: 0;
    padding: 0;
  }
  h3:after {
    content: '';
    display: block;
    width: 0%;
    padding-top: 10px;
    margin: 0 auto;
    border-bottom: 5px solid #eb9376;
    transition: width 250ms ease-in-out 0s;
  }
  h3:hover {
    cursor: pointer;
  }
  h3:hover:after, h3.active:after {
   width: 100%; 
  }
}

@media (min-width:599px) {
  .recipe-card {
    width: 600px
  }
  .recipe-card__ingredients {
    column-count: 1
  }
}
</style>