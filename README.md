# vue-is-mobile
This is a little Vue library for detecting is user device mobile or tablet or desktop.

## Installation

#### npm
```bash
npm i vue-is-mobile
```

#### yarn
```bash
yarn add vue-is-mobile
```

## Usage

#### Installation
```vue
import VueIsMobile from "@iejobs/vue-is-mobile"

Vue.use(VueIsMobile)
```

#### Usage in component
```vue
<template>
  <div id="app">
    <div v-if="$isMobile">This is mobile device, but not tablet</div>
    <div v-if="$isMobileOrTablet">This is mobile or tablet device </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$isMobile)
    console.log(this.$isMobileOrTablet)
  }
};
</script>
```

## License

This project is licensed under the terms of the MIT license
