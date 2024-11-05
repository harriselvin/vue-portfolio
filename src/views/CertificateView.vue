<template>
    <div class="badges-container">
        <div class="backdrop" v-show="showModal || showBadgeModal" @click="closeModal"></div>

        <transition name="slide">
            <div class="modal-sec" v-show="showModal">
                <p v-if="selectedCertificate" class="selected-certificate">
                    <img :src="selectedCertificate.image" :alt="selectedCertificate.name">
                </p>
            </div>
        </transition>
        <transition name="slide">
            <div class="modal-sec" v-show="showBadgeModal">
                <p v-if="selectedBadge" class="selected-badge">
                    <img :src="selectedBadge.image" :alt="selectedBadge.name">
                </p>
            </div>
        </transition>
        <div class="badge-title">
            <h2>Certificates & Badges</h2>
        </div>
        <div class="certificates">
            <div class="sub-heading">
                <h3>Certificates</h3>
            </div>
            <div class="certificate-sec">
                <div v-for="certificate in certificatesData()" :key="certificate" @click="openModal(certificate)">
                    <card-comp :certificates="certificate">
                        <template #certificateSlot>
                            <div class="certificate-box">
                                <div class="certificate-image">
                                    <img :src="certificate.image" :alt="certificate.name">
                                </div>
                                <div class="certificate-name">
                                    {{ certificate.name }}
                                </div>
                            </div>
                        </template>
                    </card-comp>
                </div>
            </div>
            <div class="sub-heading">
                <h3>Badges</h3>
            </div>
            <div class="badge-sec">
                <div v-for="badge in badgesData()" :key="badge" @click="openBadgeModal(badge)">
                    <card-comp :badges="badge">
                        <template #badgeSlot>
                            <div class="badge-box">
                                <div class="badge-image">
                                    <img :src="badge.image" :alt="badge.name">
                                </div>
                                <div class="badge-name">
                                    {{ badge.name }}
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
import CardComp from '@/components/CardComp.vue';
export default {
    data() {
        return {
            showModal: false, 
            showBadgeModal: false, 
            selectedCertificate: null,
            selectedBadge: null
        }
    },
    components: {
        CardComp
    },
    methods: {
        certificatesData() {
            return this.$store.state.certificates
        },
        badgesData() {
            return this.$store.state.badges
        },
        openModal(certificate) {
            this.selectedCertificate = certificate;
            this.showModal = true;
        },
        openBadgeModal(badge) {
            this.selectedBadge = badge;
            this.showBadgeModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.showBadgeModal = false;
            this.selectedCertificate = null;
            this.selectedBadge = null;
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
<style scoped>
    .badges-container {
        min-height: 80svh;
        overflow-x: hidden;
    }
    .badge-title {
        text-transform: uppercase;
        font-family: "Kanit", sans-serif;
        font-weight: 500;
        font-style: normal;
        margin: 5em 0 0;
        padding: 2em 0;
    }
    .sub-heading h3 {
        text-transform: uppercase;
        font-family: "Kanit", sans-serif;
        font-weight: 500;
        font-style: normal;
    }
    .certificates {
        position: relative;
    }
    .certificate-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
    }
    .certificate-image {
        cursor: pointer;
    }
    .certificate-image img {
        width: 15em;
        filter: grayscale(1);
        transition: .3s;
    }
    .certificate-image img:hover {
        filter: none;
    }
    .badge-sec {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15em, 100%), 1fr));
    }
    .badge-image {
        cursor: pointer;
    }
    .badge-image img {
        width: 10em;
        filter: grayscale(1);
        transition: .3s;
    }
    .badge-image img:hover {
        filter: none;
    }
    .modal-sec {
        background-color: #fff;
        border: 2px solid ;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -45%);
        z-index: 2;
        transition: .5s ease;
    }
    .selected-certificate img {
        width: clamp(15em, 100vw, 50em);
        margin: 0 0 -1em;
    }
    .selected-badge img {
        width: clamp(10em, 100vw, 35em);
        margin: 0 0 -1em;
    }
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 1;
    }
</style>