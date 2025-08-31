<template>
<div class="skill-item">
<div class="icon"   :style="{ animationDelay: delay + 's' }">
    <slot name="icon"></slot>
</div>
<div class="skill-name">{{skillName}}</div>
<div class="skill-info">{{ skillDescription }}</div>
</div>

</template>
<script>
export default{
    name:"skillItem",
    props:{
      skillName:{
        type:String,
        required:true,
        },
    skillDescription:{
        type:String,
        default: "",
       },
    },
        computed:{
         delay() {
      return (Math.random() * 6).toFixed(2);
    }
    }
}
</script>
<style>

.skill-item{
background-color: var(--third-color);
 height: auto;
  width: 80%;
border-radius: 8px;
padding: 1.3rem;
 display: flex;
 flex-direction: column;
 gap: 1.1em;
 padding-bottom: 2rem;
box-shadow: 0 1.5px 12px var(--secend-color);
}
.icon{

  width: 4rem;
aspect-ratio: 1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
  animation: pulse 4s infinite;
}
.skill-name{
  font-size: 26px;
  color: var(--secend-color);
  
}
.skill-info{
  margin-bottom: 1.4rem;
  margin-top: .5rem;
  padding: 1%;
  height: auto;
  font-size: 17px;
  color: var(--White);
}
@keyframes pulse {
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  40% { transform: scale(1.1); }
  50% { transform: scale(1.1); }
  60% { transform: scale(1.1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* _______________DESKTOP____________________- */
@media (min-width: 1024px) {
    .icon{
            transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
.skill-item{
width: 260px;
border-radius: 8px;
padding: 1.6rem;
}
.skill-name{
   font-size: 30px; 
   min-height: 82px;
}
.icon:hover{
      transform: scale(1.15);      /* تكبير بسيط */
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);  /* ظل أقوى */
}
.skill-info{
min-height: 120px;
}
}
@media (min-width: 768px) and (max-width: 1023px) {
  .skill-item {
    width: 40%; 
  
  }
}

</style>