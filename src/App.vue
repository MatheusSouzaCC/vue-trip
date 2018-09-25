<template>
  <div id="app">
    <input data-v-stage="1" type="button" value="Iniciar tutorial" @click="start"/>

    <v-trip ref="myTrip" type="popup-frame-steps" :stages="stages" />
  </div>
</template>

<script>
// import Home from './components/Home.vue';

export default {
  name: 'app',
  data() {
    return {
      stages: [
        {
          target: '1',
          title: 'Botão de inicialização',
          content: 'Clicando nesse botão você inicia nosso tutorial.',
          buttons: [
            { label: 'Finalizar', color: '#3498db', action: 'finish' }
          ],
        },
      ],
    }
  },
  methods: {
    start() {
      this.$refs.myTrip.go();
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
    font-family: 'Montserrat', sans-serif;
  }
</style>