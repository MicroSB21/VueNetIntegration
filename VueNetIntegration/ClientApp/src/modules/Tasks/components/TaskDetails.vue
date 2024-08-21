<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i @click="taskStore.deleteTask(task.id)">
                <IconDelete class="material-icons" :height="20" :width="20" :fill="'grey'" />
            </i>
            <i  @click="taskStore.toggleFav(task.id)"> 
                <IconFav class="material-icons"
                         :height="20" :width="20" :fill="task.isFav ? 'red': 'grey'" />
            </i>
        </div>
    </div>
</template>

<script setup>
    import IconDelete from '../assets/Icons/IconDelete.vue'
    import IconFav from '../assets/Icons/IconFav.vue'
    import { useTaskStore } from '../store/TaskStore'

    const props = defineProps(['task'])

    const taskStore = useTaskStore()

</script>

<style scoped>
    
</style>
