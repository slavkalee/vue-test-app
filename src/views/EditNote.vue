<template>
  <Form
    :value="note.title"
    :onSubmit="editCurrentNote"
    :todos="note.todos"
    :addTodo="addTodo"
    :changeTodo="changeTodo"
    :removeTodo="removeTodo"
    :toggleTodo="toggleTodo"
  />
</template>
 
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useNote } from "../composition/note";
import Form from "../components/Note/Form";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    const currentNote = computed(() =>
      store.getters.getNoteById(route.params.id)
    );

    return {
      ...useNote(currentNote.value.title, currentNote.value.todos),
    };
  },
  components: {
    Form,
  },
};
</script>