<template>
  <nav>
    <NavLink path="/" title="List Of Notes" />
    <NavLink path="/create" title="Create Note" />
  </nav>
</template>

<script>
import NavLink from "./NavLink";

export default {
  components: { NavLink },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-around;
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
}

a {
  text-decoration: none;
  color: rgb(124, 120, 120);
}
</style>