<template>
  <div class="home">
    <Suspense>
      <template #default>
        <home-comp />
      </template>
      <template #fallback>
        <div class="spin-img">
          <img :src=spinner />
        </div>
      </template>
    </Suspense>
    <about-comp />
    <projects-comp />
    <education-comp />
    <work-comp />
    <testimonial-comp />
    <contact-comp />
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
    FooterComp,
  },
  data() {
    return {
      spinner: 'https://www.msha.gov/sites/default/files/images/loading2.gif'
    }
  }
}
</script>

<style>
  .spin-img {
    min-height: 95vh;
  }
</style>