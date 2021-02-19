<template>
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
      @keyup.enter="$emit('add', { title: newTodoTitle, visible: visible })"
      v-if="visible"
      ref="input2"
    />

    <button id="addTodo" @click="show" v-else>
      <i id="add" class="material-icons">add</i> Add New Todo
    </button>
  </div>
</template>

<script>
export default {
  emits: ["add"],
  data() {
    return {
      noteTitle: "",
      newTodoTitle: "",
      visible: false,
    };
  },
  methods: {
    show() {
      this.visible = true;
      console.log("click");
      this.$nextTick(() => this.$refs.input2.focus());
    },
    focusInput() {
      this.$refs.input1.focus();
    },
  },
  mounted() {
    this.focusInput();
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
  width: calc(100% - 20px);
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px;
  outline: 0;
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

.input--block input {
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
</style>