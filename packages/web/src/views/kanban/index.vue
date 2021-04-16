<template>
  <div class="kanban">
    kanban
    <div class="container">
      root
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.kanban {
  flex: 1;
  width: 100%;
  height: calc(100vh - 3rem);
  position: relative;
  overflow: auto;
}

.container {
  transform: translate(50%, 50%);
  height: 100vh;
}
</style>
