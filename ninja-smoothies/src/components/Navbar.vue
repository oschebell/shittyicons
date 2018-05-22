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
  padding: 0 20px;
  background-color: #fff;
  box-shadow: none;
}

.index-container {
  width: 500px;
}
.card {
  box-shadow: none;
}

.card-content a {
  align-content: center;
}

a img {
  align-content: center;
}


</style>

