<template>
  <div class="portfolio">
    <div class="portfolio-me">Portfolio</div>
 <div class="options">
  <div class="titel-sort">My Projects</div>
  <div class="options-holder">
      <div 
        v-for="opt in options" 
        :key="opt.value" 
        class="option"
        :class="{ active: selected.value === opt.value }"
        @click="select(opt)"
      >
        {{ opt.label }}
      </div>
      </div>
    </div>
    <!-- ✅ Dropdown Menu -->
     <div class="dropdownn-container">
      <div class="dropdownn-titel">
        My projects
      </div>
    <div class="dropdownn" @click="toggle">
      <div class="dropdownn-selected">
        <span>{{ selected.label }}</span>
      </div>
      <ul v-if="open" class="dropdownn-menu">
        <li v-for="opt in options" :key="opt.value" @click.stop="select(opt)">
          <span>{{ opt.label }}</span>
        </li>
      </ul>
    </div>
  </div>
    <!-- ✅ المشاريع -->
    <div class="item-holder">
      <portfolio-item
        v-for="(proj, index) in filteredProjects"
        :key="index"
        :titel="proj.title"
        :description="proj.description"
        :githublink="proj.link"
        :type="proj.type"
      >
        <img class="item-pic" :src="proj.image" alt="">
        <template #tech>
          <technology
            v-for="(t, i) in proj.technos"
            :key="i"
            :technoUsed="t"
          />
        </template>
      </portfolio-item>
    </div>
  </div>
</template>

<script>
import portfolioItem from '../components/portfolio-item.vue';
import technology from '../components/icons/technology.vue';

export default {
  name: "Projects",
  components: { portfolioItem, technology },
  data() {
    return {
      open: false,
      selected: { label: "All Projects", value: "all" },
      options: [
        { label: "All Projects", value: "all" },
        { label: "Front-end", value: "frontend" },
        { label: "Back-end", value: "backend" }
      ],
      projects: [
        {
          title: "Employee REST API - Spring Boot",
          description: "A simple RESTful API built with Spring Boot 3 that provides full CRUD operations for managing employees. It uses Spring Data JPA for persistence, an H2 in-memory database for testing, and Lombok to reduce boilerplate code. The project demonstrates a clean layered architecture (Controller, Service, Repository, Model) and can serve as a foundation for enterprise applications.",
          link: "https://github.com/tahx00/EmployeeManagerAPI",
          type: "backend",
          image: new URL("@/assets/photos/Employee.png", import.meta.url).href,          
          technos: ["java", "spring","js","Maven","Lombok"]
        },
            {
          title: "Clipboard Landing Page",
          description: `A landing page built with HTML and CSS as part of a Frontend Mentor challenge. The project focuses on clean layout, semantic structure, and modern CSS techniques (Grid & Flexbox) to closely match the given design.`,
          link: "https://github.com/tahx00/ClipboardLandingPage",
          type: "frontend",
          image: new URL("/src/assets/photos/Clipboard Landing Page.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
      
        {
          title: "Bank System (EJB Server + Client)",
          description: `A distributed banking system built with Enterprise Java Beans (EJB).
It demonstrates how a server-side EJB (BankEJB) provides banking operations (create account, deposit, withdraw, check balance) and how a Java client (ClientEJB) connects remotely using JNDI to consume these services.`,
          link: "https://github.com/tahx00/JavaEE-BankingSystem",
          type: "backend",
          image: new URL("@/assets/photos/Bank System.png", import.meta.url).href,
          technos: ["Java", "WildFly","JEE"]
        },
         {
          title: "Browser Extensions Manager UI",
          description: `A responsive web interface for managing browser extensions, built as part of a Frontend Mentor challenge. Users can toggle extensions, filter by status, remove items, and switch between light/dark themes with a clean, responsive design.`,
          link: "https://github.com/tahx00/responsiveCardDsign",
          type: "frontend",
          image: new URL("/src/assets/photos/Browser Extensions Manager.jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JS","JSON"]
        },
        {
          title: "BanqueServiceRest - REST API",
          description: `A RESTful web service for banking operations that allows retrieving account details and performing transactions (e.g., transfers , extract ) via JSON over HTTP.`,
          link: "https://github.com/tahx00/BankServiceREST",
          type: "backend",
          image: new URL("/src/assets/photos/BanqueServiceRestpng.png", import.meta.url).href,
          technos: ["java","REST", "JEE","WildFly","Eclips"]
        },
         {
          title: "BanqueService - SOAP Web Service",
          description: `A SOAP-based banking web service that provides methods to check account balances and perform money transfers. It exposes a WSDL endpoint for client applications to consume.`,
          link: "https://github.com/tahx00/BankServiceSOAP",
          type: "backend",
          image: new URL("/src/assets/photos/BanqueServiceSOAPpng.png", import.meta.url).href,
          technos: ["java", "SOAP","JEE","WildFly","Eclips"]
        },
         
         
          {
          title: "Chat App CSS Illustration",
          description: `A responsive chat app illustration built with pure HTML & CSS as part of a Frontend Mentor challenge. The project focuses on creating a clean, scalable UI with Flexbox & Grid while ensuring responsive layouts and smooth CSS animations.`,
          link: "https://github.com/tahx00/ChatAppCSS",
          type: "frontend",
          image: new URL("/src/assets/photos/Chat App CSS Illustration.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
      
               {
          title: "Currency Converter App",
          description: `A simple Android app for converting between multiple currencies (DZD, USD, EUR, GBP, JPY, AUD) with a clean Material Design interface. Built with Java and the Android SDK, it provides real-time conversion using predefined rates and supports Arabic localization.`,
          link: "https://github.com/tahx00/CoinConverterApp",
          type: "backend",
          image: new URL("/src/assets/photos/Currency Converter App.png", import.meta.url).href,
          technos: ["Java", "Android","Gradle","ConstraintLayout"]
        },
           {
          title: "Bento Grid",
          description: `A bento-style grid layout built with HTML5 and CSS Grid as part of a Frontend Mentor challenge. The project focuses on clean design, semantic HTML, and mobile-first responsiveness to match the provided mockup.`,
          link: "https://github.com/tahx00/BentoGridLayout",
          type: "frontend",
          image: new URL("/src/assets/photos/bentoGrid.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
          {
          title: "TASK Mobile App (Prototype)",
          description: `A Flutter-based mobile application prototype developed as a third-year university project. The app is inspired by Uber but designed for hiring local workers (carpenters, blacksmiths, and similar services). It focuses on UI/UX design, navigation, and front-end functionality without backend integration, showcasing a clean Material Design interface.`,
          link: "https://github.com/tahx00/TASK-Mobile-App-Flutter-Prototype-",
          type: "frontend",
          image: new URL("/src/assets/photos/TASK.png", import.meta.url).href,
          technos: ["Flutter", "Dart","MaterialDesign"]
        },
              {
          title: "CORBA Tax Service",
          description: `A distributed client-server application built with CORBA that demonstrates remote object invocation.
The system allows clients to calculate taxes based on income and retrieve detailed tax information from a remote server, showcasing CORBA concepts like IDL, POA, and JNDI lookup.`,
          link: "",
          type: "backend",
          image: new URL("/src/assets/photos/Tax Service.png", import.meta.url).href,
          technos: ["Java", "CORBA","JNDI"]
        },
              {
          title: "Affine Cipher Client-Server",
          description: `A simple Java client-server application that demonstrates encrypted communication using the Affine cipher.
                        The client sends an encrypted message to the server, which decrypts it and responds with an encrypted acknowledgment. This project highlights basic networking and classical encryption techniques in Java.`,
          link: "https://github.com/tahx00/AffineCipherClientServer",
          type: "backend",
          image: new URL("/src/assets/photos/AffineCipherClientServer.png", import.meta.url).href,
          technos: ["Java", "Socket","AffineCipher"]
        },
                    {
          title: "E-Book - Online Bookstore Website",
          description: `E-BookStore is my first project built with HTML & CSS.
It’s a simple online bookstore website that showcases books in computer science.
The site includes a homepage, login/signup page, and 12 sub-pages for individual books.`,
          link: "https://github.com/tahx00/E-BookStore",
          type: "frontend",
          image: new URL("/src/assets/photos/e-book.jpeg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
                    {
          title: "FAQ Accordion – Interactive Q&A Component",
          description: `This project is an interactive FAQ accordion built as part of a Frontend Mentor challenge.
It allows users to expand or collapse answers by clicking on a question, ensuring a clean and user-friendly way to display information.
The component is fully responsive, works across mobile and desktop, and includes keyboard accessibility for better usability.`,
          link: "https://github.com/tahx00/faq-accordion",
          type: "frontend",
          image: new URL("/src/assets/photos/FAQ Accordion .jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JS"]
        },
                    {
          title: "Fylo Data Storage Component",
          description: `A clean data storage component inspired by a Frontend Mentor challenge.
It shows storage usage with a custom progress bar, highlights remaining space, and adapts seamlessly between mobile and desktop layouts.`,
          link: "https://github.com/tahx00/FyloDataStorageComponent",
          type: "frontend",
          image: new URL("/src/assets/photos/Fylo Data Storage Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
                    {
          title: "Fylo Landing Page",
          description: `A landing page built for a Frontend Mentor challenge, featuring a two-column layout with clean typography, modern design, and mobile-first responsiveness. Includes hover states and semantic HTML structure for accessibility.`,
          link: "https://github.com/tahx00/FyloLandingPage-",
          type: "frontend",
          image: new URL("/src/assets/photos/Fylo Landing Page.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
                  {
          title: "Huddle Landing Page - Alternating Feature Blocks",
          description: `A landing page built for a Frontend Mentor challenge, featuring alternating two-column feature blocks, modern typography, and a clean mobile-first design. Includes hover interactions and semantic HTML for accessibility.`,
          link: "https://github.com/tahx00/Huddle-Landing-Page-with-Alternating-Feature-Blocks",
          type: "frontend",
          image: new URL("/src/assets/photos/Huddle Landing Page .jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
                {
          title: "Intro Component with Sign-Up Form",
          description: `Intro component with a sign-up form, built as part of a Frontend Mentor Challenge,
The form validates inputs with clear error messages and provides a modern, accessible user experience.`,
          link: "https://github.com/tahx00/component-with-signup-form",
          type: "frontend",
          image: new URL("/src/assets/photos/Intro Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JS"]
        },
        {
          title: "Calculator Client-Server App",
          description: `A simple client-server calculator built with Node.js, Express, and Axios.
The server handles arithmetic operations through a REST API, while the client communicates via a command-line interface (CLI). Users can select an operation, input two numbers, and receive the computed result directly from the server.`,
          link: "https://github.com/tahx00/TCP-Calculator",
          type: "backend",
          image: new URL("/src/assets/photos/Calculator Client-Server App.png", import.meta.url).href,
          technos: ["Node", "Express","Axios"]
        },
        {
          title: "UDP Calculator (Client-Server App)",
          description: `A lightweight client-server calculator built with Node.js (dgram module).
The server listens for arithmetic requests over UDP, processes the operation, and sends results back.
The client collects user input (operation + numbers), sends it via UDP, and displays the server’s response in real time.`,
          link: "https://github.com/tahx00/UDP-Calculator",
          type: "backend",
          image: new URL("/src/assets/photos/UDP Calculator (Client-Server App).png", import.meta.url).href,
          technos: ["Node", "JS","UDP"]
        },
        {
          title: "Product Preview Card Component",
          description: `A responsive product preview card component built as part of a Frontend Mentor Challenge.
It emphasizes clean layout design, responsive styling for desktop and mobile, and interactive hover/focus states for a better user experience.`,
          link: "https://github.com/tahx00/Product-Preview-Card-Component",
          type: "frontend",
          image: new URL("/src/assets/photos/Product Preview Card Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
        {
          title: "Interactive Rating Component",
          description: `A interactive rating component where users can select a rating, submit it, and view a thank-you message. Built as part of a Frontend Mentor Challenge.`,
          link: "https://github.com/tahx00/rating-component",
          type: "frontend",
          image: new URL("/src/assets/photos/Interactive Rating Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JS"]
        },
        {
          title: "Results Summary Component",
          description: `A responsive results summary component built as part of a Frontend Mentor challenge. The component recreates a real-world UI design with focus on layout, responsiveness, and accessibility. It also supports optional dynamic data from a JSON file.`,
          link: "https://github.com/tahx00/Results-Summary-Component",
          type: "frontend",
          image: new URL("/src/assets/photos/Results Summary Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JSON"]
        },
         {
          title: "Single Price Grid Component",
          description: `A responsive pricing grid component built as part of a Frontend Mentor challenge. The project highlights HTML and CSS fundamentals, focusing on layout techniques with Flexbox and Grid to create a modern, mobile-first design.`,
          link: "https://github.com/tahx00/Single-Price-Grid-Component",
          type: "frontend",
          image: new URL("/src/assets/photos/Single Price Grid Component.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
        {
          title: "SocketComm Pro",
          description: `SocketComm Pro is a web-based client-server communication tool with TCP/UDP simulation, multiple display modes, and a built-in text-to-speech assistant.
          It’s designed as a learning tool for understanding client-server communication, reliability differences, and accessibility features.`,
          link: "https://github.com/tahx00/SocketComm-Pro",
          type: "backend",
          image: new URL("/src/assets/photos/SocketComm Pro.png", import.meta.url).href,
          technos: ["Node", "WebSockets" ,"HTML","CSS","JS"]
        },
        {
          title: "Testimonials Grid Section",
          description: `A responsive testimonials grid layout built as part of a Frontend Mentor challenge. It showcases the use of CSS Grid and Flexbox to create a clean, modern UI that adapts seamlessly between desktop and mobile screens.`,
          link: "https://github.com/tahx00/Testimonials-Grid-Section",
          type: "frontend",
          image: new URL("/src/assets/photos/Testimonials Grid Section.jpg", import.meta.url).href,
          technos: ["HTML", "CSS"]
        },
        {
          title: "Tip Calculator App",
          description: `A tip calculator built as part of a Frontend Mentor challenge. It allows users to easily calculate the tip and total bill per person with real-time updates, interactive UI, and a clean, modern design.`,
          link: "https://github.com/tahx00/Tip-Calculator-App",
          type: "frontend",
          image: new URL("/src/assets/photos/Tip Calculator App.jpg", import.meta.url).href,
          technos: ["HTML", "CSS","JS"]
        },
              {
          title: "My Portfolio",
          description: `A personal portfolio website built with Vue.js , designed to showcase my projects, skills, and achievements. It features a responsive layout, interactive components, and a modern UI for an engaging user experience.`,
          link: "https://github.com/tahx00/MyPortfolio",
          type: "frontend",
          image: new URL("/src/assets/photos/portfolio.png", import.meta.url).href,
          technos: ["Vue", "HTML","CSS","JS"]
        },
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selected.value === "all") return this.projects;
      return this.projects.filter(p => p.type === this.selected.value);
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    select(opt) {
      this.selected = opt;
      this.open = false;
    }
  }
};
</script>

<style>
/* ✅ Dropdown */
.dropdownn-container{
  background-color: var(--third-color);
    border-radius: 8px;
    padding-left: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items:center; /* Align to left */
  width: 84%; /* Container width */
  margin-top: 3rem;
}
.dropdownn {
  position: relative;
  width: 40%;
  background: var(--gray);
  border-radius: 8px;
  color: var(--White);
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--secend-color);
}
.dropdownn-selected {
  padding: .9rem 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: var(--third-color);
  border-radius: 8px;
}
.dropdownn-titel{
  font-size: 20px;
  font-weight: 700;
}
.dropdownn-selected span{
  width: 100%;
  display: flex;
  justify-content: center;
}
.dropdownn-menu {
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
.dropdownn-menu li {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: background 0.2s;
  gap: 1rem;
}
.dropdownn-menu li:hover {
  background: var(--secend-color);
}
 .options{
    display: none;
  }

.item-pic{
  width: 100%;
  height: 100%;
  object-fit: cover; /* 📌 استخدم هذا */
  object-position: center;
  border-radius: 8px;
  display: block;
}
.item-holder{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 2%;
  gap: 3rem;

}
.portfolio{
  display: flex;
  flex-direction: column; /* 📌 الموبايل يبدأ بعمود */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: var(--gray);
}
.portfolio-me{
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

/* الخط تحت العنوان */
.portfolio-me::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 16%;
  height: 2px; 
  background-color: var(--secend-color);
}
/* ------------------DESKTOP----------------------------- */
@media(min-width:1024px){
.dropdownn-container{
  display: none;
}
.item-holder{
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 1rem;
  padding: 2%;
  gap: 2rem;
}
 .portfolio-me{
    font-size: 35px; 
    margin-top: 3rem;
  }
  .portfolio-me::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: 3px; 
  background-color: var(--secend-color);
  }
.options {
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  background-color: var(--third-color);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: .6rem 1rem ;
  font-size: 17px;
}
.options-holder{
  display: flex;
  gap: 1rem;
}
.titel-sort{
  font-size: 24px;
  font-weight: 900;
}
.option {
  background-color: var(--gray);
  padding:.6rem .9rem;
  border-radius: 8px;
  color: var(--White);
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;
}
.option:hover {
  background-color: var(--secend-color);
}
}
@media (min-width: 768px) and (max-width: 1023px) {
.item-holder{
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