<template>
  <v-app>
    <header app>
      <main-header/>
    </header>

    <v-main app>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <footer app>
      <main-footer/>
    </footer>
  </v-app>
</template>

<script>
import MainHeader from './components/Header.vue'
import MainFooter from './components/Footer.vue'
  export default {
    components: {
      'main-header': MainHeader,
      'main-footer': MainFooter
    },
  }
</script>