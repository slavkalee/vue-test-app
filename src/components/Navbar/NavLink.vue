<template>
  <router-link
    :to="path"
    :class="{
      active: exact
        ? path === this.$route.path
        : this.$route.path.indexOf(path) > -1,
    }"
  >
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    title: String,
    exact: Boolean,
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

