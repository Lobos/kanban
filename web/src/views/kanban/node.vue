<template>
  <div ref="node" class="node" :class="{ [position]: true }">
    <div class="box">
      <div class="info" :class="[{ 'has-children': hasChildren }]">
        {{ data.text }}
      </div>
      <template v-if="hasChildren">
        <v-icon class="toggle-button" size="15px" :name="isExpand ? 'remove-circle' : 'add-circle'" @click="toggle" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  inject: ['holdScroll'],
  props: {
    conf: Object,
    data: Object,
    hasChildren: Boolean,
    position: String,
  },

  computed: {
    ...mapState('kanban', ['expandKeys']),
    isExpand() {
      return this.expandKeys[this.data.id]
    },
  },

  methods: {
    toggle() {
      const { node } = this.$refs
      const rect = node.getBoundingClientRect()
      this.expandKeys[this.data.id] = !this.expandKeys[this.data.id]
      this.$nextTick(() => {
        this.holdScroll(node, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$border-color: #aaa;
$line-width: rem(60px);

.node {
  position: relative;
  max-width: rem(320px);
  display: flex;
  align-items: center;
  z-index: 10;
}

.box {
  position: sticky;
  padding: 4px $line-width;
  top: 0rem;
  bottom: 0rem;
}

.info {
  padding: 4px 8px;
  border-radius: 6px;
  background: #fff;
}

.has-children {
  &:after {
    content: ' ';
    position: absolute;
    width: $line-width;
    height: 1px;
    background: $border-color;
    top: 50%;
    right: 0;
  }
}

.single > .box,
.middle > .box,
.bottom > .box {
  &:before {
    content: ' ';
    position: absolute;
    width: $line-width;
    height: 1px;
    background: $border-color;
    top: 50%;
    left: 0;
  }
}

.middle {
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: solid 1px $border-color;
  }
}

.top {
  &:before {
    content: ' ';
    position: absolute;
    width: $line-width;
    left: 0;
    top: 50%;
    bottom: 0;
    border: solid 1px $border-color;
    border-width: 1px 0 0 1px;
  }
}

.bottom,
.bottom .box {
  &:after {
    content: ' ';
    position: absolute;
    width: $line-width;
    top: 0;
    left: 0;
    bottom: 50%;
    border-left: solid 1px $border-color;
  }
}

.toggle-button {
  position: absolute;
  top: 50%;
  margin-top: 1px;
  right: -1px;
  transform: translate(50%, -50%);
  background: #fff;
  border-radius: 50%;
}
</style>
