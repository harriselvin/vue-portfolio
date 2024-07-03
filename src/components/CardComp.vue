<template>
    <div class="slots">
        <div v-if="typeof projects == 'object'">
            <slot name="projectSlot"></slot>
        </div>
        <div v-else-if="typeof education == 'object'">
            <slot name="educationSlot"></slot>
        </div>
        <div v-else-if="typeof techSkills == 'object'">
            <slot name="techSkillSlot">
                <p>Skills.name</p>
                <p>Skills.image</p>
                <p>Skills.link</p>
            </slot>
        </div>
        <div v-else-if="typeof softSkills == 'object'">
            <slot name="softSkillSlot">
                <p>Skills.name</p>
                <p>Skills.image</p>
            </slot>
        </div>
        <div v-else-if="typeof workEp == 'object'">
            <slot name="workSlot"></slot>
        </div>
        <div v-else-if="typeof testmonials == 'object'">
            <slot name="testSlot"></slot>
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
    props: ['aboutMe', 'projects', 'education', "techSkills", "softSkills", 'workEp', 'testmonials']
}
</script>
<style>
    .slots {
        overflow-x: hidden;
    }
</style>