<template >
  <div class="skills" >
          <div class="skills-me">
        Skills
     </div>
 <div class="item-holder-skills">
  <!-- ___________________________________ -->

 <skill-item skillName="HTML5" skillDescription=" I structure web pages semantically, creating accessible and clean layouts that serve as the foundation for responsive designs.">
<template #icon>
  <Icon icon="logos:html-5" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="CSS3 (Flexbox & Grid)" skillDescription="I craft responsive and modern interfaces, translating design files into interactive layouts for desktop and mobile screens.">
<template #icon>
  <Icon icon="logos:css-3" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="JavaScript (ES6)" skillDescription="I add interactivity and dynamic behavior to web apps, including form validation, real-time calculations, and component state management">
<template #icon>
  <Icon icon="logos:javascript" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Node.js & WebSockets" skillDescription="I developed several projects using Node.js, including client-server apps and real-time communication tools.">
<template #icon>
  <Icon icon="logos:nodejs" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="UI/UX Implementation" skillDescription="I transform visual designs into functional interfaces, applying hover/focus states and intuitive user interactions.">
<template #icon>
  <Icon icon="logos:figma" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="JSON & Data Handling" skillDescription="I handle dynamic content and structured data to populate UI components and perform real-time updates">
<template #icon>
  <Icon icon="logos:json" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Java & Spring" skillDescription="I am familiar with Java fundamentals and built a project using Spring for backend development">
<template #icon>
  <Icon icon="logos:spring" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="C++" skillDescription="I have a solid understanding of fundamentals and object-oriented programming concepts.">
<template #icon>
  <Icon icon="simple-icons:cplusplus" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Linux" skillDescription="I am comfortable navigating Linux environments and performing common development tasks.">
<template #icon>
  <Icon icon="logos:linux-tux" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Git/GitHub" skillDescription="Project organization and version control">
<template #icon>
  <Icon icon="logos:github-icon" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Vue.js" skillDescription="Good at building reactive and component-based front-end applications.">
<template #icon>
  <Icon icon="logos:vue" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 <skill-item skillName="Flutter" skillDescription="Beginner, built a prototype mobile app to understand UI and navigation.">
<template #icon>
  <Icon icon="logos:flutter" width="52" height="52" />
</template>
 </skill-item>
   <!-- ___________________________________ -->
 </div>
           <div class="skills-me-soft">
       Soft Skills
     </div>
<div class="radical-rate-holder">
   
   <!-- ___________________________________ -->
    <div class="lholder"><RadialProgress 
   label="Teamwork" 
   :percentage="80"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
    <div class="lholder"><RadialProgress 
   label="Communication" 
   :percentage="92"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
    <div class="lholder"><RadialProgress 
   label="Problem-Solving" 
   :percentage="75"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
   <div class="lholder"> <RadialProgress 
   label="Adaptability" 
   :percentage="95"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
  <div class="lholder">  <RadialProgress 
   label="Leadership" 
   :percentage="79"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
  <div class="lholder">  <RadialProgress 
   label="Continuous Learning" 
   :percentage="100"
   color="var(--secend-color)" 
   bgColor="var(--secend-color)"
   /></div>
    <!-- ___________________________________ -->
</div>
 
  </div>
</template>

<script>
import RadialProgress from '../components/RadialProgress.vue';
import skillItem from '../components/icons/skill-item.vue';
export default {
  name: "Skills",
  components:{
    skillItem,
    RadialProgress,
  }
};
</script>
<style>
.skills{
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: var(--gray);
  gap: .5rem;
}
.radical-rate-holder{
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  gap: .5rem;
  margin-bottom:4rem ;

}
.lholder{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10.5rem;
  aspect-ratio: 1/1;
}
.item-holder-skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 3rem;
  padding: 2%;
  gap: 3rem;
  margin-bottom:4rem ;
}
.skills-me{
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
.skills-me::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8%;
  height: 2px; /* 📌 أنحف للموبايل */
  background-color: var(--secend-color);
}
.skills-me-soft{
  width: 100%; /* 📌 خليه ياخذ عرض كامل */
  text-align: center; /* 📌 موبايل يكون في النص */
  font-size: 20px; /* 📌 أصغر خط للموبايل */
  font-weight: bold;
  padding-bottom: .5rem;
  position: relative;
  overflow: hidden;
  color: var(--White);
  margin-top: 1rem;
}
.skills-me-soft::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10%;
  height: 2px; /* 📌 أنحف للموبايل */
  background-color: var(--secend-color);
}
/* ------DESKTOP------------ */
@media(min-width:1024px){
.item-holder-skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  margin: auto;
  margin-top: 3rem;
  padding: 2%;
  gap: 2rem;

}
.radical-rate-holder{
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 3rem;
  padding: 2%;
  gap: 5rem;
  margin-bottom:4rem ;
}
 .skills-me{
    font-size: 35px; 
    margin-top: 3rem;
  }
  .skills-me::after {

  width: 3%;
  height: 3px; 
  background-color: var(--secend-color);
  }
 .skills-me-soft{
    font-size: 30px; 
    margin-top: 3rem;
  }
  .skills-me-soft::after {
  width: 6%;
  height: 3px; 
  background-color: var(--secend-color);
  }

}
/* --------tablet--------- */
@media (min-width: 768px) and (max-width: 1023px) {
.item-holder--skills{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 3rem;
  padding: 2%;
  gap: 2rem;
}
}
</style>