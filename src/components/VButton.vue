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
  .v-button {
    border: none;
    outline: none;
    line-height: 1.5;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 6px 16px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: all 500ms ease-in-out;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    white-space: nowrap;
  }

  .v-button.square {
    border-radius: 0;
  }

  .v-button.pill {
    border-radius: 100px;
  }

  .v-button.rounded {
    border-radius: 4px;
  }

  .v-button.shadow {
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.2);
  }
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
