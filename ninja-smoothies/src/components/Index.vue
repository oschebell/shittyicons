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

<img class="hand" src="../assets/handpoint.png" alt=""/>
<img class="ninja" src="../assets/ninja.png" alt="" />
<img class="free" src="../assets/free.png" alt="" />

<!-- <p>Find an excuse to let one of these bad boys off the chain and I personally guarantee you'll be the envy of all your co-workers.</p> -->
<!-- <span>Jazz up your Slack and be the envy of all your colleagues and coworkers!</span> -->
<span></span>
  <span class="intro">

    <p class="cantfind">Had something special in mind?</p>

    <p>Just <a class="twitter-share-button"
  href="https://twitter.com/intent/tweet?text=@oschebella+%23shittyicons+">shout out</a> and let me know what icon you're after and I'll probably make it for you!</p>
  <p>(Please be patient: I have poured several seconds into finely crafting every single icon by hand)</p>
  </span>

<div class="shout-box">
  <img class="img-valign" src="../assets/flame.png" alt="" />
    <span class="text1">latest</span>
  <img class="img-valign" src="../assets/flame.png" alt="" />
</div>

  <div class="index container">

<span class="boop">boop</span>

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

h1 {
  font-size: 32px;
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
  top: 14%;
  left:0%;
  height: 6rem;
  width: 6rem;
  transition: 1.2s;
  z-index: 90;
}

.boop {
  position:fixed;
  top: 19%;
  left:4%;
  z-index: -1;
  font-size: .6rem;
}

.ninja {
  transform: rotate(180deg);
  position:fixed;
  top:-9px;
  right:6%;
  width: 70px;
  height: 70px;
  z-index: 90;
}

.free {
  position:fixed;
  top:3%;
  right:11%;
  height: 55px;
  z-index: 100;
}

.hand:hover {
  position:fixed;
  top: 14%;
  left:-30px;
  height: 6rem;
  width: 6rem;
  z-index: 89;
}

.feedback {
 max-width: 200px;
 padding: 3px;
 border: 1px solid #000;
 position:fixed;
 bottom: -135px;
 left: 3%;
 transition: 0.5s;
 z-index: 100;
 background-color: #fff;
}

button:active {
  background-color: peachpuff;
}

.feedback:hover {
 max-width: 200px;
 padding: 3px;
 border: 1px solid #000;
 position:fixed;
 bottom: -1px;
 left: 3%;
 z-index: 100;
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

@media(max-width: 625px) {
  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 0px;
    padding: 0px;
}

.hand {
  display: none;
  }

.boop {
  display: none;
}

.free {
  display: none;
}

.feedback {
  bottom: -120px;
}

}

@media(max-width: 1000px) {
  .feedback {
    bottom: -127px;
  }
}

@media(max-width: 855px) {
  .hand {
    display:none;
  }
  .boop {
    display: none;
  }
}




</style>
