<template>
  <div id="app">
    <div id="header">
      <main-header/>
    </div>
    <div class="wrap">
      <div id="menu">
        <main-menu/>
      </div>
      <router-view/>
    </div>
    <div id="footer">
      <main-footer/>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/Header.vue'
import MainFooter from './components/Footer.vue'
import MainMenu from "@/components/Menu.vue"

export default {
  name: 'App',
  components: {
    'main-header': MainHeader,
    'main-menu': MainMenu,
    'main-footer': MainFooter
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  height: 60%;
}
</style>