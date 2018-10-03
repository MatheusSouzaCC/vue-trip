# Vue Trip

> Vue Trip is a lightweight and customizable plug-in that allows an easy and efficient way to guide your users in your application.

## Getting Started

Install `vue-trip` using npm.

```
npm install vue-trip
```

Then import the plugin at the application start point (main.js if you have created your application via Vue-cli).

```javascript
import Vue from 'vue'
import App from './App.vue'
import VueTrip from 'vue-trip'

require('vue-trip/dist/vue-trip.css')

Vue.use(VueTrip)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

Add the `<v-trip />` component to your file by passing the type through a configuration object.

```html
<template>
  <div> 
    <v-trip ref="trip" :configs="configs" :stages="stages" />
  </div>
</template>
```

* `type`                - Defines the behavior of the guide. <String>
  * `popup-steps`       - Default behavior
  * `popup-frame-steps` - It maintains the default behavior, with the addition of a dark background that delimits the area of ​​the target object of the stage.
* `theme`               - The color used by the guide, you can use `light` for a light theme and `dark` for a dark theme. <String>
* `spacing`             - Adds a spacing between the component and the card. If you are using `popup-frame-steps` this spacing will be applied to the frame as well. <Integer>

```javascript
<script>
export default {
  name: 'Test-Vue-Trip',
  data() {
    return {
      configs: [
        {
          type: 'popup-steps',
          theme: 'light',
          spacing: 4,
        },
      ],
    }
  },
};
</script>
```

Now we will use the `data-v-stage` property on the objects that we want our guide to interact with.

```html
<template>
  <div>
    <input data-v-stage="example1" type="button" value="Button for example" />
    <input data-v-stage="example2" type="button" value="Other button for example" />
  
    <v-trip ref="trip" type="popup-steps" :stages="stages" />
  </div>
</template>
```
In the `data` property of your file we will create a variable `stages` and in it we will pass all the configurations of the stages that our guide will have.

* `target`    - Object referring to that stage of the guide. <String>
* `position`  - Where the card will be positioned relative to its target object. <String>
* `ignore`    - If `true` will skip this stage and continue the cycle. <Boolean>
* `title`     - Title to be displayed on the head of card. <String>
* `content`   - Content that will be shown in the body of the card (accepts html tags). <String>
* `buttons`   - Interaction buttons that will be shown on the card's bottom. <Collection>
  * `label`   - Label that will be shown without button. <String>
  * `color`   - Button fill color. <String>
  * `action`  - Interaction functions `next`, `previous`, `skip`, `finish`, `goTo::(Index of the stage you want to go. ex: 0 )` with the guide (accepts custom functions) <String/Function>

```javascript
<script>
export default {
  name: 'Test-Vue-Trip',
  data() {
    return {
      configs: [
        {
          type: 'popup-steps',
          theme: 'light',
        },
      ],
      stages: [
        {
          target: 'example1',
          title: 'Button Example',
          content: 'This is a button of example.',
          buttons: [
            { label: 'Next', color: '#3498db', action: 'next' },
            { label: 'Skip', color: null, action: 'skip' },
            { label: 'Go To', color: null, action: 'goTo::0' },
            { label: 'Custom function', color: null, action: () => {
                return alert('Custom function :D')
              }
            },
          ],
        },
      ],
    }
  },
};
</script>
```
Finally we will create the method that will execute the guide by calling the `go` function.

```javascript
export default {
  name: 'Test-Vue-Trip',
  data() {
    return {
      configs: [
        {
          type: 'popup-steps',
          theme: 'light',
        },
      ],
      stages: [
        {
          target: 'example1',
          title: 'Button Example',
          content: 'This is a button of example.',
          buttons: [
            { label: 'Next', color: '#3498db', action: 'next' },
            { label: 'Skip', color: null, action: 'skip' },
          ],
        },
        {
          target: 'example2',
          title: 'Another Button Example',
          content: 'This is another button of example.',
          buttons: [
            { label: 'Previous', color: '#3498db', action: 'previous' },
            { label: 'Finish', color: '#27ae60', action: 'finish' },
            { label: 'Skip', color: null, action: 'skip' },
          ],
        },
      ],
    }
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
```
