<template>
  <Form :value="currentNote.title" />

  <ul class="to-do-list" v-if="currentNote.todos.length">
    <TodoItem
      v-for="todo of currentNote.todos"
      :key="todo.id"
      :title="todo.title"
      :id="todo.id"
      :completed="todo.completed"
    />
  </ul>
  <NoTodos v-else />
</template>
 
<script>
import { mapGetters, mapMutations } from "vuex";
import TodoItem from "../components/Todo/TodoItem";
import NoTodos from "../components/Todo/NoTodos";
import Form from "../components/Note/Form";

export default {
  data() {
    return {
      emptyNote: {
        id: null,
        title: "",
        todos: [],
      },
    };
  },
  components: {
    TodoItem,
    NoTodos,
    Form,
  },
  methods: {
    ...mapMutations(["addNewNote"]),
    addNote() {
      const newNote = {
        id: Date.now(),
        todos: this.currentNote.todos,
      };
      this.addNewNote(newNote);
    },
  },
  computed: {
    ...mapGetters(["getNoteById"]),
    currentNote() {
      const id = this.$route.params.id;
      const note = this.getNoteById(id);

      return note || this.emptyNote;
    },
  },
};
</script>