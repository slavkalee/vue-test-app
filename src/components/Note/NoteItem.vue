<template>
  <li class="note">
    <div class="note__title">
      <div class="title">{{ title }}</div>
      <div class="buttons">
        <button class="icon--btn">
          <i id="change" class="material-icons" @click="change(id)"
            >create</i
          >
        </button>
        <button class="icon--btn">
          <i id="remove" class="material-icons" @click="remove(id)"
            >delete_forever</i
          >
        </button>
      </div>
    </div>
    <ul class="note__todos">
      <NoteTodoItem
        v-for="t of limitedTodos"
        :key="t.id"
        :id="t.id"
        :title="t.title"
        :completed="t.completed"
      />
    </ul>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';
import NoteTodoItem from "./NoteTodoItem";

export default {
  data() {
    return {
      todosLimit: 3,
    };
  },
  components: {
    NoteTodoItem,
  },
  methods: {
    ...mapMutations(['removeNote']),
    remove(id) {
      this.removeNote(id)
    },
    change(id) {
      this.$router.push(`/note/${id}`);
    },
  },
  props: {
    id: Number,
    title: String,
    todos: Array,
  },
  computed: {
    limitedTodos() {
      return this.todos && this.todos.slice(0, this.todosLimit);
    },
  },
};
</script>

<style>
.note {
  border-bottom: 1px solid grey;
  padding: 20px 0;
}
.note__title {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 20px;
  margin-right: 20px;
}

.note__todos {
  margin: 20px 0px 0px 40px;
}
#change {
  color: rgb(34, 172, 34) !important;
}
#remove {
  color: #f44336 !important;
}
</style>