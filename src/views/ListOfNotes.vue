<template>
  <ul>
    <NoteItem
      v-for="note of allNotes"
      :key="note.id"
      :id="note.id"
      :title="note.title"
      :todos="note.todos"
    />
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import NoteItem from "../components/Note/NoteItem";

export default {
  components: {
    NoteItem,
  },
  setup() {
    const store = useStore();

    return {
      allNotes: computed(() => store.state.notes),
    };
  },
};
</script>

