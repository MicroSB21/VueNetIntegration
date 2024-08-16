<script setup>
    import { ref } from 'vue'
    import HelloWorld from '../components/HelloWorld.vue'

    const page = ref("Home View")

    const data = ref("Chris")
</script>
<template>
    <div>
        <h1>{{page}}</h1>
        <hr />
        <h1>Hi from Vue {{data}}</h1>
        <input type="text" name="name" v-model="data" placeholder="Type your name" />
        <HelloWorld msg="Vite + Vue" />
    </div>
</template>

<style scoped>

</style>
