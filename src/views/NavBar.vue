<template>
  <div id="app">
    <div id="nav">
      <router-link to="/searchbar"> <img class="icon-img" src="../assets/icons/svg/001-home.svg" alt=""> </router-link> 
      <router-link to="/searchbar"><img class="icon-img" src="../assets/icons/svg/002-app.svg" alt=""></router-link>
      <router-link to="/searchbar"><img class="icon-img" src="../assets/icons/svg/003-calendar.svg" alt=""></router-link>
      <router-link to="/searchbar"><img class="icon-img" src="../assets/icons/svg/004-shop.svg" alt=""></router-link>
      <router-link to="/searchbar"><img class="icon-img" src="../assets/icons/svg/005-settings.svg" alt=""></router-link>
      <router-link to="/searchbar"><img class="icon-img set" src="../assets/icons/svg/006-back-arrow.svg" alt=""></router-link>
      
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: white;
}
#nav {
  display: flex;
  flex-direction: column;
  position: relative;
  right: 830px;
  top: 40px;
  background-color: #0e0d0d;
  width: 40px;
  height: 600px;
  margin: 20px 20px;
  border-radius: 23px;
}
.icon-img {
  width: 18px;
  height: 18px;
  margin: 20px 28px;
}
.icon-img.set {
  margin-top: 150px;
}
</style>
