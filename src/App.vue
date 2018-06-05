<template>
  <div id="app">
    <router-view  v-bind:todos="todos"  :todo.sync="todo"></router-view>
    <create-todo v-on:create-todo="createTodo"></create-todo>
  </div>
</template>

<script>
import CreateTodo from '@/components/CreateTodo'

export default {
  name: 'App',
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  components: {
    CreateTodo,
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
}
</script>

<style>

</style>
