<template>
  <Form
    :value="note.title"
    :onSubmit="addNote"
    :todos="note.todos"
    :addTodo="addTodo"
    :changeTodo="changeTodo"
    :removeTodo="removeTodo"
    :toggleTodo="toggleTodo"
  />
</template>
 
<script>
import Form from "../components/Note/Form";
import {useNote} from '../composition/note'

export default {
  components: {
    Form,
  },
  setup() {
    return {
      ...useNote(null, [])
    };
  },
};
</script>