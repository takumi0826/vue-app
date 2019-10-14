<template>
  <div>
    <v-toolbar>
      <v-toolbar-title><router-link to="/" class="decoration-none">Music</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link to="/search" class="decoration-none"><v-icon>mdi-magnify</v-icon></router-link>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped>
    .decoration-none {
        text-decoration: none;
        color: inherit;
    }
</style>