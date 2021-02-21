<template>
  <!-- <form> -->
  <div class="addNote--block">
    <label>Note Title:</label>
    <input
      id="note-title"
      type="text"
      v-model="noteTitle"
      placeholder="Enter title..."
      ref="input1"
      v-if="noteInputVisible"
      @keyup.enter="addNoteTitle"
    />
    <div class="note-title" v-else>
      <span>{{ noteTitle }}</span>
      <button @click="changeNoteTitle" class="icon--btn">
        <i id="change" class="material-icons">create</i>
      </button>
    </div>
  </div>

  <div class="addTodo--block">
    <input
      type="text"
      placeholder="Enter title..."
      v-model="newTodoTitle"
      @keyup.enter="add"
      v-if="todoInputVisible"
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
    <button class="icon--btn">
      <i id="cancel" class="material-icons">cancel</i>
    </button>
    <button class="icon--btn">
      <i id="delete" class="material-icons">delete_forever</i>
    </button>
  </div>
  <!-- </form> -->
</template>

<script>
export default {
  data() {
    return {
      noteTitle: "",
      newTodoTitle: "",
      noteInputVisible: true,
      todoInputVisible: false,
    };
  },
  methods: {
    show() {
      this.todoInputVisible = true;
      this.$nextTick(() => this.$refs.input2.focus());
    },
    focusInput() {
      this.$refs.input1.focus();
    },
    add() {
      this.onAdd(this.newTodoTitle);
      this.newTodoTitle = "";
      this.todoInputVisible = false;
    },
    addNoteTitle() {
      if (this.noteTitle) {
        this.noteInputVisible = false;
      }
    },
    changeNoteTitle() {
      this.noteInputVisible = true;

      this.$nextTick(() => this.$refs.input1.focus());
    },
  },
  mounted() {
    this.focusInput();
  },
  props: {
    onAdd: Function,
    onSubmit: Function,
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
#delete {
  color: red;
}
</style>