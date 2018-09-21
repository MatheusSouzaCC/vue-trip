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

<style scoped>
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
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .vue-trip-card .content {
    width: 100%;
    display: flex;
    font-size: 1rem;
    padding: 20px 0;
    color: #ABABAB;
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
    // stage: {
    //   type: Object,
    //   required: true,
    //   default: () => {}
    // },
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
  data() {
    return {
      popper: null,
    };
  },
  computed: {
    uuid() {
      return UUID();
    },
  },
  mounted() {
    this.create();

    // setTimeout(() => {
    //   this.popper.hide()
    // }, 8000)
  },
  methods: {
    create() {
      const targetEl = document.querySelector(`[data-v-stage="${this.target}"]`);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });

        this.popper = new Popper(targetEl, this.$el, this.params);
      }
    },
  },
};
</script>
