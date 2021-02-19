<template>
  <li class="note">
    <div class="note__title">
      <div class="title">{{ title }}</div>
      <div class="buttons">
        <button class="icon--btn">
          <i id="change" class="material-icons">create</i>
        </button>
        <button class="icon--btn" @click="removeNote(id)">
          <i id="remove" class="material-icons">delete</i>
        </button>
      </div>
    </div>
    <ul class="note__todos">
      <NoteTodoItem
        v-for="t of todos"
        :key="t.id"
        :id="t.id"
        :title="t.title"
      />
    </ul>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
import NoteTodoItem from "./NoteTodoItem";

export default {
  components: {
    NoteTodoItem,
  },
  methods: {
    ...mapMutations(["removeNote"]),
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array,
      required: true,
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