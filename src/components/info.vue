<template>
<div class="information-details">
   <div class="icon-place"><slot name="icon"></slot></div>
     <div class="value-data-space">
    <span class="label">{{label}}</span>
    <span class="value">{{value}}</span>
</div>
</div>
</template>
<script>
export default{
    name:"info",
    props: {
      label: { type: String, required: true },
      value: { type: String, required: true },
}
}
</script>

<style scoped>
.information-details{
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.3rem;
 gap: 3;
 margin: 1.3% 0;
}
.label{
font-weight: bold;
display: block;
color: var(--White);
}
.value{
display: block;
color: var(--White);
}
.icon-place{
  width: 8%;
  aspect-ratio: 1/1;
margin-right: 2%;
}
.value-data-space{
  display: flex;
  justify-content:space-between ;
  align-items: center;
  width: 100%;

}
/* ------------------------------------------------------------- */
@media (min-width: 1024px) {

.information-details {
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.3rem;
  margin: 0;
  gap: .5rem;
}
.label{
font-weight: bold;
display: block;
color: var(--White);
}
.value{
display: block;
color: var(--White);
}
.icon-place{
   flex: 0 0 25px;
  aspect-ratio: 1/1;
margin-right: 1%;
}
.value-data-space{
  display: flex;
  justify-content:space-between ;
  align-items: center;

}

}
</style>