<template>
  <div class="home">
    <h2>Home Page</h2>
    <home-comp />
    <about-comp />
    <projects-comp />
    <education-comp />
    <work-comp />
    <testimonial-comp />
    <contact-comp></contact-comp>
    <footer-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import ProjectsComp from '@/components/ProjectsComp.vue'
import EducationComp from '@/components/EducationComp.vue'
import WorkComp from '@/components/WorkComp.vue'
import TestimonialComp from '@/components/TestimonialComp.vue'
import ContactComp from '@/components/ContactComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {
    HomeComp,
    AboutComp,
    ProjectsComp,
    EducationComp,
    WorkComp,
    TestimonialComp,
    ContactComp,
    FooterComp
  }
}
</script>

<style>
  
</style>