<template>
    <div>
       <div class="top-section-container">

        <div class="notity-container">

         <a href="#"><img class="notify" src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106685.svg"/></a>
        </div>
        <div class="language-sel-container">
            <div class="dropdown">
                <button class="dropbtn"> EN
                <i class="fa fa-caret-down"></i>
                </button>
            <div class="dropdown-content">
            <a href="#">Engligh</a>
            <a href="#">Kashmiri</a>
            <a href="#">Urdu</a>
            </div>
            </div>
        </div>
        <div class="user-name-container">
            <h4 class="main-user-name">John Doe</h4>
            <p class="user-handle">@John Doe</p>
        </div>
        <div class="profile-pic-container">
             <img class="main-profile-pic" src="https://i.pinimg.com/236x/b9/44/07/b9440798bc0fccdc8dac3932b1537c05.jpg"/>
        </div>

    </div>

    </div>
</template>
<style scoped>

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 217x;
  border: none;
  outline: none;
  color: grey;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

a:hover .dropdown:hover .dropbtn {
  background-color: grey;
  border-radius: 50%;
  color:white;
  transform: scale(1.05);
  transition-duration:1s;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  transform: scale(1.05);
  transition-duration:1s;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.user-name-container{
  height: inherit;
  width: 90%;
}
.main-user-name{
  position: relative;
  top:-5px;
  color: grey;
}

.main-profile-pic{
  right: 20px;
  top:10px;
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.profile-pic-container{
  height: inherit;
  float: right;
}

.user-handle{
  position: absolute;
  right: 80px;
  top: 25px;
  font-size: 13px;
  font-weight: lighter;
}

.top-section-container{
  height: 80px;
  width: 320px;;
  position: absolute;
  top: 10px;
  right: 5px;
}

.notify-container{
  width: 20%;
  float: left;
  height: inherit;
}

.notify{
  float: left;
  width:  30px;
  height:inherit;
  position: relative;
  top:20px;
}
.notify:hover{
  background-color:#e0e2e4;
  transform: scale(1.2);
  transition-duration:1s;
  border-radius: 50%;
}

.language-sel-container{
  height: inherit
  width 20%;
  position: relative;
  top:11px;
}
</style>
