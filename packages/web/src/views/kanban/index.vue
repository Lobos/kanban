<template>
  <div class="kanban">
    <div class="container">
      <Block :data="data" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Block from './block.vue'

export default {
  components: {
    Block,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('kanban', ['mapData', 'treeData']),
    data() {
      return {
        id: '',
        name: 'root',
        children: this.treeData,
      }
    },
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
  height: 100vh;
}
</style>
