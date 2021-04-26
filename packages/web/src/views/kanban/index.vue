<template>
  <div id="kanban" ref="kanban" class="kanban">
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

  provide() {
    return {
      holdScroll: (el, { y }) => {
        const kb = this.$refs.kanban
        const rect = el.getBoundingClientRect()
        // 暂时只管 y 轴
        if (rect.bottom < 0) {
          kb.scrollTop += rect.top - rect.height
        } else if (y > window.innerHeight) {
          kb.scrollTop += rect.top - window.innerHeight + rect.height
        } else {
          kb.scrollTop += rect.y + rect.height / 2 - y
        }
      },
    }
  },

  computed: {
    ...mapState('kanban', ['mapData', 'treeData']),
    data() {
      return {
        id: '',
        text: 'root',
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
  background: #f2f2f2;
}

.container {
  min-height: 100vh;
  min-width: 100vw;
  margin: 50vh 50vw;
}
</style>
