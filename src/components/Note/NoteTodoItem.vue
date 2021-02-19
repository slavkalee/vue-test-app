<template>
  <li class="note__todo">{{ title }}</li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
  .note__todo {
    margin-bottom: 10px;
    color: rgb(29, 133, 29);
  }
</style>