<template>
  <div class="addNote--block">
    <label>Note Title:</label>
    <input
      id="note-title"
      type="text"
      :value="noteTitle"
      @input="noteTitle = $event.target.value"
      placeholder="Enter title..."
      ref="input1"
    />
  </div>

  <div class="addTodo--block">
    <input
      type="text"
      placeholder="Enter title..."
      v-model.trim="todoTitle"
      @keyup.enter="add(todoTitle)"
      v-if="visible"
      ref="input2"
    />

    <button id="addTodo" @click="show" v-else>
      <i id="add" class="material-icons">add</i> Add New Todo
    </button>
  </div>

  <div class="functions">
    <button class="icon--btn" @click.prevent="onSubmit(noteTitle)">
      <i id="save" class="material-icons">note_add</i>
    </button>
    <button class="icon--btn" @click="$router.push('/')">
      <i id="cancel" class="material-icons">cancel</i>
    </button>
  </div>

  <ul class="to-do-list" v-if="todos.length">
    <TodoItem
      v-for="todo of todos"
      :key="todo.id"
      :title="todo.title"
      :id="todo.id"
      :completed="todo.completed"
      :onEdit="changeTodo"
      @remove="removeTodo"
      @toggle="toggleTodo"
    />
  </ul>
  <NoTodos v-else />
</template>

<script>
import TodoItem from "../Todo/TodoItem";
import NoTodos from "../Todo/NoTodos";
export default {
  components: {
    TodoItem,
    NoTodos,
  },
  data() {
    return {
      noteTitle: this.value,
      todoTitle: "",
      visible: false,
    };
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    add(title) {
      if (title) {
        this.addTodo(title);
        this.todoTitle = "";
        this.visible = false;
      }
    },
    show() {
      this.visible = true;
      this.$nextTick(() => this.$refs.input2.focus());
    },
    focusInput() {
      this.$refs.input1.focus();
    },
  },
  props: {
    value: String,
    onSubmit: Function,
    todos: Array,
    addTodo: Function,
    changeTodo: Function,
    removeTodo: Function,
    toggleTodo: Function,
  },
};
</script>

<style>
label {
  display: flex;
  justify-content: center;
}
.addNote--block input {
  font-family: "Righteous";
  width: calc(100% - 40%);
  border: none;
  padding: 10px 0;
  outline: 0;
  font-size: 15px;
  position: relative;
  padding-left: 40%;
}
.addNote--block {
  border-bottom: 1px solid grey;
  margin-top: 10px;
}
.addNote--block span {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  font-size: 15px;
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
.addTodo--block input {
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
.addTodo--block {
  padding: 7px 0;
  border-bottom: 1px solid grey;
}
.note-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.functions {
  padding: 5px 0;
  border-bottom: 1px solid grey;
}
#add {
  color: rgb(207, 173, 22);
  margin-right: 7px;
}
#save {
  color: rgb(29, 177, 29);
}
#cancel {
  color: rgb(231, 209, 8);
}
</style>