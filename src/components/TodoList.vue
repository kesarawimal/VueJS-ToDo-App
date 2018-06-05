<template>
   <div>
    <!-- // JavaScript expressions in Vue are enclosed in double curly brackets. -->
    <div class="ui label">
      <i class="paper plane icon"></i>
    <span>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</span>
    </div>
    <div class="ui label">
      <i class="calendar alternate icon"></i>
      <span>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</span>
</div>
    <todo v-on:delete-todo="deleteTodo" v-for="todo in todos" :todo.sync="todo" :key="todo"></todo>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>

<style scoped>
</style>
