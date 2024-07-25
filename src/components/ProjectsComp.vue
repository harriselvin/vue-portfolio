<template>
    <div id="projects" data-aos="zoom-out">
      <div class="project-comp">
        <div class="pro-title">
          <h2>Projects</h2>
        </div>
        <div class="pro-sec">
          <div class="projects" v-for="project in projectsData()" :key="project">
            <card-comp :projects="project">
              <template #projectSlot>
                <div class="pro-box">
                  <img :src="project.image">
                </div>
                <div class="pro-name">
                  {{ project.name }}
                </div>
                <div class="links">
                  <a :href=project.vercel target="_blank">
                    <button class="">Live</button>
                  </a>
                  <a :href=project.gitHub target="_blank">
                    <button class="">
                      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </button>
                  </a>
                </div>
              </template>
            </card-comp>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'
export default {
    components: {
        CardComp
    },
    methods: {
        projectsData() {
            return this.$store.state.projects
        }
    },
    computed: {
        getItems() {
            return this.$store.dispatch('getItems')
        }
    },
    mounted() {
        return this.getItems
    }
}
</script>
<style>
    #projects {
        min-height: 100svh;
    }
    .project-comp {
        padding-top: max(4em, 6em);
        margin: 0 10cqi;
    }
    .pro-sec {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
    }
    .projects {
      margin: 0 auto;
      border-top: 2px solid;
      border-bottom: 2px solid;
      margin: 1em auto;
    }
    .pro-box {
      flex-wrap: wrap;
      width: clamp(10em, 85vw, 15em);
      height: 15em;
    }
    .pro-box img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-right: 2px solid;
      border-left: 2px solid;
    }
    .pro-name {
      border-top: 2px solid;
    }
    .links {
      display: flex;
      border-right: 2px solid;
      border-left: 2px solid;
    }
    .links a{
      width: 100%;
      height: 100%;
    }
    /* Light mode */
    [data-bs-theme='light'] .links a {
      border-top: 2px solid black;
    }
    [data-bs-theme='light'] .bi-github {
      fill: black;
    }
    /* Dark mode */
    [data-bs-theme='dark'] .links a {
      border-top: 2px solid white;
    }
    [data-bs-theme='dark'] .bi-github {
      fill: white;
    }
    .links button{
      width: 100%;
      height: 2em;
    }
</style>