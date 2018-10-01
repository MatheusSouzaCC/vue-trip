<template>
  <div id="app">
    <input data-v-stage="example1" type="button" value="Button for example" @click="start" />
    <input data-v-stage="example2" type="button" id="test" value="Other button for example" />
    <input data-v-stage="example3" type="button" id="test2" value="Other button for example 3" />

    <v-trip ref="trip" :configs="configs" :stages="stages" />
  </div>
</template>

<script>

export default {
  name: 'Test-Vue-Trip',
  data() {
    return {
      configs: {
        type: 'popup-frame-steps',
        theme: 'light',
        spacing: 1,
      },
      stages: [
        {
          target: 'example1',
          position: 'bottom',
          title: 'Button Example',
          content: 'This is a button of example.',
          buttons: [
            { label: 'Next', color: '#3498db', action: 'next' },
            { label: 'Skip', color: null, action: 'skip' },
          ],
        },
        {
          target: 'example2',
          position: 'right',
          title: 'Another Button Example',
          content: 'This is another button of example.',
          buttons: [
            { label: 'Previous', color: '#3498db', action: 'previous' },
            { label: 'next', color: '#3498db', action: 'next' },
          ],
        },
        {
          target: 'example3',
          position: 'right',
          title: 'Another Button Example',
          content: 'This is another button of example.',
          buttons: [
            { label: 'Previous', color: '#3498db', action: 'previous' },
            { label: 'Go To Button Example', color: '#3498db', action: 'goTo::example1' },
            { label: 'Finish', color: '#27ae60', action: 'finish' },
          ],
        },
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      this.$refs.trip.go();
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    box-sizing: border-box !important;
  }

  html {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
  }

  #test {
    position: absolute;
    top: 50px;
  }

  #test2 {
    position: absolute;
    top: 150px;
  }
</style>
