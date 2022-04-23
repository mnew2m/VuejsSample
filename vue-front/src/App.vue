<template>
  <v-app>
    <v-system-bar app>
      <span style="color:white">ㅇㅇㅇ님 환영합니다.</span>
      <v-spacer></v-spacer>
      <v-btn>Notice</v-btn>
      <v-btn>Admin</v-btn>
      <v-btn>Logout</v-btn>
    </v-system-bar>
    <main-header/>

    <v-main app>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app>
      <main-footer/>
    </v-footer>
  </v-app>
</template>

<script>
import MainHeader from '@/components/TheHeader.vue'
import MainFooter from '@/components/TheFooter.vue'
  export default {
    components: {
      'main-header': MainHeader,
      'main-footer': MainFooter
    },
  }
</script>

<style scoped>
.v-system-bar {
  background-color: #424242;
}
.v-btn {
  color: white;
}
</style>