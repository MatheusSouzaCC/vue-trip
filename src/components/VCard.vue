<template>
  <div class="vue-trip-card" :class="[theme]">
    <div class="label">
      <slot name="label"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/css/v-card.css';
</style>

<script>
import Popper from 'popper.js';

export default {
  name: 'VCard',
  props: {
    target: {
      type: String,
      required: true,
      default: () => null,
    },
    position: {
      type: String,
      required: false,
      default: () => 'bottom',
    },
    offset: {
      type: Number,
      required: false,
      default: () => 10,
    },
    theme: {
      type: String,
      required: false,
      default: () => 'light',
    },
  },
  computed: {
    params() {
      return {
        placement: this.position,
        modifiers: {
          flip: {
            behavior: ['left', 'right', 'top', 'bottom'],
          },
          offset: {
            enabled: true,
            offset: `0,${this.offset}`,
          },
        },
      };
    },
  },
  mounted() {
    this.create();
  },
  methods: {
    create() {
      this.targetEl = document.querySelector(`[data-v-stage="${this.target}"]`);

      if (this.targetEl) {
        this.targetEl.scrollIntoView({
          behavior: 'smooth',
        });

        new Popper(this.targetEl, this.$el, this.params);
      }
    },
  },
};
</script>
