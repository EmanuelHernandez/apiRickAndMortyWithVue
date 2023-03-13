<template>
  <v-container class="d-flex justify-center h-screen bg-blue-grey-darken-3 align-center">
        <MainView/>
  </v-container>
</template>

<script>
import MainView from './components/MainView.vue'

export default {
  name: 'App',
  components: {
    MainView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
  user-select: none;
}


</style>
