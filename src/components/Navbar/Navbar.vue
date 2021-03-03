<template>
  <nav>
    <NavLink path="/" title="List Of Notes" exact />
    <NavLink path="/note" title="Note" />
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
  position: relative;
}

nav::before {
  position: absolute;
  width: 200px;
  height: 100px;
  top: 0;
  left: 0;
  background: red;
}

a {
  text-decoration: none;
  color: rgb(124, 120, 120);
}
</style>