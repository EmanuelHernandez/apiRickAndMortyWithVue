<template>
  <v-container class="container px-1 d-flex">
      <v-col cols="12">
        <v-row class="justify-center">
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
      pages:{
        type: Number
      }
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
.font-size-mid{
  font-size: 15px !important;
}
.container {
  overflow-y: auto;
  overflow-x: none !important;
}
.card-group {
  display: inline-block;
}
</style>