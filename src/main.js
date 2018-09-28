import VTrip from './components/VTrip.vue';
import VCard from './components/VCard.vue';
import VButton from './components/VButton.vue';

const VueTrip = {
  install(Vue) {
    Vue.component(VTrip.name, VTrip);
    Vue.component(VCard.name, VCard);
    Vue.component(VButton.name, VButton);
  },
};

export default VueTrip;
