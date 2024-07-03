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
    min-height: 100vh;
  }

  .home-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
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
    border: 2px solid ;
    box-shadow: 0 .2em .5em black;
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

  @keyframes slide {
    100% {
      top: -80px;
    }
  }

  .dynamic-text li .title-text {
    position: relative;
    color: #00abf0;
  }

  .dynamic-text li .title-text::after {
    content: "";
    position: absolute;
    left: 0;
    height: 110%;
    width: 100%;
    border-left: 2px solid #00abf0;
    border: px solid;
    animation: typing 3s steps(20) infinite;
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

  @media only screen and (max-width: 500px) {
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
