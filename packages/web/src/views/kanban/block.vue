<template>
  <div class="block">
    <Node :data="data" :conf="conf" :position="position" :has-children="hasChildren" />
    <div v-if="hasChildren && isExpand" class="list">
      <Block
        v-for="(d, i) in data.children"
        :key="d.id"
        :position="getPosition(i)"
        :data="d"
        :conf="conf"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Node from './node.vue'

const Block = {
  name: 'Block',
  components: {
    Node,
  },
  props: {
    conf: Object,
    data: Object,
    position: String,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('kanban', ['expandKeys']),
    hasChildren() {
      return this.data.children && this.data.children.length > 0
    },
    isExpand() {
      return this.expandKeys[this.data.id]
    },
  },
  methods: {
    getPosition(index) {
      const { length } = this.data.children
      if (length === 1) return 'single'
      if (index === 0) return 'top'
      if (index === length - 1) return 'bottom'
      return 'middle'
    },
  },
}

export default Block
</script>

<style lang="scss" scoped>
.block {
  display: flex;
}

.list {
  display: block;
  position: relative;
  z-index: 9;
}
</style>
