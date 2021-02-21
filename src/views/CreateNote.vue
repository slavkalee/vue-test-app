<template>
  <Form :onAdd="addTodo" :onSubmit="onSubmit" />
  <ul class="to-do-list" v-if="todos.length">
    <TodoItem
      v-for="todo of todos"
      :key="todo.id"
      :title="todo.title"
      :id="todo.id"
      :completed="todo.completed"
      :onEdit="editTodo"
      @remove="removeTodo"
      @toggle="toggleTodo"
    />
  </ul>
  <NoTodos v-else />
</template>
 
<script>
import { mapMutations } from "vuex";
import TodoItem from "../components/Todo/TodoItem";
import NoTodos from "../components/Todo/NoTodos";
import Form from "../components/Note/Form";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: {
    TodoItem,
    NoTodos,
    Form,
  },
  methods: {
    ...mapMutations(["addNote"]),
    onSubmit(title) {
      if (title.trim() !== "") {
        const newNote = {
          id: Date.now(),
          title,
          todos: this.todos,
        };

        this.addNote(newNote);
        this.$router.push("/");
      }
    },
    addTodo(title) {
      this.todos.unshift({
        id: Date.now(),
        title,
        completed: false,
      });

      title = "";
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    toggleTodo(id) {
      this.todos = this.todos.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      });
    },
    editTodo(obj = {}) {
      this.todos = this.todos.map((t) => {
        if (t.id === obj.id) {
          t.title = obj.title;
        }
        return t;
      });
    },
  },
};
</script>