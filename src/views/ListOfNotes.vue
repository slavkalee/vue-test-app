<template>
  <ul>
    <NoteItem
      v-for="note of allNotes"
      :key="note.id"
      :id="note.id"
      :title="note.title"
      :todos="note.todos.slice(0, this.limit)"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import NoteItem from "../components/Note/NoteItem";

export default {
  data() {
    return {
      limit: 3
    }
  },
  components: {
    NoteItem,
  },
  computed: {
    ...mapGetters(["allNotes"])
  }
};
</script>

