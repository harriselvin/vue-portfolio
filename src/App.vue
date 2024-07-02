<template>
    <navbar-comp />
    <router-view/>
</template>
<script>
import NavbarComp from "./components/NavbarComp.vue";
export default {
  components: {
    NavbarComp
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Roboto", sans-serif;
}

.logo img {
    height: 3em;
}

.mobile-nav {
  display: none;
}

.container {
  padding: .5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00abf0;
  margin: 0;
  min-width: 100%;
}

nav {
  background-color: #00abf0 !important;
  transition: .5s;
}

nav a {
  padding: 0 .5em;
  text-transform: uppercase;
}

nav a {
  color: white !important;
  font-weight: 300;
  text-decoration: none;
  transition: .5s;
}

.container  a:hover {
  text-decoration: underline;
  transition: .5s;
}

.resume-btn {
  background-color: white;
  margin: 0 .3em 0 0;
}

.resume-btn a {
  color: #00abf0;
  text-transform: uppercase;
}

.resume-btn a:hover {
  color: #00abf0;
  text-decoration: none;
}

.resume-btn:active {
  opacity: .9;
}

.nav-item {
  display: flex;
  align-items: center;
}

svg {
  height: 1.5em;
  transition: .3s;
  margin: 0 .5em 0 0;
  color: white;
}

.offcanvas-body {
  background-color: #00abf0 !important;
}

.offcanvas-body li {
  text-align: left;
}

.navbar-toggler {
  background-color: white;
}

.btn-links {
  display: flex;
  flex-direction: column;
  margin: 2em 0 0;
}

.btn-links a {
  flex: 1;
  background-color: white;
  margin: 1em 0 0;
  color: black !important;
}

.btn-links a:active {
  scale: 1;
  border: 1px solid white;
}

@media only screen and (min-width: 500px) and (max-width: 750px) {
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
}
@media only screen and (min-width: 301px) and (max-width: 500px) {
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
}

@media only screen and (max-width: 300px) {
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
}
</style>
