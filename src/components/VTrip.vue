<template>
  <div>
    <v-frame ref="VFrame" v-if="type === 'popup-frame-steps'" />

    <v-card
      :key="index"
      :target="stage.target"
      :theme="configs.theme"
      :position="stage.position"
      v-for="(stage, index) in stages"
      v-if="currentIndex === Number(index)"
      class="animated fadeIn">

      <span slot="label">
        {{ stage.title }}
      </span>

      <div slot="content" v-html="stage.content"></div>

      <div slot="footer">
        <v-button
          shape="rounded"
          :key="index"
          :color="button.color"
          style="margin: 2px"
          v-for="(button, index) in stage.buttons"
          @click.native="returnAction(button.action)">
            {{ button.label }}
          </v-button>
      </div>
    </v-card>

  </div>
</template>

<style>
  @import '../assets/css/animate.css';
</style>

<script>
import VCard from './VCard.vue';
import VFrame from './VFrame.vue';
import VButton from './VButton.vue';

export default {
  name: 'VTrip',
  props: {
    configs: {
      type: Object,
      required: true,
      default: () => ({
        type: 'popup-steps',
        theme: 'light',
      }),
    },
    stages: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  components: {
    VCard,
    VFrame,
    VButton,
  },
  data() {
    return {
      currentIndex: -1,
    };
  },
  computed: {
    type() {
      return this.configs.type;
    },
    targets() {
      return this.stages.map(stage => document.querySelector(`[data-v-stage="${stage.target}"]`));
    },
  },
  methods: {
    go() {
      this.currentIndex = 0;

      if (this.type === 'popup-frame-steps') {
        this.$refs.VFrame.show();
        this.targets[this.currentIndex].style['z-index'] = 9999;
      }
    },
    next() {
      const nextStageIndex = this.currentIndex + 1;

      this.targets[this.currentIndex].style['z-index'] = 'inherit';

      if (nextStageIndex >= this.stages.length) {
        this.finish();
      } else {
        this.currentIndex = nextStageIndex;
      }

      if (this.type === 'popup-frame-steps') {
        this.targets[this.currentIndex].style['z-index'] = 9999;
      }
    },
    previous() {
      const previousStageIndex = this.currentIndex - 1;

      this.targets[this.currentIndex].style['z-index'] = 'inherit';

      if (previousStageIndex < 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = previousStageIndex;
      }

      if (this.type === 'popup-frame-steps') {
        this.targets[this.currentIndex].style['z-index'] = 9999;
      }
    },
    skip() {
      this.finish();
    },
    finish() {
      this.currentIndex = -1;

      this.targets.forEach((target) => {
        target.style['z-index'] = 'inherit';
      });

      if (this.type === 'popup-frame-steps') {
        this.$refs.VFrame.hide();
      }
    },
    returnAction(action) {
      switch (action) {
        case 'next':
          return this.next();
        case 'previous':
          return this.previous();
        case 'skip':
          return this.skip();
        case 'finish':
          return this.finish();
        default:
          return action();
      }
    },
  },
};
</script>
