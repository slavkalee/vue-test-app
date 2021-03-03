<template>
  <div class="functions">
    <button class="icon--btn">
      <i id="save" class="material-icons">note_add</i>
    </button>
    <button class="icon--btn" @click="$router.push('/')">
      <i id="cancel" class="material-icons">cancel</i>
    </button>
    <button class="icon--btn">
      <i id="delete" class="material-icons">delete_forever</i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
#save {
  color: rgb(29, 177, 29);
}
#cancel {
  color: rgb(231, 209, 8);
}
#delete {
  color: red;
}
.functions {
  padding: 5px 0;
  border-bottom: 1px solid grey;
}
</style>