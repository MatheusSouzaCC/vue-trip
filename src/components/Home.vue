<template>
  <div class="hello">

    <div style="position: absolute; width: 100%; display: flex; background: #2f2f2f;
    padding: 20px 16px;">

      <div style="display: flex; position: relative; width: 100%">
        <input data-v-stage="1" type="button" value="Inicia viagem!" @click="start" />
      </div>

      <div style="display: flex; position: relative; width: 100%; justify-content: flex-end">
        <input data-v-stage="2" type="input" placeholder="Pesquise por algo..."  />
        <input data-v-stage="3" type="button" value="Buscar"  />
      </div>

    </div>

    <div data-v-stage="4" style="position: absolute; width: 400px; height: 450px; background: #c23; top: calc(100% - 650px); left: calc(100% - 950px)"></div>

    <v-trip ref="myTrip" type="popup-frame-steps" :stages="stages" />

  </div>
</template>

<script>
import VTrip from './VTrip.vue';

export default {
  name: 'Home',
  components: {
    VTrip,
  },
  data() {
    return {
      stages: [
        {
          target: '1',
          title: 'Botão de inicialização',
          content: 'Clicando nesse botão você inicia nosso tutorial.',
          buttons: [
            { label: 'Proximo', color: '#3498db', action: 'next' },
            { label: 'Pular', color: null, action: 'skip' },
          ],
        },
        {
          target: '2',
          title: 'Barra de pesquisa',
          content: 'Aqui você pode digitar suas buscas e descobrir coisas incriveis :D',
          buttons: [
            { label: 'Anterior', color: '#3498db', action: 'previous' },
            { label: 'Proximo', color: '#3498db', action: 'next' },
            { label: 'Pular', color: null, action: 'skip' },
          ],
        },
        {
          target: '3',
          title: 'Botão de busca',
          content: 'Clicando nesse botão você muda de vida.',
          buttons: [
            { label: 'Anterior', color: '#3498db', action: 'previous' },
            { label: 'Proximo', color: '#3498db', action: 'next' },
            { label: 'Pular', color: null, action: 'skip' },
          ],
        },
        {
          target: '4',
          title: 'Isso é tudo pessoal!',
          content: 'Completamos nossa viagem, espero que tenha sido de grande ajuda :D.',
          buttons: [
            { label: 'Finalizar', color: '#27ae60', action: 'skip' },
          ],
        },
      ],
    };
  },
  methods: {
    start() {
      this.$refs.myTrip.go();
    },
  },
};
</script>
