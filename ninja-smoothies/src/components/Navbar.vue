<template>
  <div class="navbar">
    <nav class="nav-extended">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">shitty icons</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {

    }
  }
}
</script>

<style>

.nav-title {
  color: #000;
}


.navbar nav{

  background-color: #fff;
  box-shadow: none;
}

/* #app {
  margin: auto;
  width: 50%;
  padding: 10px;
} */

.card {
  box-shadow: none;

}

</style>
