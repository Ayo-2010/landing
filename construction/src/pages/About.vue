<template>
  <div class="bg-white relative">
    <MainSection title="About Us" />
    <About />
    <WhyChoose />
    <Process />
    <Project class="pt-40"/>
    <Done class="bg-white text-red-900 border-y border-slate-800"/>
        <Testimonial />
        <Team :limit="3" />
          <Trusted />
    <News />

  </div>
  </template>

  <script setup>
  import MainSection from '../component/MainSection.vue';
  import About from '../component/About.vue';
  import WhyChoose from '../component/WhyChoose.vue';
  import Process from '../component/Process.vue';
  import Project from '../component/Project.vue';
  import Done from '../component/Done.vue';
  import Testimonial from '../component/Testimonial.vue';
  import Trusted from '@/component/Trusted.vue';
  import News from '@/component/News.vue';
  import Team from '@/component/Team.vue';
  
  </script>