<template>
    <div class="spinner">
        
    </div>
</template>
<script>
const getInfo = async () => {
    // wait 3 secs to mimic API call
    await new Promise(resolve => setTimeout(resolve, 3000))
}
export default {
    async setup() {
    const spinner = await getInfo()

    return {
        spinner
    }
  },
}
</script>
<style>
    
</style>