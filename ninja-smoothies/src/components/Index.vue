<template>
<div>
<div class="feedback">
    <span class="feedback-title">Got feedback?</span>
    <img class="img-valign-2" src="../assets/boxing.png" alt=""/>
    <form method="POST" action="https://formspree.io/oschebell@gmail.com">
    <input name="email" placeholder="email" type="email">
    <textarea name="message" placeholder="message"></textarea>
    <button type="submit">Send</button>
    <input type="hidden" name="_next" value="https://site.io/thanks.html"/>
  </form>
</div>

<img class="hand" src="../assets/handpoint.png" alt="" />
  <span class="intro">
    <p class="cantfind">Can't find what you're looking for?</p>
    <p><a href="#">Drop me a line</a> and let me know what you need!</p>
  </span>

<div class="shout-box">
  <img class="img-valign" src="../assets/flame.png" alt="" />
    <span class="text1">latest</span>
  <img class="img-valign" src="../assets/flame.png" alt="" />
</div>

  <div class="index container">



    <div class="card" v-for="icon in icons" :key="icon.id">
      <div class="card-content">
          <a :href="icon.image" download="icon.image"><img :src="icon.image"  style="height:48px"  alt="" ></a>
          <p>{{ icon.title }}</p>
      </div>

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


#app {

  max-width: 700px;
  margin: auto;
}

 .feedback {
  text-align: center;
  margin: 0px;
}
.container {
  margin: -20px;
}
.img-valign {
  vertical-align: middle;
  margin-bottom: 0.75em;
  height: 2rem;
  width: 2rem;
}

.img-valign-2 {
  vertical-align: middle;
  margin-bottom: 0.75em;
  height: 1.5rem;
  width: 1.5rem;
}

input[type="email"] {
  border: 1px solid rgb(133, 133, 133) !important;
;
}

textarea {
  border: 1px solid rgb(133, 133, 133) !important;
}

input[type="email"]:active {
  border-bottom: 1px solid #000 !important;
}

.hand {
  position:fixed;
  top: 10%;
  left:0%;
  height: 6rem;
  width: 6rem;
  transition: 1.5s;
}

.hand:hover {
  position:fixed;
  top: 10%;
  left:-30px;
  height: 6rem;
  width: 6rem;
}

.feedback {
 max-width: 200px;
 padding: 3px;
 border: 1px solid #000;
 position:fixed;
 bottom: -135px;
 left: 3%;
}


button:focus {
  background-color: peachpuff;
}

.feedback:hover {
 max-width: 200px;
 padding: 3px;
 border: 1px solid #000;
 position:fixed;
 bottom: -1px;
 left: 3%;
}

.cantfind {
  font-size: 24px;
}

.text1 {
  font-size: 24px;
}

.shout {
  text-align: center;
  font-size: 1.5rem;
}

.shout-box {
  padding-top: 30px;
  padding-bottom: 20px;
}

.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
  grid-row-gap: 40px;
  grid-column-gap: 50px;
}

.card p {
  text-align: center;
}

img {
	margin-left: auto;
	margin-right: auto;

}




</style>
