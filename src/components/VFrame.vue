<template>
  <div v-if="!destroy" class="v-frame" :class="[animation]"></div>
</template>

<style>
  @import '../assets/css/v-frame.css';
  @import '../assets/css/animate.css';
</style>

<script>
export default {
  name: 'VFrame',
  data() {
    return {
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
    show() {
      this.visible = true;
      this.destroy = false;
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
