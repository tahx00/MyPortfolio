<template>
  <div class="portfolio-item">
    <div class="portfolio-item-picture">
      <slot></slot>
    </div>
   <div class="item-titel">
      {{ titel }}
   </div>
  <div class="item-discription">
      {{ isExpanded ? description : truncatedText }}
    </div>
 <button 
      v-if="showReadMore" 
      class="read-more" 
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? "Read less" : "Read more" }}
    </button>
  <div class="tecnoused">
    <slot name="tech"></slot>
    </div>
    
        <a
      :href="githublink"
      class="git-hub-button"
      :class="{ active: isActive }"
      target="_blank"
      rel="noopener"
      @pointerdown.prevent="flashActive"
    >
      <git-hub size="2.2rem" color="var(--secend-color)" />
      <span>View Code</span>
    </a>

  </div>
</template>
<script>
import gitHub from './icons/git-hub.vue';
export default{
    name:"portfiloItem",
    props:{
        titel:{ type:String ,required:true},
        description:{ type:String ,required:true},
        githublink:{ type:String ,required:true},
        type:{ type:String ,required:true},

    },
    components:{
      gitHub,
    },
      data() {
    return {
      isActive: false,
      isExpanded: false,
      maxLength: 50,
    };
  },
   computed: {
    truncatedText() {
      return this.description.length > this.maxLength
        ? this.description.slice(0, this.maxLength) + "..."
        : this.description;
    },
    showReadMore() {
      return this.description.length > this.maxLength;
    },
  },
  methods: {
         flashActive(){
          this.isActive = true;
          setTimeout(() => {
                 this.isActive = false;
          }, 500);
         }
  }
}
</script>
<style scoped>
:root{
  --main-color:#1F1F1F;
  --secend-color:#e04e69;
  --third-color:#2D2D2D;
  --White:#ffff;
  --black:#0000;
  --gray:#333333;
}
.git-hub-button{
  height:1.7rem;
  width: fit-content;
  margin-top:.4rem;
  padding: .4rem .7rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 18px;
  font-weight: 400;
  color: var(--White);
  border: 1px solid var(--White);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
}
.portfolio-item{
background-color: var(--third-color);
 height: auto;
  width: 60%;
border-radius: 8px;
padding: 1.3rem;
 display: flex;
 flex-direction: column;
 gap: .9rem;
   align-self: flex-start;
}
.portfolio-item-picture{
  background-color:#CCCCCC;
  border-radius: 8px;
  width: 100%;
height: 9rem;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
}

.item-titel{

  color: var(--secend-color);
  font-weight: 700;
  word-wrap: break-word;
   font-size: 19px; 

}
.item-discription{
  color: var(--White);
  line-height: 1.5;
  border-radius: 4px;
  transition: all 0.3s ease;
 
}
.read-more {
  background: none;
  border: none;
  color: var(--secend-color);
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.3rem;
  align-self: flex-start;
}

.read-more:hover {
  text-decoration: underline;
}
.tecnoused{
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
  height: auto;
}
.git-hub-button.active{
  color: var(--secend-color);
  border-color: var(--secend-color);
}
/* -------------DESKTOP---------------- */
@media (min-width: 1024px) {
  .git-hub-button{
  height:2rem;
  margin-top:.5rem;
  padding: .3rem .7rem;
}
.portfolio-item{
width: 260px;
border-radius: 8px;
padding: 1.6rem;
 transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15); 
}

.item-titel{
     min-height: 65.3333px;
   font-size: 24px; 
}
.item-discription{
  line-height: 1.6; 
  border-radius: 4px; 

}
.tecnoused{
    border-radius: 6px;
   min-height: 45.6667px;
}
.git-hub-button:hover{
  cursor: pointer;
 color: var(--secend-color);
 border-color: var(--secend-color);
}
.portfolio-item:hover{
  transform: translateY(-2px); 
  box-shadow: 0 12px 24px rgba(0,0,0,0.25); 
}
}
@media (min-width: 768px) and (max-width: 1023px) {
  .portfolio-item {
    width: 40%; 
  
  }
}
</style>