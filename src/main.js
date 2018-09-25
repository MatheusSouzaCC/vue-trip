import VTrip from './components/VTrip.vue';
import VCard from './components/VCard.vue';
import VFrame from './components/VFrame.vue';
import VButton from './components/VButton.vue';

const VueTrip = {
  install(Vue) {
    Vue.component(VTrip.name, VTrip);
    Vue.component(VCard.name, VCard);
    Vue.component(VFrame.name, VFrame);
    Vue.component(VButton.name, VButton);
  },
};

export default VueTrip;
