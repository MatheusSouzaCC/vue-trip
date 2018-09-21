<template>
  <div class="hello">

    <div style="position: absolute; width: 100%; display: flex; background: #c23;
    padding: 20px 16px; overflow: hidden;">

      <div style="position: relative; width: 100%">
        <input data-v-stage="1" type="button" value="teste1" />
      </div>

      <div style="position: relative; width: 100%;">
        <input data-v-stage="2" type="button" value="teste2" />
      </div>

    </div>

    <v-card target="2" :params="params">
      <span slot="label"> Sit ad qui excepteur </span>
      <span slot="content">
        Labore nulla eiusmod fugiat ex laborum exercitation sit sint sit ex officia nisi mollit.
      </span>
    </v-card>

  </div>
</template>

<script>
import VCard from './VCard.vue';

export default {
  name: 'Home',
  components: {
    VCard,
  },
  data() {
    return {
      params: {
        placement: 'top',
        modifiers: {
          arrow: {
            element: '.vue-trip-card__arrow',
          },
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
