<template>
  <div class="vue-trip-card" :id="`v-stage-${uuid}`" ref="card">
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
import UUID from 'uuid/v1';

export default {
  name: 'VCard',
  props: {
    target: {
      type: String,
      required: true,
      default: () => 0,
    },
    params: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    uuid() {
      return UUID();
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
