<template>
  <header>
    <v-app-bar color="indigo darken-1">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-app-bar-title>
        <v-img class="hidden-xs" max-width="100" src='@/assets/img/semes.png'/>
        <span class="hidden-sm-and-up" > SEMES </span>
      </v-app-bar-title>
      <v-tabs class="hidden-xs" background-color="indigo darken-1">
        <!-- <span class="hidden-xs"> -->
          <!-- <v-toolbar-items> -->
            <v-tab
              v-for="item in sideMenu"
              :key="item"
              :to="item.path"
            >
              <!-- <v-icon>{{ item.icon }}</v-icon> -->
              {{ item.title }}
            </v-tab>
          <!-- </v-toolbar-items> -->
        <!-- </span> -->
      </v-tabs>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-spacer/>
      <v-radio-group
        v-model="row"
        row
      >
        <v-radio
          label="Option 1"
          value="radio-1"
          row
        ></v-radio>
        <v-radio
          label="Option 2"
          value="radio-2"
        ></v-radio>
      </v-radio-group>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item 
          v-for="item in sideMenu"
          :key="item"
          :to="item.path">
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
  export default {
    name: 'main-header',
    data: () => ({
      appTitle: 'Title',
      drawer: false,
      group: true,
      sideMenu: [
        {
          title: 'Home',
          icon: 'mdi-home',
          path: '/'
        },
        {
          title: 'Favorite',
          icon: 'mdi-heart',
          path: '/favorite'
        },
        {
          title: 'Layout',
          icon: 'mdi-account',
          path: '/layout'
        },
        {
          title: 'Transfer',
          icon: 'mdi-account',
          path: '/transfer'
        },
        {
          title: 'Device',
          icon: 'mdi-account',
          path: '/device'
        },
        {
          title: 'Function',
          icon: 'mdi-account',
          path: '/function'
        },
        {
          title: 'History',
          icon: 'mdi-account',
          path: '/history'
        },
        {
          title: 'Log',
          icon: 'mdi-account',
          path: '/log'
        },
        {
          title: 'System',
          icon: 'mdi-account',
          path: '/system'
        },
      ],
      radioGroup: 1,
      radios: 'slide-x-transition-1',
      row: null
    }),
  }
</script>

<style scoped>
.v-icon {
  padding-right: 10px;
}
</style>