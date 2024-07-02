<template>
    <div>
        <div v-if="typeof projects == 'object'">
            <slot name="projectSlot"></slot>
        </div>
        <div v-else-if="typeof education == 'object'">
            <slot name="educationSlot"></slot>
        </div>
        <div v-else-if="typeof skills == 'object'">
            <slot name="skillSlot"></slot>
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
    props: ['aboutMe', 'projects', 'education', "skills", 'workEp', 'testmonials']
}
</script>
<style>
    
</style>