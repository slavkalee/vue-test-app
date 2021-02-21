<template>
  <div class="no--todos">
    No Todos! Add The First...
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .no--todos {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1s animate forwards;
  }
  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>