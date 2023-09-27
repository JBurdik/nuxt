<template>

    <div></div>
    
</template>
<script setup>
import services from '~/data/services.ts'

const slug = useRoute().params.slug

console.log(services.find(service => service.slug === slug))

</script>