<!-- eslint-disable vue/no-parsing-error -->
<template>
    <v-card
    class="mx-auto bg-blue-grey-darken-4"
    max-width="450"
  >
  <v-container class="h-screen">
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
    <v-card-actions>
      <p>Episodios</p>
      <v-btn
        :icon="show ? 'mdi-menu-up' : 'mdi-menu-down'"
        @click="show = !show"
      >
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
    <v-row v-show="show"> 

        <v-card class="mx-auto">
          <v-list
            :items="episodios"
            item-title="name"
            item-value="id"
          ></v-list>
        </v-card>
      </v-row>
      </v-expand-transition>
  </v-container>
  </v-card>
</template>

<script>

import {characters} from '../api/characters.js';

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
        show: false,
        episodios: [],
      }
    },
    computed:{
      arrayEpisode(){
        const regex = /\/(\d+)/;
        const episodes = this.characterSelected.episode.map( ep => {
         let match = ep.match(regex);
          return parseInt(match[1])
        })
        return episodes
      }
    },
    async mounted(){
      this.episodios = await characters.searchEpisode(this.arrayEpisode)
    }
}
</script>

<style>

</style>