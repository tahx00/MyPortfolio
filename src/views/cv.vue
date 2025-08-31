<template>
<div class="cv">
<div class="contact-flare">
        Contact Me 
     </div>
     <div class="contac-text">
I’m currently pursuing a Master’s degree , and will be seeking full-time opportunities after graduation this year. I’m eager to contribute my front-end development skills, academic expertise, and passion for building secure, user-friendly solutions to a forward-thinking team.     </div>

 <div class="download-section">
  <div class="document-flare">
        My Documents 
     </div>
    <!-- اختيار اللغة -->
    <div class="dropdown" @click="toggle">
      <div class="dropdown-selected">
        <span :class="`fi fi-${selected.flag}`"></span> {{ selected.label }}
      </div>
      <ul v-if="open" class="dropdown-menu">
        <li v-for="lang in langs" :key="lang.value" @click.stop="select(lang)">
  <span :class="`fi fi-${lang.flag}`"></span> {{ lang.label }}
</li>
      </ul>
    </div>

    <!-- الأزرار -->
    <div class="buttons">
      <a :href="`/files/cv-${selected.value}.pdf`" download class="btn">
        {{ selected.texts.cv }}
      </a>
      
    </div>
  </div>


<div class="social-media-container">
    <a href="mailto:tahamalik0699@gmail.com">
<email size="2.5rem" color="var(--secend-color)"/></a>
  <a href="https://www.linkedin.com/in/taha-abdenebi-669706279/" target="_blank">
<linkedin size="2.3rem" color="var(--secend-color)"/></a>
  <a href="https://github.com/tahx00" target="_blank">
<git-hub size="2.5rem" color="var(--secend-color)"/></a>
  <a href="https://www.instagram.com/tahx__/" target="_blank">
<instagram size="2.5rem" color="var(--secend-color)"/></a>
</div>
<footer>
© 2025 Taha — Built from scratch with <a href="https://vuejs.org/" id="vuea">Vue.js</a>

</footer>
</div>
</template>
<script>
import linkedin from '../components/icons/linkedin.vue';
import instagram from '../components/icons/instagram.vue';
import email from '../components/icons/email.vue';
import GitHub from '../components/icons/git-hub.vue';
GitHub
export default {
    name: "cv",
    components:{
        linkedin,
        instagram,
        email,
        GitHub,
    },
  data() {
    return {
      open: false,
      selected: {
        value: "en",
        label: "English",
        flag: "gb",
        texts: {
          cv: "Download CV",
          motivation: "Download Motivation Letter"
        }
      },
      langs: [
        {
          value: "en",
          label: "English",
          flag: "gb",
          texts: { cv: "Download CV" }
        },
         {
          value: "de",
          label: "Deutsch",
          flag: "de",
          texts: { cv: "Lebenslauf Herunterladen"}
        },
        {
          value: "fr",
          label: "Français",
          flag: "fr",
          texts: { cv: "Télécharger le CV"}
        },
        {
          value: "it",
          label: "Italiano",
          flag: "it",
          texts: { cv: "Scarica il CV" }
        },
       
      ]
    };
  },
 methods: {
    toggle() {
      this.open = !this.open;
    },
    select(lang) {
      this.selected = lang;
      this.open = false;
    }
  }

};

</script>
<style>
.download-section {
  text-align: center;
  gap: 2rem;
  display: flex;
  flex-direction: column;
}

/* Dropdown */
.dropdown {
  position: relative;
  width: 250px;
  margin: 0 auto 20px auto;
  background: var(--gray);
  border-radius: 8px;
  color: var(--White);
  cursor: pointer;
  user-select: none;
  box-shadow: 0 .7px .7px var(--secend-color);
}
.dropdown-selected {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:var(--third-color) ;
  border-radius: 8px;
}

.flag {
  margin-right: 8px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--gray);
  width: 100%;
  border-radius: 5px;
  margin-top: 6px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  animation: fadeIn 0.2s ease;
  z-index: 10;
  padding-left: 0;
}

.dropdown-menu li {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  gap: 1rem;
}
.dropdown-menu li:hover {
  background: var(--secend-color); /* وردي متناسق معك */
}

/* Buttons */
.buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.btn {
  background-color: var(--secend-color);
  color: var(--White);
padding: 1.1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  font-weight: 500;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

#vuea{
    text-decoration: underline;
    margin-left: 4px;
      color: #47ba87;
      
}
footer{
background: linear-gradient(to bottom right, var(--main-color), var(--third-color));

    margin-top: auto;
    width: 100%;
    min-height: 4.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: var(--White);
    letter-spacing: .2px;
    word-spacing: .2px;
}
.social-media-container{
 width: 80%;
display: flex;
align-items: center;
justify-content: space-around;
margin-top: 1rem;
}
.cv{
  display: flex;
  flex-direction: column; /* 📌 الموبايل يبدأ بعمود */
  align-items: center;
  min-height: 100vh;
  width: 100%;
  gap: 3rem;
  background-color: var(--gray);
}

.contact-flare{
  width: 100%; 
  text-align: center; 

  font-size: 24px; 
  font-weight: bold;
  padding-bottom: .5rem;
  position: relative;
  overflow: hidden;
  color: var(--White);
  margin-top: 3rem;
}
.contac-text{
    width: 70%;
   color: var(--White);
    padding: 1rem;
    text-align: center;
}
.contact-flare::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 16%;
  height: 2px;
  background-color: var(--secend-color);
}
.document-flare{
  width: 100%; 
  text-align: center; 
  font-size: 19px; 
  font-weight: bold;
  padding-bottom: .5rem;
  position: relative;
  overflow: hidden;
  color: var(--White);
  margin-bottom: 3rem;
}
.document-text{
    width: 70%;
   color: var(--White);
    padding: 1rem;
    text-align: center;
}
/* الخط تحت العنوان */
.document-flare::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px; 
  background-color: var(--secend-color);
}
.cv-downolad:hover{
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
}
/* --------------DESKTOP------------------ */
@media(min-width:1024px){

  .download-section {
  text-align: center;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

}
.dropdown {
  width: 18rem;
}
.dropdown-selected {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flag {
  margin-right: 1rem;
}
.dropdown-menu li:hover {
  background: var(--secend-color); 
}
/* Buttons */
.buttons {
  gap: 2rem;
}
.btn {
padding: 1rem;
}
    #vuea{
    margin-left: 8px;
}
footer{
    font-size: 16px;
    color: var(--White);
    letter-spacing: .4px;
    word-spacing: .4px;
}
.social-media-container{
 width: 30%;
}
.contact-flare{
  width: 100%; /* 📌 خليه ياخذ عرض كامل */
  text-align: center; /* 📌 موبايل يكون في النص */
 /* 📌 قللت المسافة */
  font-size: 24px; /* 📌 أصغر خط للموبايل */
  font-weight: bold;
  padding-bottom: .5rem;
  position: relative;
  overflow: hidden;
  color: var(--White);
  margin-top: 3rem;
}
.contac-text{
    width: 40%;
    padding: 1rem;
}
 .contact-flare{
    font-size: 35px; 
    margin-top: 3rem;
  }
  .contact-flare::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: 3px; 
  background-color: var(--secend-color);
  }

}
</style>