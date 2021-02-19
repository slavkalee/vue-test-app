<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";

export default {
  components: { Navbar },
};
</script>

<style>
body {
  font-family: "Righteous";
  background: rgb(124, 122, 122);
}
.container {
  width: 500px;
  height: 650px;
  margin: 80px auto 0;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  position: relative;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.icon--btn {
  background: transparent;
  outline: 0;
  border: none;
  cursor: pointer;
}
</style>
