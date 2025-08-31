<template>
  <div class="home">
  <div class="hero-section">
  <div class="pic-part">
<img class="item-picc" src="@/assets/heroSection.jpg" alt="" >
  </div>
  <div class="text-part">
    <span class="main-text">TAHA <span class="last-name">ABDENEBI</span></span>
    <span class="secend-text"> Strive to be the best version of myself </span>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<!-- --------------------------------- -->
<style >
body{
  width: 100%;
  height: 100%;
 font-family: var(--font-base);
}
.item-picc{
  width: 100%;
  height: 100%;
  object-fit: cover; /* 📌 استخدم هذا */
  object-position: center;
  border-radius: 8px;
  display: block;
  border-radius: 50%;
}
.home{
    display: flex;
  justify-content: center;
  align-items: center;
height: 100%;
padding: 1rem;
}
.hero-section{
width: 80%;
padding: 1rem;
max-width: 39.75rem;
display: flex;
justify-content: center;
align-items: center;
gap: 5%;

}
.pic-part{
  background-color: rgb(141, 148, 160);
  width: 200px; 
  height: 200px; 
  min-width: 200px;
  min-height: 200px; 
  border-radius: 50%;
  flex-shrink: 0;
}

.text-part{
  flex: 1;
  min-width: 200px;   
 color: var(--White);
  display: flex;
   flex-direction: column;
   padding: 0.4rem;

}
.main-text{
font-size: 2.8rem;
font-weight: 700;
line-height: 1.2; 

}
.secend-text{
  margin-top: 0.5rem;
}
.last-name{
   color: var(--secend-color); 
}
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center; 
    width: 90%; 
  }
  
  .pic-part {
    width: 180px;
    height: 180px;
    min-width: 180px;
    min-height: 180px;
  }
  
  .main-text {
    font-size: 2.4rem; 
  }
}
</style>
