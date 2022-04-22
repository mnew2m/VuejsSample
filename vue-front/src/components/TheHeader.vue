<template>
  <header>
    <v-toolbar color="indigo darken-1">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <v-img max-width="100" src='@/assets/img/semes.png'/>
        <!-- SEMES -->
      </v-toolbar-title>
      <v-toolbar-items>
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
          ></v-radio>
          <v-radio
            label="Option 2"
            value="radio-2"
          ></v-radio>
        </v-radio-group>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="group">
          <v-list-item 
            v-for="item in sideMenu"
            :key="item"
            :to="item.path">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
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
          icon: 'mdi-chat-question',
          path: '/about'
        },
        {
          title: 'Layout',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'Transfer',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'Device',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'Function',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'History',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'Log',
          icon: 'mdi-account',
          path: '/account'
        },
        {
          title: 'System',
          icon: 'mdi-account',
          path: '/account'
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