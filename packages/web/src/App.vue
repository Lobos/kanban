<template>
  <div class="header">
    KANBAN
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref()
text.value = 'world1'
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  height: 3rem;
}
</style>
