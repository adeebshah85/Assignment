<template>
    <div>
          <div class ="blog-container">
    <div class="blog">
        <div> <h1> Prototyping </h1>
              <p> A prototype is an early sample,
                model, or release of a
                product built to test a... </p>
        </div>

        <div class="blog-claps">
            <img class="clapper-img p1" src="https://i.pinimg.com/236x/bf/8f/09/bf8f0936f18208ba22c2015f5d5870f5.jpg">
            <img class="clapper-img p2" src="https://i.pinimg.com/236x/e1/e0/1a/e1e01a5afed2356d202aa9a28cd6b260.jpg">
            <img class="clapper-img p3" src="https://i.pinimg.com/236x/5e/6c/d4/5e6cd40eae487281b45ea9968130d276.jpg">
            <img class="clapper-img p4" src="https://i.pinimg.com/236x/3d/05/76/3d0576f36d5c321a47f36d6000351df4.jpg">
        </div>

        <div class="clap-number">
            <img class = "clap-icon" src="https://image.flaticon.com/icons/svg/2636/2636674.svg"/>
           <b> <p class="clapper-number">1.5K</p></b>
        </div>

    </div>
    </div>
    <!-- This is Second Div -->
      <div class ="blog-container b2">
    <div class="blog b2">
        <div> <h1> Typography </h1>
              <p> In essence, typography is the art of
                  arranging letters... </p>
        </div>

        <div class="blog-claps">
            <img class="clapper-img p1" src="https://i.pinimg.com/236x/7a/01/e2/7a01e208a2f7ee4f33c8d5f85b09ffaf.jpg">
            <img class="clapper-img p2" src="https://i.pinimg.com/236x/a1/0d/3b/a10d3b24dc4d42098134f04920976264.jpg">
            <img class="clapper-img p3" src="https://i.pinimg.com/236x/21/e3/b2/21e3b2adb000201f17a2d0727b879067.jpg">
            <img class="clapper-img p4" src="https://i.pinimg.com/236x/60/1b/74/601b748aba6173ebd52812d506072276.jpg">
        </div>

        <div class="clap-number">
            <img class = "clap-icon" src="https://image.flaticon.com/icons/svg/2636/2636674.svg"/>
           <b> <p class="clapper-number">1.5K</p></b>
        </div>

    </div>
    </div>
    <!-- This is Third Div -->
    <div class ="blog-container">
    <div class="blog">
        <div> <h1> Color Palatte </h1>
              <p> The best way to use a color is to
                  use it as a primary... </p>
        </div>

        <div class="blog-claps">
            <img class="clapper-img p1" src="https://i.pinimg.com/236x/91/f7/bc/91f7bc3b0e7f164c330aa195bd269ad2.jpg">
            <img class="clapper-img p2" src="https://i.pinimg.com/236x/c2/b3/16/c2b3164fabf5f29edd61f324b907848a.jpg">
            <img class="clapper-img p3" src="https://i.pinimg.com/236x/68/78/0f/68780fe887428bd82ecb3b35d751fb66.jpg">
            <img class="clapper-img p4" src="https://i.pinimg.com/236x/61/a2/ca/61a2ca1a597b86004018cfd321bf3e45.jpg">
        </div>

        <div class="clap-number">
            <img class = "clap-icon" src="https://image.flaticon.com/icons/svg/2636/2636674.svg"/>
           <b> <p class="clapper-number">1.5K</p></b>
        </div>

    </div>
    </div>
    </div>
</template>
<style scoped>

.blog-container{
  background: #F5F5F5;
  width: 70%;
  position: relative;
  left: 130px;
  top:-380px;
  bottom: 50px;
}


.blog {
  background: #F5F5F5;
  border-radius: 20px;
  padding: 20px;
  width: 230px;
  margin: 10px;
  float: left;
}
.blog:hover{
  transform: scale(1.05);
  transition-duration:1s;
}


.blog h1 {
  color: grey;
  font-size: 1.0em;
  margin-bottom: 6px;
}

.blog p {
  color: grey;
  font-size: 1.0em;
  margin-bottom: 10px;
  word-wrap: break-word;
}

.blog-claps{
  float: left;
  width: 65%;
  height: 50%;
}

.clap-number{
  float: right;
  width: 35%;
  height: 50%;
}

.clapper-img{
  border-radius: 50%;
  border: 3px solid #fff;
  width:  30px;
  height: 30px;
}

.clapper-claps{
  float: left;
  color: grey;
  font-size: 1.0em;
}


.p2{
  position: relative;
  right: 12px;
}

.p3{
  position: relative;
  right: 25px;
}
.p4{
  display: inline;
  position: relative;
  right: 35px;
}

.clap-icon{
  position: relative;
  top: 15px;
  float: left;
  width:  20px;
  height: 20px;
}

.clapper-number{
  position: relative;
  left: 10px;
}

</style>