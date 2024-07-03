<template>
    <div class="slots">
        <div v-if="typeof projects == 'object'">
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
        <div v-else-if="typeof workExp == 'object'">
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
    props: ['aboutMe', 'projects', 'education', "techSkills", "softSkills", 'workExp', 'testmonials']
}
</script>
<style>
    .slots {
        overflow-x: hidden;
    }
</style>