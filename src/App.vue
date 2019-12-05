<template>
  <v-app>
    <navbar></navbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <pied></pied>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Pied from './components/Pied';

export default {
  name: 'App',

  components: {
   'navbar': Navbar, 
   'pied': Pied,
  },

  data: () => ({
    //
  }),
};
</script>
