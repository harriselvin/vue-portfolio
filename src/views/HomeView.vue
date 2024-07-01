<template>
  <div class="home">
    <h2>Home Page</h2>
    <home-comp msg="Welcome to Your Vue.js App"/>
    <about-comp />
    <education-comp />
    <work-comp />
    <testimonial-comp />
    <footer-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'
import AboutComp from '@/components/AboutComp.vue'
import EducationComp from '@/components/EducationComp.vue'
import WorkComp from '@/components/WorkComp.vue'
import TestimonialComp from '@/components/TestimonialComp.vue'
import FooterComp from '@/components/FooterComp.vue'
export default {
  components: {
    HomeComp,
    AboutComp,
    EducationComp,
    WorkComp,
    TestimonialComp,
    FooterComp
  }
}
</script>

<style>
  
</style>