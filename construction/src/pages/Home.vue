<script setup lang="ts">
import AboutSection from '../component/AboutSection.vue';
import HomeMain from '../component/HomeMain.vue';
import ServiceSection from '../component/ServiceSection.vue';
import BenefitSection from '../component/BenefitSection.vue';
import Testimonial from '../component/Testimonial.vue';
import Award from '../component/Award.vue';
import Quote from '../component/Quote.vue';
import Portfolio from '../component/Portfolio.vue';
import Done from '../component/Done.vue';
import Trusted from '../component/Trusted.vue';
import News from '../component/News.vue';
import Ankle from '../component/Ankle.vue';

</script>

<template>
  <div class="bg-white relative">
    <HomeMain />
    <AboutSection />
    <ServiceSection />
    <BenefitSection />
    <Testimonial />
    <Award />
    <Quote />
    <Portfolio />
    <Done class="bg-slate-900 text-state-300 border-y border-slate-800"/>
    <Trusted />
    <News />
    <Ankle />

  </div>
</template>

