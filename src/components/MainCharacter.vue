<!-- eslint-disable vue/no-parsing-error -->
<template>
    <v-card
    class="mx-auto bg-blue-grey-darken-4"
    max-width="450"
  >
  <v-container fluid>
    <v-card-title class="font-weight-black text-white">{{ characterSelected.name }}</v-card-title>
    <v-img
      class="align-end"
      height="400"
      :src="characterSelected.image"
      cover
    >
      <div
        class="font-weight-black text-white w-25"
        :class="characterSelected.status === 'Alive' ? 'bg-light-green-accent-4' : 'bg-red-accent-4'">
        {{characterSelected.status}}
      </div>
    </v-img>
    <!-- <v-card-actions>
      <v-btn
        :icon="show ? 'mdi-menu-up' : 'mdi-menu-down'"
        @click="show = !show"
      >
      </v-btn>
    </v-card-actions> -->
    <!-- <v-expand-transition>
      <div v-show="show"> -->
        <v-row class="mt-4">
          <v-col class="text-left">
            <div> Origin: {{characterSelected.origin.name}}</div>
            <div> Species: {{characterSelected.species}}</div>
          </v-col>
          <v-col class="text-left">
            <div> Gender: {{characterSelected.gender}}</div>
            <div> Location: {{characterSelected.location.name}}</div>
          </v-col>
        </v-row>
      <!-- </div>
    </v-expand-transition> -->
  </v-container>
  </v-card>
</template>

<script>
export default {
    name:'MainCharacter',

    props:{
      characterSelected: {
          type: Object,
          required: true
      }
    },
    data(){
      return{
        char: this.characterSelected,
        show: false
      }
    },
    create(){
    }
}
</script>

<style>

</style>