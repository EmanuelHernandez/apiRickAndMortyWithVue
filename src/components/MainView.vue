<template>
  <v-row class="justify-space-evenly">
    <v-col class="align-center d-flex bg-blue-grey-darken-2 mx-4 rounded-lg" >
      <v-row>
        <v-col cols="12">
          <h1>¡Encuentra cualquier personaje!</h1>
        </v-col>
      <v-row>
        <v-col>
          <v-row class="justify-center"> 
          <v-col cols="9">
            <v-text-field
              @change="charactersToSeach=$event.target.value"
            >
            </v-text-field>
          </v-col>
          </v-row>
          <v-row class="justify-center mb-3"> 
          <v-col cols="2" class="d-flex align-start">
            <v-btn 
              variant="tonal"
              size="x-large"
              @click="searchCharacter"
            >
              Buscar!
            </v-btn>
          </v-col>
        </v-row>
        </v-col>
      </v-row>
      </v-row>
    </v-col>
    <v-col class="bg-blue-grey-darken-2 pt-3 mx-4 rounded-lg " v-if="loadingSpinner">
      <v-progress-circular
        color="blue-lighten-3"
        indeterminate
        :size="128"
        :width="12"
      ></v-progress-circular>
    </v-col>
    <v-col class="bg-blue-grey-darken-2 pt-3 mx-4 rounded-lg " v-if="characters.length > 0 && !this.loadingSpinner">
      <card-character
        class="heightListChars"
        :character="characters"
        @selected="selectCharacter($event)"
      />
      <v-pagination 
        class="mx-3 bg-blue-grey-darken-4" 
        :length="totalPages"
        @update:modelValue="otherPage($event)">
      </v-pagination>
    </v-col>
    <v-col class="bg-blue-grey-darken-2 pt-3 mx-4 rounded-lg" v-if="characterSelected != ''">
      <main-character
        class="heightListChars"
        :character-selected="characterSelected"
        :key="characterSelected"
      />
    </v-col>
  </v-row>
  <v-snackbar
      v-model="alertaNoti"
      color="red-accent-4"
      :timeout=2000
    >
    No se ha encontrado ningun personaje con ese nombre.
  </v-snackbar>
</template>

<script>
import {characters} from '../api/characters.js';
import CardCharacter from './CardCharacters.vue';
import MainCharacter from './MainCharacter.vue';


export default {
  name: 'MainView',
  components:{
    CardCharacter,
    MainCharacter,
    
  },
  props: {
  },
  data() {
    return{
      alertaNoti : false,
      characters:[],
      charactersToSeach: '',
      totalPages:0,
      characterSelected:'',
      loadingSpinner:false
    }
  },
  methods:{
    async searchCharacter(page){
      this.loadingSpinner = true
      this.characterSelected = ''
      const resp = await characters.search(this.charactersToSeach, 'name',page)
      this.characters = resp.results
      this.totalPages = resp.pages
      if (resp === false) {
        this.alertaNoti = true 
        this.characters = []
      }
      this.loadingSpinner = false
    },
    async selectCharacter(event){
      this.characterSelected = event
    },
    async otherPage(page){
      await this.searchCharacter(page)
    }
  },

  computed:{
    charactersNames(){
      return this.characters.map(char => char.name) 
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.font-size-mid{
  font-size: 2em !important;
}

.heightListChars{
  max-height: 85vh;
}
</style>
