<script setup>
    import { ref } from 'vue'
</script>

<template>
    <ul>
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/about">
                About
            </router-link>
        </li>
        <li>
            <router-link to="/tasks">
                Tasks
            </router-link>
        </li>
        <li>
            <router-link to="/recipes">
                Recipies
            </router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>

<style scoped>
</style>
