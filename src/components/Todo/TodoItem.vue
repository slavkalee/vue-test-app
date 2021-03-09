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
        @keyup.enter="change(id, newTodoTitle)"
      />
    </div>
    <div class="buttons">
      <button class="icon--btn">
        <i id="change1" class="material-icons" @click="getEdit">create</i>
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
export default {
  data() {
    return {
      newTodoTitle: this.title,
      edited: false,
    };
  },
  methods: {
    getEdit() {
      this.edited = !this.edited;
    },
    change(id, title) {
      this.onEdit(id, title);
      this.edited = false;
    }
  },
  props: {
    title: String,
    id: Number,
    completed: Boolean,
    onEdit: Function,
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