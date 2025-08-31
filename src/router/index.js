import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import contact from "../views/contact.vue";
import skills from "../views/skills.vue";
import projects from "../views/projects.vue";
import cv from "../views/cv.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/contact", name: "contact", component: contact },
  { path: "/skills", name: "skills", component: skills },
  { path: "/projects", name: "projects", component: projects },
  { path: "/cv", name: "cv", component: cv },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
