// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router';  
import Home from '../views/Home.vue';  
import About from '../views/About.vue';  
import Contact from '../views/Contact.vue';  
import Syntax from '../views/Syntax.vue';  
import Forminput from '../views/Forminput.vue';  
import Lifecyclehooks from '../views/Lifecyclehooks.vue';  
import Chat from '../views/Chat.vue';  
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: Home  
  },  
  {  
    path: '/about',  
    name: 'About',  
    component: About  
  },
  {  
    path: '/contact',  
    name: 'Contact',  
    component: Contact  
  },
  {  
    path: '/syntax',  
    name: 'Syntax',  
    component: Syntax  
  },
  {  
    path: '/form-input',  
    name: 'form-input',  
    component: Forminput  
  },
  {  
    path: '/lifecycle-hooks',  
    name: 'lifecycle-hooks',  
    component: Lifecyclehooks  
  },
  {  
    path: '/chat',  
    name: 'chat',  
    component: Chat  
  } 
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
});  
  
export default router; 