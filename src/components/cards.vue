<template>
<div class="card-container" ref="card">
<div class="stat-number">{{ displayNum }}+</div>
<div class="stat-info">{{ info }}</div>

</div>
</template>

<script>
export default{
    name:"cards",
    props:{
        num:{ type:Number ,required:true},
        info:{ type:String ,required:true},
    },
    data(){
        return{
            displayNum:0,
            animated:false,
        };
    },
    mounted(){
     const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.animated) {
          this.increesNumber();
          this.animated = true;
          observer.unobserve(this.$refs.card); // نفصل المراقبة
        }
      },
      { threshold: 0.5 } // يبدأ لما 50% من العنصر يظهر
    );

    observer.observe(this.$refs.card);
    },
    methods:{
        increesNumber(){
         let start =0;
         let end = this.num;
         let duration =700;
         let stepTime=Math.max(Math.floor(duration / end),20);
         let counter= setInterval(()=>{
            start+=1;
            this.displayNum=start;
            if(start>=end){
                clearInterval(counter);
            }
         },stepTime)
        }
    }
}
</script>

<style>
.card-container{
  background-color: var(--main-color);
  height: 9.125rem;
  width: 14.5rem;
  display: flex;
align-items: center;
flex-direction: column;
  padding-bottom: 0.5%;
  border-radius: 8px;
  flex-wrap: wrap;
}
.stat-number{
display: flex;
justify-content: center;
align-items: center;
flex: 3;
width: fit-content;
font-size: 5rem;
font-weight: 900;
color: var(--secend-color);
}
.stat-info{
  color: var(--White);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
flex: 1;
}
/* -------------------------------------------- */
@media (min-width: 1024px) {
.card-container{
  background-color: var(--main-color);
  height: 9.125rem;
  width: 11.5rem;
  display: flex;
align-items: center;
flex-direction: column;
  padding-bottom: 0.5%;
  border-radius: 8px;
}
.stat-number{
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
font-size: 4.1rem;
font-weight: 900;
color: var(--secend-color);
}
.stat-info{
  color: var(--White);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

}
}
</style>
