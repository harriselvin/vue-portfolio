import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutComp from '@/components/AboutComp.vue'
import SkillsComp from '@/components/SkillsComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue';
import EducationComp from '@/components/EducationComp.vue';
import WorkComp from '@/components/WorkComp.vue';
import TestimonialComp from '@/components/TestimonialComp.vue';
import ContactComp from '@/components/ContactComp.vue';
import CertificateView from '@/views/CertificateView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComp
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsComp
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsComp
  },
  {
    path: '/education',
    name: 'education',
    component: EducationComp
  },
  {
    path: '/work',
    name: 'work',
    component: WorkComp
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialComp
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComp
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: CertificateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
