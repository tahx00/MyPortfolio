<template>
  <div class="app-container">

    <!-- الهيدر -->
    <div class="header-container">
      <div class="logo">
 <router-link to="/">
        <img id="logo-pic" src="../src/assets/logo.svg" alt="" class="logo-light">
        <img id="logo-pic" src="../src/assets/logo-light.png" alt="" class="logo-dark">
      </router-link>
      </div>

      <div class="nav-bar">
        <nav>
                <div class="switcher">
   <div class="color-switcher" @click="toggleColorMenu" :class="{'active': isColorMenuOpen}">
  <div class="color-circle"></div>
  <!-- القائمة -->
    <div v-if="isColorMenuOpen" class="color-menu">
      <div 
        v-for="c in colors" 
        :key="c" 
        class="color-option" 
        :style="{ background: c }" 
        @click.stop="setColor(c)">
      </div>
    </div>
</div>

        <div class="mode-switcher" @click="toogletheme">
          <svg  v-if="!islightMode" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
        </div>
      </div>
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Portfolio</router-link>
          <router-link to="/skills">Skills</router-link>
          <router-link to="/contact">About</router-link>
 <router-link class="cv-page" to="/cv">Contact Me</router-link>

        </nav>
      </div>
   <div class="hamburger-button" @click="toggeleMenu">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      </div>
    </div>
    <transition name="menu-slide">
   <div class="menu-mobile" :class="{'menu-active':isMobileMenuOpen}" v-show="isMobileMenuOpen">
   
 <nav>
          <router-link to="/"  @click.native="closeMenu">Home</router-link>
          <hr>
          <router-link to="/projects"  @click.native="closeMenu">Portfolio</router-link>
          <hr>
          <router-link to="/skills"  @click.native="closeMenu">Skills</router-link>
          <hr>
          <router-link to="/contact"  @click.native="closeMenu">About</router-link>
          <hr>
           <router-link to="/cv"  @click.native="closeMenu">Contact Me</router-link>
           <hr>
<div class="social-cards" >
  <a  href="https://www.linkedin.com/in/taha-abdenebi-669706279/" target="_blank">
    <linkedin size="1.9rem" color="var(--secend-color)" />
  </a>
  <a  href="https://github.com/tahx00" target="_blank">
    <git-hub size="2.1rem" color="var(--secend-color)" />
  </a>
    <a  href="mailto:tahamalik0699@gmail.com">
    <email size="2.1rem" color="var(--secend-color)" />
  </a>
  <a  href="https://www.instagram.com/tahx__/" target="_blank">
    <instagram size="2.1rem" color="var(--secend-color)" />
  </a>
</div>
           <hr>

        </nav>
   </div>
   </transition>
    <div 
  v-if="isMobileMenuOpen" 
  class="menu-overlay" 
  @click="closeMenu">
</div>
    <!-- المحتوى الرئيسي -->
    <div class="main-container">
<router-view>

</router-view>
    </div>

  </div>
</template>
<!-- ---------------------------------------------- -->
<script>
import linkedin from './components/icons/linkedin.vue';
import instagram from './components/icons/instagram.vue';
import gitHub from './components/icons/git-hub.vue';
import email from './components/icons/email.vue';
export default{
  name:"App",
  components :{
    linkedin ,
    instagram,
    gitHub,
    email,
  },
 data(){
    return{
     isMobileMenuOpen:false,
    isColorMenuOpen:false,
    islightMode: false,
    colors: ["#e04e69","#3498db","#2ecc71","#f39c12","#9b59b6"] // ألوان تجريبية
    }

  },
  mounted() {
  // نضمن وضع افتراضي
  const root = document.documentElement;
  if (!root.hasAttribute('data-theme')) {
    root.removeAttribute('data-theme'); // يخلي :root (الداكن) شغال
  }
  this.islightMode = root.getAttribute('data-theme') === 'light';
},
  methods:{
     toggeleMenu(){
    this.isMobileMenuOpen =!this.isMobileMenuOpen;
  },
  closeMenu(){
    this.isMobileMenuOpen =false;
  },
  toggleColorMenu(){
    this.isColorMenuOpen = !this.isColorMenuOpen;
  },
  setColor(c){
    document.documentElement.style.setProperty("--secend-color", c);
    document.documentElement.style.setProperty("--secend-color-hover", c);
    this.isColorMenuOpen = false;
  },
toogletheme(){
  this.islightMode = !this.islightMode;
  const root = document.documentElement;

  if (this.islightMode) {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme'); // يرجّع للقيم الافتراضية (:root)
  }
}


  }
}
</script>

<!-- ---------------------------------------------- -->

<style>
:root{
  --main-color:#1F1F1F;
  --secend-color:#e04e69;
  --secend-color-hover:#e1425f;
  --third-color:#2D2D2D;
  --White:#fbfbfb;
  --gray:#333333;

}

/* 1) الثيم الفاتح: لما <html data-theme="light"> */
html[data-theme="light"] {
  --main-color:#e5e3dc;
  --secend-color:#e04e69;
  --secend-color-hover:#e1425f;
  --third-color:#f6f0df;
  --White:#000;
  --gray:#fdf9ee;
}

#app {
  height: 100vh; 
}
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column; 
}

body,html {
font-family: 'Open Sans', system-ui, sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--main-color);
  color: var(--White);
}
.main-container {
flex: 1;
width: 100%;
 min-height: calc(100% - 5.25rem);
background-color: var(--main-color);
  margin-top:5.25rem;
}
.logo{
   margin-left: 5rem;  
  height: 3rem;
  width: auto;
display: flex;
justify-content: center;
align-items: center;
}
.logo img{
  height: 2rem;
  width: auto;; 

}
.header-container{
  width: 100%;
   height: 5.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0; 
   background-color: var(--main-color); 
     z-index: 1000; 
      position: fixed;
}
.nav-bar nav{
width: fit-content;
  height: 2.625rem;
display: flex;
 margin-right: 4rem; 
justify-content: center;
align-items: center;
gap: 1.25rem;
}
.nav-bar nav a{
  height: 2.625rem;
  width: 4rem;
  color: var(--White);
display: flex;
justify-content: center;
align-items: center;
position: relative;
text-decoration: none;
}
.nav-bar nav a.cv-page{
  background-color: var(--secend-color);
  color: var(--White);
  margin-left:1rem ;
  border-radius: 3px;
  padding: 0 0.4rem;
  width: fit-content;
}
.nav-bar nav a:not(.cv-page)::after{
  content: '';
position: absolute;
left: 0;
bottom: 0;
width: 0%;
height: 2px;
transition: width  0.3s  ease-in-out;
background-color:var(--secend-color) ;
}

.nav-bar nav a:hover::after{
  width: 99%;
} 

.nav-bar nav a.cv-page:hover{
 background-color: var(--secend-color-hover);
}
/* الوضع الافتراضي (داكن) */
.logo-light {
  display: none;
}
.logo-dark {
  display: block;
}

/* لما يتفعّل الثيم الفاتح */
html[data-theme="light"] .logo-dark {
  display: none;
}
html[data-theme="light"] .logo-light {
  display: block;
}
.switcher{

  display: flex;
  align-items: center;
  justify-content: center; 
  height: auto;
  gap: 1rem;

}
.color-switcher {
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .56rem;
  aspect-ratio: 1/1;
  border-radius: 12px;
  cursor: pointer;
    border: 2px solid transparent; 
  transition: border-color .3s ease
}
.color-switcher.active {
    animation: border-pop .3s ease;
  border: 2px solid var(--secend-color); 
}
.color-circle {
  width: 18px;
  height: 18px;
  background: var(--secend-color);
  border-radius: 50%;
}
/* القائمة */
.color-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top:.3rem ;
  transform: translateX(-50%);
  background: var(--third-color);
  padding: .5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0,0,0,.25);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  z-index: 100;
}
.color-option {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform .2s ease;
}
.color-option:hover {
  transform: scale(1.2);
}
.color{
  background-color: var(--secend-color);
  border-radius: 50%;
}
.mode-switcher{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  border-radius: 8px;
}

@font-face {
  font-family: 'Open Sans';
  src: url('@/assets/fonts/OpenSans-VariableFont_wdth_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url('@/assets/fonts/OpenSans-Italic-VariableFont_wdth_wght.ttf') format('truetype');
  font-weight: 100 900;
  font-style: italic;
}

/*---------------- mobile styles-------------------- */
.social-cards{
  display: flex;
  justify-content: center;
 align-items: center;
background-color: var(--third-color);
width: 100%;
gap: 1.5rem;
padding: .5rem 0;
}
.social-cards a{
  width: auto;
  height: auto;
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0; 
  border: none;
  outline: none;
}
.social-cards a > *,
.social-cards a svg {
  display: block;
  margin: 0 !important;
  padding: 0 !important;
  border: none;
}
.menu-mobile{
  margin-top: 4.625rem;
 width: 100%;
position: fixed;
top: 0;
left: 0;
opacity: 0.97;
z-index: 999;
}
/* animation  */
.menu-slide-enter-from,.menu-slide-leave-to{
  opacity: 0;
  transform:translateY(-100%) ;
}
.menu-slide-enter-to,.menu-slide-leave-from{
  opacity: 1;
  transform:translateY(0) ;
}
.menu-slide-enter-active,.menu-slide-leave-active{
transition: all 0.4s ease-in-out;
}
.menu-mobile nav{
  width: 100%;
display: flex;
align-items: stretch;
text-align: center;
flex-direction: column;
}
.menu-mobile nav a{
text-decoration: none;
color: var(--White);
background-color:var(--third-color);
padding:  1rem 0;
}
.menu-mobile nav hr {
  width: 100%; 
  border: none;
  border-top: 1px solid rgb(84, 82, 82);
  margin: 0;
}
.hamburger-button{
height:4.625rem;
width: 2.75rem;
   margin-right: 1rem; 
color:var(--secend-color);
cursor: pointer;
display: none;
}

/* -------------------------------------------------- */

   @media (max-width: 1024px) { 
    .main-container {
  margin-top:4.625rem;
}
 .header-container{
  width: 100%;
height: 4.625rem;
  background-color: var(--main-color) ;
  display: flex;
  justify-content: space-between;
  align-items: center;  
     z-index: 1000; 
      position: fixed;
}
.logo{
   margin-left: 0.22rem; 
}
.logo img{
   width: 5rem;
   height: 3.05rem;
   margin-left: .3rem;
   object-fit: contain; /* يحافظ على الشكل */
   margin-left: .3rem;
}

.nav-bar nav{
    display: flex;
    align-items: center;
    gap: 1rem;
}
  .nav-bar nav .switcher {
    display: flex;
  }
  .nav-bar nav a {
    display: none;
  }
  .hamburger-button{
display:flex;
justify-content: center;
align-content: center;
}
.switcher {
    position: absolute;
    right: 5rem; /* يخليه قبل زر الهامبرغر */
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: .5rem;
  }
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent; 
  z-index:10 ;
}
}     
</style>
