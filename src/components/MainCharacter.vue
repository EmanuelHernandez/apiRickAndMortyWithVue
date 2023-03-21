<!-- eslint-disable vue/no-parsing-error -->
<template>
  <v-container class="px-5 py-1">
    <v-card
    class="mx-auto bg-blue-grey-darken-4 px-2"
    max-width="400"
  >
    <v-card-title class="font-weight-black text-white">{{ characterSelected.name }}</v-card-title>
    <v-img
      class="align-end"
      height="300"
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
      <v-container v-show="show" > 
        <v-list class="overflow-y-auto bg-blue-grey-darken-2 rounded-lg " height="100">
          <v-list-item v-for="item in episodios" :key="item.id">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-container>
    </v-expand-transition>
  </v-card>
</v-container>
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
.heightListChars{
  display: inline-block
}
</style>