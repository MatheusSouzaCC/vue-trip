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
  .vue-trip-card {
    /* margin: 50px; */
    display: flex;
    padding: 24px;
    flex-wrap: wrap;
    max-width: 420px;
    overflow: hidden;
    position: absolute;
    border-radius: 6px;
    background: #FFFFFF;
    box-shadow: 0 0px 32px rgba(0, 0, 0, 0.1);
  }

  .vue-trip-card .label {
    width: 100%;
    display: flex;
    color: #5E5E5E;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .vue-trip-card .content {
    width: 100%;
    display: flex;
    font-size: 0.9rem;
    padding: 20px 0;
    color: #ABABAB;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

 .vue-trip-card .footer {
    width: 100%;
    display: flex;
    padding: 2px 0;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
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
