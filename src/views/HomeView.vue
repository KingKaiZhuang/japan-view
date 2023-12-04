<template>
    <Banner/>
    <Service/>
    <Work/>
</template>

<script>
import Banner from '@/components/HomeView/Banner.vue';
import Service from '@/components/HomeView/Service.vue';
import Work from '@/components/HomeView/Work.vue';

export default {
    components: {
        Banner,
        Service,
        Work
    }
}
</script>