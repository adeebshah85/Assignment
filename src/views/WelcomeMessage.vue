<template>
    <div>
        <div class="hello-msg">

    <div class="welcome-div">
        <h1 class="profile-heading"> Hi John Doe </h1>
        <p class="welcome-message">Welcome back John Doe. We are glad you are here. Inspire the best work in people enabling them to achieve their goals.</p>
        <a class="profile-button" href ="#">View Details</a>
    </div>  



    <div class="hello-pic">
        <img class ="material-pic" src="https://propeller.in/website/wp-content/themes/propeller/assets/landing-page/images/developer.svg"/>
    </div>


</div>

    </div>
</template>
<style scoped>
.hello-msg{
  width: 50%;
  position: relative;
  left: 130px;
  top: 80px;
  background: #F5F5F5;
  border-radius: 20px;
  padding-left: 30px;
  padding-bottom: 30px;
  margin: 10px;
  float: left;
}
.welcome-div{
  width: 70%;
  float: left;
}

.profile-button{
  position: relative;
  bottom: -5px;
  text-decoration: none;
  background-color: black;
  color: white;
  padding : 10px;
  border-radius: 10px;
}
.profile-button:hover{
  background-color:grey;
  color: white;
  transition-duration:.5s;
  transform: scale(1.5);
}

.hello-pic{
  width: 30%;
  float: right;
}

.material-pic{
  position: relative;
  top: 30px;
  float: left;
  width: 90%;
}

a:hover, a:active {
  transition-duration:1s;
  transform: scale(1.3);
  box-shadow: 1px 1px 1px grey;
  background-color: black;
  color:#f4f3f3;
}


</style>