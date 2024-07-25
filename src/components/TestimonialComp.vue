<template>
    <div id="testimonials" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div class="test-comp">
            <div class="test-title">
                <h2>Testimonials</h2>
            </div>
            <div class="rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
            </div>
            <div>
                <h3>Don't take my word for it. Take theirs</h3>
            </div>
            <div class="test-sec">
                <div class="testimonials" v-for="test in testData()" :key="test">
                    <card-comp :testimonials="test">
                        <template #aboutSlot>
                            <div class="test-box">
                                <div class="test-img">
                                    <img :src=test.image :alt=test.name>
                                </div>
                                <div class="test-content">
                                    <div class="test-msg">
                                        <p>{{ test.message }}</p>
                                    </div>
                                    <div class="test-name">
                                        {{ test.name }} <br>
                                        {{ test.position }}
                                    </div>
                                </div>
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
        testData() {
            return this.$store.state.testimonials
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
    #testimonials {
        min-height: 100svh;
    }
    .test-comp {
        padding-top: max(4em, 6em);
        margin: 0 10cqi;
    }
    .test-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(25em, 100%), 1fr));
    }
    .testimonials {
      margin: 0 auto;
      border-bottom: 2px solid;
      margin: 1em auto;
    }
    .test-box {
      flex-wrap: wrap;
      width: 16em;
      height: 34em;
    }
    .test-box img {
      height: 10em;
      width: 10em;
      object-fit: cover;
      border: 2px solid;
      border-radius: 50%;
      margin-bottom: 2em;
    }
    .test-title {
        margin: 0 0 2em;
    }
    .test-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-end;
        height: 60%;
    }
    .test-msg {
        border-top: 2px solid;
        border-bottom: 2px solid;
        height: 100%;
    }
    .test-name {
        text-align: right;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        width: 100%;
        margin-top: 1.5em;
    }
</style>