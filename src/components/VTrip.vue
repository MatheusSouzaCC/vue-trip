<template>
  <div>
    <v-card
      :key="index"
      :target="stage.target"
      :theme="configs.theme"
      :position="stage.position"
      :offset="configs.spacing + 5"
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
  @import '../assets/css/v-frame.css';
</style>

<script>
// COMPONENTS
import VCard from './VCard.vue';
import VButton from './VButton.vue';
import VFrame from '../assets/js/VFrame';

export default {
  name: 'VTrip',
  props: {
    configs: {
      type: Object,
      required: true,
      default: () => ({
        type: 'popup-steps',
        theme: 'light',
        spacing: 4,
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
    VButton,
  },
  data() {
    return {
      running: false,
      currentIndex: -1,
      frame: new VFrame(this.configs.spacing, 'fadeIn', 'fadeOut'),
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
      if (this.stages.length <= 0) {
        console.error('Your array of stages is empty.');

        return false;
      }

      if (this.running) {
        console.error('You already have an instance running.');

        return false;
      }

      this.running = true;

      this.frame.destroy();

      this.currentIndex = 0;

      if (this.type === 'popup-frame-steps') {
        this.frame.create(this.targets[this.currentIndex]);
      }

      return true;
    },
    next() {
      const nextStageIndex = this.currentIndex + 1;

      if (!this.stages[nextStageIndex]) {
        console.error('The stage you are trying to access does not exist in the stage array.');

        return false;
      }

      if (!this.targets[nextStageIndex]) {
        console.error(`Element target '${this.stages[nextStageIndex].target}' not exists.`);

        return false;
      }

      if (nextStageIndex >= this.stages.length) {
        this.finish();
      } else {
        this.currentIndex = nextStageIndex;
      }

      if (this.type === 'popup-frame-steps') {
        this.frame.recalculate(this.targets[this.currentIndex]);
      }

      return true;
    },
    previous() {
      const previousStageIndex = this.currentIndex - 1;

      if (previousStageIndex < 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = previousStageIndex;
      }

      if (this.type === 'popup-frame-steps') {
        this.frame.recalculate(this.targets[this.currentIndex]);
      }

      return true;
    },
    skip() {
      return this.finish();
    },
    finish() {
      this.running = false;

      this.currentIndex = -1;

      if (this.type === 'popup-frame-steps') {
        this.frame.destroy();
      }

      return true;
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
