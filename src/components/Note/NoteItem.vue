<template>
  <li class="note">
    <div class="note__title">
      <div class="title">{{ title }}</div>
      <div class="buttons">
        <button class="icon--btn">
          <i id="change" class="material-icons" @click="change">create</i>
        </button>
        <button class="icon--btn">
          <i id="remove" class="material-icons" @click="remove"
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
import { computed, ref } from "vue";
import NoteTodoItem from "./NoteTodoItem";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    NoteTodoItem,
  },
  props: {
    id: Number,
    title: String,
    todos: Array,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const todosLimit = ref(3);

    const limitedTodos = computed(
      () => props.todos && props.todos.slice(0, todosLimit.value)
    );

    const remove = () => {
      const removeNote = () => store.commit("removeNote", props.id);
      removeNote();
    };

    const change = () => {
      router.push(`/note/${props.id}`);
    };

    return {
      limitedTodos,
      remove,
      change,
    };
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