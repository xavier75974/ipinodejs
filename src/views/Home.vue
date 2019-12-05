<template>
  <div class="home">
  home
  

  <v-btn @click="visible = !visible" class="mb-10" color="primary">
    Show/Hide
  </v-btn>

  <v-card v-show="visible" mx-10 width="40%" class="justify-center mx-auto" color="warning">
  <v-card-title>
    Bienvenue
  </v-card-title>
  <v-card-subtitle>
    Dans votre avenir !!!
  </v-card-subtitle>
  
  </v-card>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      visible: false,
      }
    }
  }

  components: {
    
  }

</script>
