<script setup>
import { ref } from 'vue';
//import { store } from '../stores/counter'

//const store = useCounterStore();
const counter = ref(0)
const newTodo = ref('');
const defaultData = [{
    done: false,
    content: 'Write a blog post'
}]
const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
const todos = ref(todosData);
function addTodo() {
    if (newTodo.value) {
        todos.value.push({
            done: counter,
            date: Date.now(),
            content: newTodo.value,
        });
        newTodo.value = '';
    }
    saveData();
}

/**make counter independet foreach task */
function doneTodo() {
    console.log("Hutinni!")
    console.log("Counter", counter.value)
   console.log("todosIndex", todos.value.index)
   
    counter.value++;
    saveData();
}

function removeTodo() {
    console.log(todos.value)
    todos.value.splice(this.index, 1);
    saveData();
}
function saveData() {
    const storageData = JSON.stringify(todos.value);
    localStorage.setItem('todos', storageData);
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
        <li v-for="(todo, index) in  todos "
        :key="index" >
        <p> {{ todo.content }}- {{ index }}</p>
        <p :key="index">{{ counter }}</p>
        <button @click="doneTodo(index)">Done</button>
        <button @click="removeTodo(index)">Remove</button>
    </li>
</ul>
<h4 v-if="todos.length === 0">No Chores at the moment. Add some!</h4>
</template>

<style scoped>
</style>
