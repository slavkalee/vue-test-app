<template>
  <li class="note__todo" :class="{completed: completed}">{{ title }}</li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    completed: Boolean
  },
};
</script>


<style scoped>
  .note__todo {
    margin-bottom: 10px;
    color: rgb(29, 133, 29);
  }
  .note__todo.completed {
    text-decoration: line-through;
    text-decoration-color: red;
  }
</style>