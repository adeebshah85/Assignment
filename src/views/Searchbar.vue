<template>
<div>
    <div class ="searchbar">

        <div class ="search-icon-div">
            <img class = "searchicon" src="https://image.flaticon.com/icons/svg/1086/1086933.svg"/>
        </div>

        <div class ="search-query-div">
            <input class="search-input" type="text" placeholder="Search..">
        </div>
</div>
</div>
</template>
<style scoped>
.searchbar{
  background: #F5F5F5;
  position: absolute;
  top : 20px;
  left: 140px;
  width: 30%;
  height: 50px;
  border-radius: 15px;
}

.searchicon{
  float: left;
  height: 90%;
  width: 90%;;
}

.search-icon-div{
  width: 30px;
  float: left;
  position: relative;
  top: 13px;
  left: 13px;
}

.search-query-div{
  float: left;
}

.search-input{
  width:auto;
  height:30px;
  position: relative;
  left: 25px;
  top: 8px;
  background-color: #F5F5F5;
  border: 0px;
}
</style>