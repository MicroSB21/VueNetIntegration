<script setup>
    import { ref } from 'vue'
    import TaskDetails from '../components/TaskDetails.vue'
    import TaskForm from '../components/TaskForm.vue'
    import { useTaskStore } from '../store/TaskStore'
    import { filterTypesEnum } from '../models/Enums'
    
    const taskStore = useTaskStore();

    const filter = ref(filterTypesEnum.ALL)
</script>

<template>
   

    <div class="new-task-form">
        <TaskForm />
    </div>

    <nav class="filter">
        <button @click="filter = filterTypesEnum.ALL">All tasks</button>
        <button @click="filter = filterTypesEnum.FAVS">Fav tasks</button>
    </nav>
    
    <div class="task-list" v-if="filter === filterTypesEnum.ALL">
        <p>You have {{ taskStore.totalCount }} tasks left to do</p>
        <div :key="task.id" v-for="task in taskStore.tasks">
            <TaskDetails :task="task" />
        </div>
    </div>

    <div class="task-list" v-if="filter === filterTypesEnum.FAVS">
        <p>You have {{ taskStore.favCount }} favs left to do</p>
        <div :key="task.id" v-for="task in taskStore.favs">
            <TaskDetails :task="task" />
        </div>
    </div>

</template>


<style scoped>
</style>