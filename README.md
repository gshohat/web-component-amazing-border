# Web Component Amazing Border

![NPM License](https://img.shields.io/npm/l/web-component-amazing-border)

**Lightweight** draw border container **< 5k** 😎 <br>
Compatible with React, Vue, Angular & other frameworks.
Add your content with a slot element.
Customizable Border color.

![amazing-border](https://github.com/gshohat/web-component-amazing-border/assets/91323932/7c5dd9e0-fa71-4f82-840d-ae0342f6da70)


## Vue usage

`npm i web-component-amazing-border`

main.js
```
import AmazingBorder from "web-component-amazing-border";

customElements.define('amazing-border', AmazingBorder);
```

App.vue
```
onMounted(() => {
  let amazingContainerElement = document.querySelector('#amazing-container');
  amazingContainerElement.options = {
    borderColor: 'rgba(148,136,110,0.47)',
  }
});

<template>
<amazing-border id="amazing-container">
  <div slot="content">
    Lapsus Calami
  </div>
</amazing-border>
</template
```

vite config:
```
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes( 'amazing-border')
        }
      }
    })
  ],
```


## Contact
hi@giladshohat.com 💫
