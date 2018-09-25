<template>
  <button
    class="v-button"
    :class="[shape, size]"
    :style="{background: color, color: (color) ? '#ffffff' : '#5E5E5E'}"
    :disabled="disabled" v-ripple="'rgba(0, 0, 0, 0.1)'">
    <slot></slot>
  </button>
</template>

<style>
  @import '../assets/css/v-button.css';
</style>

<script>
//  Directives
import Ripple from 'vue-ripple-directive';

export default {
  name: 'VButton',
  directives: {
    ripple: Ripple,
  },
  props: {
    color: {
      type: String,
      required: false,
      default: () => null,
    },
    shape: {
      type: String,
      required: false,
      default: () => null,
    },
    size: {
      type: String,
      required: false,
      default: () => null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
};
</script>
