<template>
    <div id="work" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="work-comp">
            <div class="work-title">
                <h2>Experience</h2>
            </div>
            <div class="work-sec">
                <div class="work" v-for="work in workData()" :key="work">
                    <card-comp :workExp="work">
                        <template #workSlot>
                            <div class="work-box">
                                <div class="work-heading">
                                    {{ work.placeOfWork }}
                                </div>
                                <div class="work-content">
                                    <div class="work-position">
                                        <span>Position:</span> {{ work.position }}
                                    </div>
                                    <div class="work-year">
                                        <span>Duration:</span> {{ work.year }}
                                    </div>
                                    <div class="work-desc">
                                        <span>Duties:</span> {{ work.description }}
                                    </div>
                                    <div class="work-contact">
                                        <p><span>Contact Person:</span>  {{ work.contact[0].name }}</p>
                                        <span>
                                            Contact Details:
                                            <div class="contact-details">
                                                <span>Cell:</span> {{ work.contact[0].cell }} <br>
                                                <span>Email: </span> {{ work.contact[0].email }}
                                                <p></p>
                                            </div>
                                        </span>
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
        workData() {
            return this.$store.state.workExp
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
    #work {
        min-height: 80svh;
    }
    .work-title {
        margin: 0 0 2em;
    }
    .work-comp {
        padding-top: max(2em, 4em);
        margin: 0 10cqi;
    }
    .work-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
        gap: 25cqi;
    }
    .work {
        margin: 1em auto;
    }
    .work-box {
        border: 2px solid;
        border-radius: 5px;
        width: clamp(10em, 100vw, 20em);
    }
    .work-heading {
        margin: 0 0 1em;
        font-size: larger;
        background: #00abf0;
        border-radius: 3px 3px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.5em;
    }
    [data-bs-theme='light'] .work-heading {
        color: white;
    }
    .work-content {
        text-align: left;
    }
    .work-content span {
        font-weight: bold;
    }
    .contact-details {
        font-weight: 400;
    }

    @media  only screen and (max-width: 500px) {
        .work-sec {
            gap: .5em;
        }
        .work-box {
            width: clamp(10em, 85vw, 20em);
        }
    }
</style>