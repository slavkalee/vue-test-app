<template>
  <router-link
    :to="this.path"
    :class="{ active: this.path === this.$route.path }"
    >{{ this.title }}</router-link
  >
</template>

<script>
export default {
  props: {
    path: String,
    title: String,
  },
};
</script>

<style>
a {
  letter-spacing: 0.5px;
}
a.active {
  color: rgb(49, 173, 49);
  text-shadow: 1px 1px 1px rgb(224, 222, 222);
}
</style>

