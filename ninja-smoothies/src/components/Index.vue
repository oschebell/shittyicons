<template>
  <div class="index container">
    <div class="card" v-for="icon in icons" :key="icon.id">
      <div class="card-content">
          <a :href="icon.image" download="icon.image"><img :src="icon.image"  style="height:48px"  alt="" ></a>
          <p>{{ icon.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init' //import firebase database

export default {
  name: 'Index',
  data(){
    return{
      // smoothies: [],
      icons:[]
    }
  },
  methods: {
  //   deleteSmoothie(id){
  //     this.smoothies = this.smoothies.filter(smoothie => {
  //       return smoothie.id != id
  //     })
  //   }
  // }, 
   deleteicon(id){
      this.icons = this.icons.filter(icon => {
        return icon.id != id
      })
    }
  }, 
  created(){
    
    //fetch data from firestore
    // db.collection('Smoothies').get()
    // .then(snapshot => {
    //   snapshot.forEach(doc => {
    //     this.smoothies.push(doc.data())
    //   })
    // })
    // .catch(err => {
    //   console.log(err)
    // })
      db.collection('icons').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.icons.push(doc.data())
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}

.card p {
  text-align: center; 
}

img {
	margin-left: auto;
	margin-right: auto;
	display: block;
}
</style>
