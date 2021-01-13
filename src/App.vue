<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
      <v-subheader>Vuex</v-subheader>
      <v-list-item-group
        color="primary"
      >
       <v-list-item router :to="{name:'Home'}" >
          <v-list-item-content>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{name:'Lcomputer'}" >
          <v-list-item-content>
            <v-list-item-title >Lcomputer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lcomputerstudy-Vuex</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>