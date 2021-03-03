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
import { mapGetters } from 'vuex';
import NoteItem from "../components/Note/NoteItem";

export default {
  components: {
    NoteItem,
  },
  computed: {
    ...mapGetters(["allNotes"]),
  }
};
</script>

