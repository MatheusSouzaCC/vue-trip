<template>
  <div v-if="!destroy" :class="[animation]">
    <div class="v-frame" :style="top"></div>
    <div class="v-frame" :style="right"></div>
    <div class="v-frame" :style="bottom"></div>
    <div class="v-frame" :style="left"></div>
  </div>
</template>

<style>
  @import '../assets/css/animate.css';

  .v-frame {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
  }
</style>

<script>
import { isNull, isEmpty } from 'lodash';

export default {
  name: 'VFrame',
  data() {
    return {
      top: {},
      right: {},
      bottom: {},
      left: {},
      visible: false,
      destroy: false,
    };
  },
  computed: {
    animation() {
      return (this.visible)
        ? 'animated fadeIn'
        : 'animated fadeOut';
    },
  },
  methods: {
    calcTop(target, rect, padding) {
      return {
        top: '0px',
        left: `${rect.left - padding}px`,
        height: `${rect.top - padding}px`,
        width: `${target.offsetWidth + (padding * 2)}px`,
      };
    },
    calcRight(target, rect, padding) {
      return {
        top: '0px',
        left: `${rect.left + target.offsetWidth + padding}px`,
        height: '100%',
        width: `calc(100% - ${rect.left + target.offsetWidth + padding}px)`,
      };
    },
    calcBottom(target, rect, padding) {
      return {
        top: `${rect.top + target.offsetHeight + padding}px`,
        left: `${rect.left - padding}px`,
        height: `calc(100% - ${rect.top + target.offsetHeight + padding}px)`,
        width: `${target.offsetWidth + (padding * 2)}px`,
      };
    },
    calcLeft(target, rect, padding) {
      return {
        top: '0px',
        left: '0px',
        height: '100%',
        width: `${rect.left - padding}px`,
      };
    },
    show(target, padding) {
      const rect = target.getBoundingClientRect();

      this.visible = true;
      this.destroy = false;
      this.top = this.calcTop(target, rect, padding);
      this.right = this.calcRight(target, rect, padding);
      this.bottom = this.calcBottom(target, rect, padding);
      this.left = this.calcLeft(target, rect, padding);
    },
    hide() {
      this.visible = false;

      setTimeout(() => {
        this.destroy = true;
      }, 500);
    },
  },
};
</script>
