<template>
  <div class="header">
    <div class="title">KANBAN</div>
  </div>
  <router-view />
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 3rem;
  background-color: $brand-primary-color;
  color: #fff;
}

.title {
  position: sticky;
  top: 0;
  line-height: 3rem;
  padding: 0 1rem;
}
</style>
