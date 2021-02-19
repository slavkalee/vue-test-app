<template>
  <!-- <Form :title1="noteTitle" :title2="newTodoTitle" @add="addTodo" /> -->
  <label>Note Title:</label>
  <input
    id="note-title"
    type="text"
    v-model="noteTitle"
    placeholder="Enter title..."
    ref="input1"
  />

  <div class="addtodo--block">
    <input
      type="text"
      placeholder="Enter title..."
      v-model="newTodoTitle"
      @keyup.enter="addTodo"
      v-if="visible"
      ref="input2"
    />

    <button id="addTodo" @click="show" v-else>
      <i id="add" class="material-icons">add</i> Add New Todo
    </button>
  </div>
  <ul>
    <TodoItem
      v-for="todo of todos"
      :key="todo.id"
      :title="todo.title"
      :id="todo.id"
      :completed="todo.completed"
      @remove="removeTodo"
      @toggle="toggleTodo"
      :prop="noteTitle"
    />
  </ul>

  <div class="functions">
    <button class="icon--btn" @click.prevent="submit">
      <i id="save" class="material-icons">note_add</i>
    </button>
    <button class="icon--btn">
      <i id="cancel" class="material-icons">cancel</i>
    </button>
    <button class="icon--btn">
      <i id="delete" class="material-icons">delete_forever</i>
    </button>
  </div>
</template>
 
<script>
import { mapMutations } from "vuex";
import TodoItem from "../components/Todo/TodoItem";
// import Form from "../components/Note/Form";

export default {
  data() {
    return {
      noteTitle: "",
      newTodoTitle: "",
      todos: [],
      visible: false,
    };
  },
  components: {
    TodoItem,
    // Form,
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    ...mapMutations(["addNote"]),
    submit() {
      if (this.noteTitle.trim() !== "") {
        const newNote = {
          id: Date.now(),
          title: this.noteTitle,
          todos: this.todos,
        };

        this.addNote(newNote);
        this.$router.push("/");
      }
    },
    addTodo() {
      this.todos.unshift({
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false,
      });
      this.visible = false;
      this.newTodoTitle = "";
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
    show() {
      this.visible = true;

      this.$nextTick(() => this.$refs.input2.focus());
    },
    focusInput() {
      this.$refs.input1.focus();
    },
  },
};
</script>

<style>
form {
  margin-top: 10px;
}
label {
  display: flex;
  justify-content: center;
}
#note-title {
  font-family: "Righteous";
  width: 100%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 0;
  outline: 0;
  text-align: center;
}

.todo__item {
  background: rgb(236, 234, 234);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}
#change1 {
  color: rgb(199, 199, 18);
}
#remove {
  color: red;
}
#add {
  color: rgb(207, 173, 22);
  margin-right: 7px;
}
.todo__title span {
  color: rgb(121, 119, 119);
  margin-left: 15px;
}
#addTodo {
  font-family: "Righteous";
  width: 100%;
  border: none;
  padding: 5px 10px;
  background: rgb(236, 234, 234);
  border-radius: 5px;
  text-align: left;
  color: rgb(121, 119, 119);
  display: flex;
  align-items: center;
  outline: 0;
  cursor: pointer;
}

.addtodo--block input {
  font-family: "Righteous";
  width: calc(100% - 20px);
  height: 34px;
  border: none;
  background: rgb(236, 234, 234);
  border-radius: 5px;
  text-align: left;
  color: rgb(121, 119, 119);
  outline: 0;
  padding: 0 10px;
}
.addtodo--block {
  padding: 7px 0;
  border-bottom: 1px solid grey;
}
.functions {
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
}
#save {
  color: rgb(29, 177, 29);
}
#cancel {
  color: rgb(231, 209, 8);
}
#delete {
  color: red;
}
</style>