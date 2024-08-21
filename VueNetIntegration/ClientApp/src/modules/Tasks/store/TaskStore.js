import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "Add store for state management", isFav: false },
            { id: 2, title: "Create UI for example", isFav: true },
            { id: 3, title: "Create Composables for examples", isFav: true },
            { id: 4, title: "Create Module for different sections of the app", isFav: false },
        ],
    }),
    getters: {
        favs: state => state.tasks.filter(x => x.isFav),
        favCount() {
            return this.tasks.reduce((accumulator, current) => {
                return current.isFav ? accumulator + 1 : accumulator
            },0)
        },
        totalCount: (state) => state.tasks.length
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter( x => x.id !== id)
        },

        toggleFav(id) {
            const task = this.tasks.find(x => x.id === id)
            task.isFav = !task.isFav
        }
    }
})