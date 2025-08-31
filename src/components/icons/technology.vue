<template>
   
   <div 
     class="technology-used" 
     :class="techClass" 
     :style="{ animationDelay: delay + 's' }"
   >
       {{technoUsed}}
   </div>
</template>
<script>
export default{
    name:"techno",
    props:{
        technoUsed:{type:String , required:true}
    },
    computed:{
        techClass(){
            return this.technoUsed.toLowerCase();
        },
         delay() {
      return (Math.random() * 6).toFixed(2);
    }
    }
};
</script>
<style>
.technology-used{
    width: fit-content;
    height: 9px;
    padding:4px 9px;
    color: var(--White);
    font-Size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--White);
    border-radius: 4px;
     animation: blink 1.10s infinite;
    transition: color 0.7s ease, border-color 0.7s ease;
}

.technology-used.html:hover {
  color: #e65127;
  border-color: #e65127;
  cursor:default;
}
.technology-used.css:hover {
  color: #0c73b8;
  border-color: #0c73b8;
  cursor:default;
}

/* JS */
.technology-used.js:hover {
  color: #e7a328;
  border-color: #e7a328;
  cursor:default;
}
.technology-used.express:hover {
  color: #e7a328;
  border-color: #e7a328;
  cursor:default;
}

/* Vue */
.technology-used.vue:hover {
  color: #47ba87;
  border-color: #47ba87;
  cursor:default;
}
.technology-used.java:hover {
  color: red;
  border-color: red;
  cursor:default;
}

.technology-used.node:hover {
  color: #69a260;
  border-color: #69a260;
  cursor:default;
}
.technology-used.php:hover {
  color: #7b7fb5;
  border-color: #7b7fb5;
  cursor:default;
}
.technology-used.python:hover {
  color: #fdd951;
  border-color: #fdd951;
  cursor:default;
}
.technology-used.spring:hover {
  color: #72b545;
  border-color: #72b545;
  cursor:default;
}
.technology-used.dart:hover {
  color: #08d3b9;
  border-color: #08d3b9;
  cursor:default;
}
.technology-used.axios:hover {
  color: #5923e4;
  border-color: #5923e4;
  cursor:default;
}
.technology-used.udp:hover {
  color: #1E90FF;
  border-color: #1E90FF;
  cursor:default;
}
.technology-used.json:hover {
  color: #7f9d67;
  border-color: #7f9d67;
  cursor:default;
}
.technology-used.android:hover {
  color: #a7c83f;
  border-color: #a7c83f;
  cursor:default;
}
.technology-used.maven:hover {
  color: #dd5534;
  border-color: #dd5534;
  cursor:default;
}
.technology-used.lombok:hover {
  color: #9a2c2c;
  border-color: #9a2c2c;
  cursor:default;
}

.technology-used.wildfly:hover {
  color: #2b3a4c;
  border-color: #2b3a4c;
  cursor:default;
}
.technology-used.jee:hover {
  color: #bebc50;
  border-color: #bebc50;
  cursor:default;
}
.technology-used.eclips:hover {
  color: orange;
  border-color: orange;
  cursor:default;
}
.technology-used.rest:hover {
  color: #26c5d4;
  border-color: #26c5d4;
  cursor:default;
}
.technology-used.soap:hover {
  color: #1d2045;
  border-color: #1d2045;
  cursor:default;
}
.technology-used.gradle:hover {
  color: #0a3640;
  border-color: #0a3640;
  cursor:default;
}
.technology-used.constraintlayout:hover {
  color: #bd39a0;
  border-color: #bd39a0;
  cursor:default;
}

.technology-used.materialdesign:hover {
  color: #45de54;
  border-color: #45de54;
  cursor:default;
}

.technology-used.flutter:hover {
  color: #62c9f7;
  border-color: #62c9f7;
  cursor:default;
}

.technology-used.corba:hover {
  color: #d52069;
  border-color: #d52069;
  cursor:default;
}

.technology-used.jndi:hover {
  color: #e3be09;
  border-color: #e3be09;
  cursor:default;
}

.technology-used.socket:hover {
  color: #7be708;
  border-color: #7be708;
  cursor:default;
}

.technology-used.affinecipher:hover {
  color: #d013e5;
  border-color: #d013e5;
  cursor:default;
}
.technology-used.websockets:hover {
  color: #9a3e05;
  border-color: #9a3e05;
  cursor:default;
}




















 @media (max-width: 1024px) { 
    @keyframes blink {
  0%, 45%,  100%  { opacity: 1; }
  50% { opacity: 0.3; }
}
.technology-used.html {
  animation: blinkHtml 6s infinite;
}
@keyframes blinkHtml {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #e65127; border-color: #e65127; }
}
.technology-used.css {
  animation: blinkcss 6s infinite;
}
@keyframes blinkcss {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #0c73b8; border-color: #0c73b8; }
}
.technology-used.js {
  animation: blinkjs 6s infinite;
}
@keyframes blinkjs {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #e7a328; border-color: #e7a328; }
}
.technology-used.express {
  animation: blinkexpress 6s infinite;
}
@keyframes blinkexpress {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #e7a328; border-color: #e7a328; }
}
.technology-used.vue {
  animation: blinkvue 6s infinite;
}
@keyframes blinkvue {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #47ba87; border-color: #47ba87; }
}
.technology-used.java {
  animation: blinkjava 6s infinite;
}
@keyframes blinkjava {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: red; border-color:red; }
}
.technology-used.node {
  animation: blinknode 6s infinite;
}
@keyframes blinknode {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #69a260; border-color: #69a260; }
}
.technology-used.php {
  animation: blinkphp 6s infinite;
}
@keyframes blinkphp {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #7b7fb5; border-color: #7b7fb5; }
}
.technology-used.python {
  animation: blinkpython 6s infinite;
}
@keyframes blinkpython {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #fdd951; border-color: #fdd951; }
}
.technology-used.spring {
  animation: blinkspring 6s infinite;
}
@keyframes blinkspring {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #72b545; border-color: #72b545; }
}
.technology-used.dart {
  animation: blinkdart 6s infinite;
}
@keyframes blinkdart {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #08d3b9; border-color: #08d3b9; }
}
.technology-used.axios {
  animation: blinkaxios 6s infinite;
}
@keyframes blinkaxios {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #5923e4; border-color: #5923e4; }
}
.technology-used.udp {
  animation: blinkudp 6s infinite;
}
@keyframes blinkudp {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #1E90FF; border-color: #1E90FF; }
}
.technology-used.json {
  animation: blinkjson 6s infinite;
}
@keyframes blinkjson {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #7f9d67; border-color: #7f9d67; }
}
.technology-used.android {
  animation: android 6s infinite;
}
@keyframes android {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #a7c83f; border-color: #a7c83f; }
}
.technology-used.maven {
  animation: maven 6s infinite;
}
@keyframes maven {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #dd5534; border-color: #dd5534; }
}
.technology-used.lombok {
  animation: lombok 6s infinite;
}
@keyframes lombok {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #9a2c2c; border-color: #9a2c2c; }
}
.technology-used.wildfly {
  animation: wildfly 6s infinite;
}
@keyframes wildfly {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #2b3a4c; border-color: #2b3a4c; }
}
.technology-used.jee {
  animation: jee 6s infinite;
}
@keyframes jee {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #bebc50; border-color: #bebc50; }
}
.technology-used.eclips {
  animation: eclips 6s infinite;
}
@keyframes eclips {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: orange; border-color: orange; }
}
.technology-used.rest {
  animation: rest 6s infinite;
}
@keyframes rest {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #26c5d4; border-color: #26c5d4; }
}
.technology-used.soap {
  animation: soap 6s infinite;
}
@keyframes soap {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #1d2045; border-color: #1d2045; }
}
.technology-used.gradle {
  animation: gradle 6s infinite;
}
@keyframes gradle {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #0a3640; border-color: #0a3640; }
}
.technology-used.constraintlayout {
  animation: constraintlayout 6s infinite;
}
@keyframes constraintlayout {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #bd39a0; border-color: #bd39a0; }
}
.technology-used.materialdesign {
  animation: materialdesign 6s infinite;
}
@keyframes materialdesign {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #45de54; border-color: #45de54; }
}
.technology-used.flutter {
  animation: flutter 6s infinite;
}
@keyframes flutter {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #62c9f7; border-color: #62c9f7; }
}
.technology-used.jndi {
  animation: jndi 6s infinite;
}
@keyframes jndi {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #e3be09; border-color: #e3be09; }
}
.technology-used.corba {
  animation: corba 6s infinite;
}
@keyframes corba {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #d52069; border-color: #d52069; }
}
.technology-used.socket {
  animation: socket 6s infinite;
}
@keyframes socket {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #7be708; border-color: #7be708; }
}
.technology-used.affinecipher {
  animation: affinecipher 6s infinite;
}
@keyframes affinecipher {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #d013e5; border-color: #d013e5; }
}
.technology-used.websockets {
  animation: websockets 6s infinite;
}
@keyframes websockets {
  0%, 45%,  100%  { color: var(--White); border-color: var(--White); }
  50% { color: #9a3e05; border-color: #9a3e05; }
}


 }
</style>