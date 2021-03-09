<template>
  <li class="todo__item" :class="{ completed: completed }">
    <div class="todo__title">
      <input
        type="checkbox"
        :checked="this.completed"
        @input="$emit('toggle', id)"
      />
      <span v-if="!edited">{{ title }}</span>
      <input
        type="text"
        v-else
        v-model="newTodoTitle"
        @keyup.enter="changeTodo(id, newTodoTitle)"
      />
    </div>
    <div class="buttons">
      <button class="icon--btn">
        <i id="change1" class="material-icons" @click="toggleEdit">create</i>
      </button>
      <button class="icon--btn">
        <i id="remove" class="material-icons" @click="$emit('remove', id)"
          >delete</i
        >
      </button>
    </div>
  </li>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup(props) {
    const newTodoTitle = ref("");
    const edited = ref(false);

    onMounted(() => {
      newTodoTitle.value = props.title;
    });

    const toggleEdit = () => (edited.value = !edited.value);

    const changeTodo = (id, title) => {
      props.edit(id, title);
      edited.value = false;
    };

    return {
      newTodoTitle,
      edited,
      toggleEdit,
      changeTodo,
    };
  },
  props: {
    title: String,
    id: Number,
    completed: Boolean,
    edit: Function,
  },
};
</script>

<style>
.todo__item {
  background: rgb(236, 234, 234);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}
.todo__item.completed span {
  text-decoration: line-through;
}
.todo__title span {
  color: rgb(121, 119, 119);
  margin-left: 15px;
}
#change1 {
  color: rgb(199, 199, 18);
}
#remove {
  color: red;
}
</style>