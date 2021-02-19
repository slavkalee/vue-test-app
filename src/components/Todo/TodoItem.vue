<template>
  <li class="todo__item" :class="{completed: completed}">
    <div class="todo__title">
      <input
        type="checkbox"
        :checked="this.completed"
        @change="$emit('toggle', id)"
      />
      <span>{{ title }}</span>
    </div>
    <div class="buttons">
      <button class="icon--btn">
        <i id="change1" class="material-icons">create</i>
      </button>
      <button class="icon--btn" @click="$emit('remove', id)">
        <i id="remove" class="material-icons">delete</i>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      test: this.prop
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    prop: {
      type: String,
      required: true,
    }
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
#change1 {
  color: rgb(199, 199, 18);
}
#remove {
  color: red;
}
</style>