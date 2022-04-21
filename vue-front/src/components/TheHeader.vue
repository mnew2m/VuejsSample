<template>
  <header>
    <v-toolbar
      color="deep-purple"
    >
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer/>
      <span class="hidden-xs">
        <v-toolbar-items>
          <v-btn
            flat
            v-for="item in sideMenu"
            :key="item"
            :to="item.path"
          >
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </span>
    </v-toolbar>

    <v-tabs>
      <v-tab>Item One</v-tab>
      <v-tab>Item Two</v-tab>
      <v-tab>Item Three</v-tab>
    </v-tabs>

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
          icon: 'mdi-history',
          path: '/'
        },
        {
          title: 'About',
          icon: 'mdi-history',
          path: '/about'
        },
        {
          title: 'Account',
          icon: 'mdi-heart',
          path: '/account'
        }
      ]
    }),
  }
</script>