<template>
  <Form
    :value="title"
    :onSubmit="addNote"
    :todos="todos"
    :addTodo="addTodo"
    :changeTodo="changeTodo"
    :removeTodo="removeTodo"
    :toggleTodo="toggleTodo"
  />
</template>
 
<script>
import Form from "../components/Note/Form";
// import { reactive } from "vue";
import { mapMutations } from "vuex";
// import { useStore } from "vuex";

export default {
  components: {
    Form,
  },
  // setup() {
  //   const store = useStore();

  //   const note = reactive({
  //     title: "",
  //     todos: [],
  //   });

  //   const addNewNote = () => store.commit('addNewNote')

  //   const addNote = (title) => {
  //     const newNote = {
  //       id: Date.now(),
  //       title,
  //       todos: note.todos,
  //     };
  //     addNewNote(newNote);
  //   };

  //   return { note, addNote };
  // },
  data() {
    return {
      title: "",
      todos: [],
    };
  },
  methods: {
    ...mapMutations(["addNewNote"]),
    addNote(title) {
      const newNote = {
        id: Date.now(),
        title,
        todos: this.todos,
      };
      this.addNewNote(newNote);
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
        if (+todo.id === +id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    changeTodo(id, title) {
      this.todos = this.todos.map((todo) => {
        if (+id === +todo.id) {
          todo.title = title;
        }
        return todo;
      });
    },
  },
};
</script>