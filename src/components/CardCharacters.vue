<template>
  <v-container class="container px-1">
      <v-card-group class="card-group">
        <v-row>
          <v-col v-for="char in character"
            :key=char
            cols="6">

            <v-card 
            class="w-100 bg-blue-grey-darken-4"
            @click="characterSelected(char.id)">
            <v-img
              height="250px"
              cover
              :src="char.image">
            </v-img>
            <v-card-title>{{char.name}}</v-card-title>
            <v-card-subtitle class="font-weight-black font-size-mid">
              Status: {{char.status}}
            </v-card-subtitle>
            <v-card-subtitle class="font-weight-black font-size-mid">
              Species: {{char.species}}
            </v-card-subtitle>
          </v-card>
          </v-col>
        </v-row>
      </v-card-group>
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
  overflow-x: auto;
}
.card-group {
  display: inline-block;
}
</style>