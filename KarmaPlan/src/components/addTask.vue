<script>
    import { ref } from 'vue';
    export default {
        name: 'App',
        setup () {
            const newTodo = ref('');
            const defaultData = [{
                done: false,
                content: 'Write a blog post'
            }]
            const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
            const todos = ref(todosData);
            function addTodo () {
                if (newTodo.value) {
                    todos.value.push({
                        done: false,
                        content: newTodo.value
                    });
                    newTodo.value = '';
                }
                saveData();
            }

            /**TODO: add counter to doneTodo */
            function doneTodo (todo) {
                console.log("Hutinni!")
                todo.done = !todo.done
                saveData();
            }
            /**TODO: add second button with this function  */
            function removeTodo (index) {
                todos.value.splice(index, 1);
                saveData();
            }
            function saveData () {
                const storageData = JSON.stringify(todos.value);
                localStorage.setItem('todos', storageData);
            }
            return {
                todos,
                newTodo,
                addTodo,
                doneTodo,
                removeTodo,
                saveData
            }
        }
    }
</script>

<template>
 <h2>Add a new Chore</h2>
    <form @submit.prevent="addTodo()">
        <label>New Chore</label>
        <input
            v-model="newTodo"
            name="newTodo"
            autocomplete="off"
        >
        <button>Add Chore</button>
    </form>
    <h2>Youre Chores</h2>
    <ul>
        <li
            v-for="(todo, index) in todos"
            :key="index"
        >
            <span
                :class="{ done: todo.done }"
                
            >{{ todo.content }}</span>
            <button @click="doneTodo(todo)">Done</button>
            <button @click="removeTodo(index)">Remove</button>
        </li>
    </ul>
    <h4 v-if="todos.length === 0">No Chores at the moment. Add some!</h4>
</template>

<style scoped>
</style>
