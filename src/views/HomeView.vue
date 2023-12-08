<template>
    <Banner/>
    <Service/>
    <Work/>
    <Member/>
    <Soft/>
    <Contact/>
</template>

<script>
import Banner from '@/components/HomeView/Banner.vue';
import Service from '@/components/HomeView/Service.vue';
import Work from '@/components/HomeView/Work.vue';
import Member from '@/components/HomeView/Member.vue';
import Contact from '@/components/HomeView/Contact.vue';
import Soft from '@/components/HomeView/Soft.vue';

export default {
    components: {
        Banner,
        Service,
        Work,
        Member,
        Soft,
        Contact
    }
}
</script>