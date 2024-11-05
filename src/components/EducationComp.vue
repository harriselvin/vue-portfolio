<template>
    <div id="education" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="edu-comp">
            <div class="edu-title">
                <h2>Education</h2>
            </div>
            <div class="edu-sec">
                <div class="edu" v-for="edu in educationData()" :key="edu">
                    <card-comp :education="edu">
                        <template #educationSlot>
                            <div class="edu-box">
                                <div class="edu-heading">
                                    {{ edu.institution }}
                                </div>
                                <div class="image">
                                    <img :src="edu.icon">
                                </div>
                                <div> 
                                    <div class="edu-content">
                                        <div class="edu-desc">
                                            {{ edu.description }}
                                        </div>
                                        <div class="edu-year">
                                            <p>Year: {{ edu.year }}</p>
                                        </div>
                                        <div class="edu-contact">
                                            <p class="person">Contact Person: {{ edu.contact[0].name }}</p>
                                            <p class="details">Contact Details: {{ edu.contact[0].contactDetails }}</p>
                                        </div>
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
        educationData() {
            return this.$store.state.education
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
    #education {
        min-height: 70svh;
    }
    .edu-comp {
        padding-top: max(4em, 6em);
        margin: 0 10cqi;
    }
    .edu-title {
        text-transform: uppercase;
        font-family: "Kanit", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
    .edu-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
    }
    .edu {
        margin: 1em auto
    }
    .edu-box {
        border: 2px solid;
        border-radius: 5px;
        height: 22em;
        width: clamp(10em, 85vw, 15em);
        overflow: hidden;
    }
    .edu-heading {
        height: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00abf0 !important;
        border-radius: 3px 3px 0 0;
    }
    .image img {
        height: 3em;
        object-fit: cover;
        filter: grayscale(1);
    }
    .image img:hover {
        filter: grayscale(0);
    }
    .edu-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .edu-desc {
        height: 6em;
        padding: 1em 0;
        display: flex;
        justify-content: center;
    }
    .edu-year {
        height: 2em;
        padding-bottom: 1em;
    }
    .edu-contact {
        padding-top: 1em;
        line-height: 1em;
    }
    .edu-contact .person {
        height: 2em;
    }
    [data-bs-theme='light'] .edu-heading {
        background-color: black;
        color: white;
    }
    [data-bs-theme='dark'] .edu-heading {
        background-color: white;
        color: #dee2e6;
    }
</style>