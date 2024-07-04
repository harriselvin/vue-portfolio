<template>
  <div id="home">
    <div class="home-container">
      <div class="title">
        <h1>Hi, I'm <span class="name">Elvin Harris</span></h1>
        <div class="h3">I am a 
          <ul class="dynamic-text">
            <li><span class="title-text item sd">Software Developer</span></li>
            <li><span class="title-text item ui">UI/UX Designer</span></li>
          </ul>
        </div>
        <a class="cv" href="https://harriselvin.github.io/hostedImages/Links/Elvin%20Harris%20latest%20CV%202.pdf" target="_blank">
          <button class="btn">View CV</button>
        </a>
      </div>
      <div class="my-image">
        <img :src="'https://harriselvin.github.io/hostedImages/Images/Elvin-shoulders.jpg'" />
        <div class="social">
          <ul class="social-links">
              <li class="list-group-item item-1"><a href="https://github.com/harriselvin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg></a></li>
              <li class="list-group-item item2"><a href="https://www.linkedin.com/in/elvin-harris-02590a1a6/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg></a></li>
          </ul>
        </div>
      </div>
    </div>
    <spinner-comp/>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue'

export default {
  components: {
    SpinnerComp
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    min-height: 100svh;
    overflow-x: hidden;
  }

  .home-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
    margin-top: 2em;
  }

  .title {
    text-align: left;
    margin: 0 2em;
    display: flex;
    flex-direction: column;
  }

  .title .name {
    display: flex;
    text-transform: uppercase;
  }

  .my-image img {
    height: clamp(15em, 25vw, 20em);
    border-radius: 50%;
    border: 2px solid;
    box-shadow: 0 .2em .5em;
  }

  .social-links {
    display: flex;
    margin: 20% 50px 0 50px;
  }

  .social-links .item-1 {
      padding: 0 28px;
  }

  .social-links svg {
      height: 35px;
      transition: .3s;
  }

  .social-links svg:hover {
      scale: 1.1;
  }

  [data-bs-theme='light'] .social-links .bi-github {
      color: black;
  }
  [data-bs-theme='light'] .social-links .bi-github {
      color: #dee2e6;
  }

  [data-bs-theme='light'] .social-links .bi-linkedin {
      color: blue;
  }

  [data-bs-theme='dark'] .social-links .bi-linkedin {
      color: #dee2e6;
  }

  .h3 {
    display: inline-flex;
    font-size: max(1em, 2.5cqi);
  }


  .dynamic-text {
    line-height: 39px;
    height: 1.18em;
    overflow: hidden;
    text-align: left;
  }

  .dynamic-text li {
    list-style: none;
    margin-left: -20px;
    position: relative;
    top: 0;
    animation: slide 6s steps(2) infinite;
  }

  .title-text {
    --white-bg: white;
  }

  .title-text {
    color: #00abf0;
  }

  @keyframes slide {
    100% {
      top: -80px;
    }
  }

  .dynamic-text li .title-text {
    position: relative;
  }

  .dynamic-text li .title-text::after {
    content: "";
    position: absolute;
    left: 0;
    height: 110%;
    width: 100%;
    background: var(--white-bg, white);
    border-left: 2px solid #00abf0;
    animation: typing 3s steps(10) infinite;
  }

  /* Light mode styles */
  [data-bs-theme='light'] .dynamic-text li .title-text::after {
    background-color: white;
  }
  /* Dark mode styles */
  [data-bs-theme='dark'] .dynamic-text li .title-text::after {
    background-color: #212529;
  }

  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -35px 0 35px;
    }
  }

  .btn {
    background-color: #00abf0;
    width: 100%;
    color: white;
  }

  .btn:active {
    background-color: #00abf0;
  }

  .cv {
    text-decoration: none;
  }

  .cv:active {
    color: white;
  }

  @media only screen and (min-width: 598px) and (max-width: 850px) {
    .btn {
      display: none;
    }
    
    .dynamic-text {
      line-height: 50px;
      height: 1.4em;
    }

    .dynamic-text li {
      margin-top: -.70em;
    }

    .dynamic-text li .title-text::after {
      height: 180%;
    }
  }

  @media only screen and (max-width: 533px) {
    .title {
      order: 1;
      text-align: center;
    }
    .title .name {
      justify-content: center;
    }
    .btn {
      display: none;
    }
  }

  @media screen and (max-width: 596px) and (min-width: 301px) {
    .btn {
      display: none;
    }

    .dynamic-text {
      line-height: 50px;
      height: 1.5em;
    }

    .dynamic-text li {
      margin-top: -.75em;
    }

    .dynamic-text li .title-text::after {
      height: 180%;
    }
  }
</style>
