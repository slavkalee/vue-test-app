<template>
  <Form
    :value="currentNote.title"
    :onSubmit="editCurrentNote"
    :todos="todos"
    :addTodo="addTodo"
    :changeTodo="changeTodo"
    :removeTodo="removeTodo"
    :toggleTodo="toggleTodo"
  />
</template>
 
<script>
import Form from "../components/Note/Form";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.todos = [...this.currentNote.todos];
  },
  components: {
    Form,
  },
  methods: {
    ...mapMutations(["editNote"]),
    editCurrentNote(title) {
      const id = this.currentNote.id;
      this.editNote({
        id,
        title,
        todos: this.todos,
      });
      this.$router.push("/");
    },
    addTodo(title) {
      if (title) {
        this.todos.unshift({
          id: Date.now(),
          title,
          completed: false,
        });
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id) {
      this.todos = this.todos.map((todo) => {
        const t = { ...todo };
        if (+t.id === +id) {
          t.completed = !t.completed;
        }
        return t;
      });
    },
    changeTodo(id, title) {
      this.todos = this.todos.map((todo) => {
        const t = { ...todo };
        if (+id === +t.id) {
          t.title = title;
        }
        return t;
      });
    },
  },
  computed: {
    ...mapGetters(["getNoteById"]),
    currentNote() {
      const noteId = this.$route.params.id;
      return this.getNoteById(noteId);
    },
  },
};
</script>