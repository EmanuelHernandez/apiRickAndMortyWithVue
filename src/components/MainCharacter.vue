<!-- eslint-disable vue/no-parsing-error -->
<template>
    <v-card
    class="mx-auto bg-blue-grey-darken-4"
    max-width="400"
  >
  <v-container fluid>
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
    <v-card-title>{{ characterSelected.name }}</v-card-title>


    <v-card-actions>
      <v-btn
        :icon="show ? 'mdi-menu-up' : 'mdi-menu-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          <div>{{characterSelected.species}}</div>
          <div>{{characterSelected.type}}</div>
          <div>{{characterSelected.gender}}</div>
          <div>{{characterSelected.location.name}}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
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