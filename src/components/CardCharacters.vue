<template>
  <v-container class="d-flex px-2">
      <v-col cols="12" class=" container scroll-card ">
        <v-row class="justify-center bg-blue-grey-darken-4">
          <v-col v-for="char in character"
            :key=char
            cols="5">
            <v-card 
            class="bg-blue-grey-darken-4"
            @click="characterSelected(char.id)">
            <v-img
              cover
              :src="char.image">
            </v-img>
          </v-card>
          </v-col>
        </v-row>
      </v-col>
  </v-container>
</template>

<script>
export default {
    name:'CardCharacter',
    props:{
      character:{
        type: Object
      },
    },
    methods:{
      characterSelected(event){
        let characterSelected = this.character.find(char => char.id === event)
        this.$emit('selected',characterSelected)
      }
    }
}
</script>

<style scoped>

.container {
  overflow-y: auto;
  overflow-x: hidden !important;
}

/* Estilos para ocultar el scrollbar */
.scroll-card::-webkit-scrollbar {
  margin: .5em;
  width: 0.5em;
}

.scroll-card::-webkit-scrollbar-track {
  background-color: transparent;
}

.scroll-card::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
}

.scroll-card::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>