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
  height: 600px;
  margin: 80px auto 0;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow-y: scroll;
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

.container::-webkit-scrollbar {
  width: 15px;
}

.container::-webkit-scrollbar-track {
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 10px transparent;
  border: solid 3px transparent;
}

.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 10px 10px #dedee0;
  border: solid 3px transparent;
  height: 564px;
}
</style>
