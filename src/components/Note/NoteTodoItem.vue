<template>
  <li class="note__todo">{{ title }}</li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
  },
};
</script>


<style scoped>
  .note__todo {
    margin-bottom: 10px;
    color: rgb(29, 133, 29);
  }
</style>