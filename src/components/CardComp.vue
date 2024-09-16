<template>
    <div class="slots">
        <div v-if="loading">
            <slot name="loadingSlot">
                <p>Loading...</p>
            </slot>
        </div>
        <div v-else-if="typeof projects == 'object'">
            <slot name="projectSlot">
                <p>projects.name</p>
                <p>projects.description</p>
                <p>projects.image</p>
            </slot>
        </div>
        <div v-else-if="typeof education == 'object'">
            <slot name="educationSlot">
                <p>projects.description</p>
                <p>projects.year</p>
                <p>projects.institution</p>
            </slot>
        </div>
        <div v-else-if="typeof techSkills == 'object'">
            <slot name="techSkillSlot">
                <p>techSkills.name</p>
                <p>techSkills.image</p>
                <p>techSkills.link</p>
            </slot>
        </div>
        <div v-else-if="typeof softSkills == 'object'">
            <slot name="softSkillSlot">
                <p>softSkills.name</p>
                <p>softSkills.image</p>
            </slot>
        </div>
        <div v-else-if="typeof workExp == 'object'">
            <slot name="workSlot">
                <p>work.placeOfWork</p>
                <p>work.year</p>
                <p>work.description</p>
            </slot>
        </div>
        <div v-else-if="typeof testmonials == 'object'">
            <slot name="testimonialSlot">
                <p>testimonials.name</p>
                <p>testimonials.position</p>
                <p>testimonials.message</p>
            </slot>
        </div>
        <div v-else>
            <slot name="aboutSlot">
                <h2>aboutMe</h2>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['aboutMe', 'projects', 'education', "techSkills", "softSkills", 'workExp', 'testmonials'],
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        this.loading = false;
    }
}
</script>
<style>
    .slots {
        overflow-x: hidden;
    }
</style>