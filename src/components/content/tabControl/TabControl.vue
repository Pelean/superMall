<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="item"
      :class="{ active: index == currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: Array,
    default () {
      return []
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #fff;
}
.tab-control .item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 0 3px 6px 3px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>