<template>
  <section class="max-w-7xl mx-auto px-6 lg:px-12 py-16 font-sans">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-26 items-center">
      <div class="space-y-6">
         <HeadingBadge text="ABOUT US" />

        <h2
          class="text-3xl sm:text-4xl lg:text-4xl font-semibold text-zinc-900 leading-tight"
        >
          WE BUILDING EVERYTHING THAT YOU NEEDED
        </h2>
        <p
          class="text-zinc-600 font-semibold text-sm sm:text-base leading-relaxed"
        >
          We craft unique digital experiences. With more than 7 years of
          expertise we design and code clean websites.
        </p>

        <ul class="space-y-3 pt-1">
          <li
            class="flex items-start gap-3 text-zinc-700 font-semibold text-sm sm:text-base"
          >
            <Sparkles class="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span>Providing Solutions For Construction, Management</span>
          </li>
          <li
            class="flex items-start gap-3 text-zinc-700 font-semibold text-sm sm:text-base"
          >
            <Sparkles class="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span>Engineers design and build the structure</span>
          </li>
        </ul>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div class="flex gap-4 items-start">
            <div
              class="w-22 h-22 bg-zinc-100 flex items-center justify-center shrink-0 p-3"
            >
              <Building2 class="w-full h-full text-orange-500" />
            </div>
            <div>
              <h3 class="font-bold text-zinc-900 text-lg">Our Mission</h3>
              <p
                class="text-xs text-zinc-500 font-semibold mt-1 leading-relaxed"
              >
                We craft unique digital experiences. With more years of
                expertise we design
              </p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div
              class="w-22 h-22 bg-zinc-100 flex items-center justify-center shrink-0 p-3"
            >
              <Award class="w-full h-full text-orange-500" />
            </div>
            <div>
              <h3 class="font-bold text-zinc-900 text-lg">Our Vision</h3>
              <p
                class="text-xs text-zinc-500 font-semibold mt-1 leading-relaxed"
              >
                We craft unique digital experiences. With more years of
                expertise we design
              </p>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <router-link
            to="/work"
            class="inline-flex items-center gap-3 bg-zinc-900 hover:bg-orange-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 transition-colors duration-200"
          >
            <span>EXPLORE OUR COMPANY</span>
            <ArrowUpRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
      <div class="relative flex justify-center lg:justify-end">
        <div
          class="hidden sm:block absolute -left-6 top-12 w-3 h-28 bg-orange-500 z-10"
        ></div>

        <div class="relative max-w-lg w-full">
          <img
            src="/images/about_2-1.png"
            alt="Construction Worker"
            class="w-full h-[520px] object-cover rounded-none"
          />

          <div
            class="absolute -bottom-10 -left-6 sm:-left-12 w-64 sm:w-72 bg-orange-600 text-white p-8 shadow-2xl animate-float overflow-hidden z-20"
          >
            <DraftingCompass
              class="absolute -right-4 -bottom-4 w-40 h-40 text-orange-500/30 pointer-events-none"
            />

            <div class="w-12 h-12 mb-4">
              <BadgeCheck class="w-full h-full text-white" />
            </div>

            <div
              class="text-5xl sm:text-6xl font-black tracking-tight flex items-center"
            >
              <span ref="countRef">{{ count }}</span>
              <span>+</span>
            </div>

            <div class="mt-2 text-xl font-bold leading-tight">
              Business<br />Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {  Sparkles, Building2, Award,  ArrowUpRight, BadgeCheck,  DraftingCompass,} from "lucide-vue-next";
import HeadingBadge from "./HeadingBadge.vue";
import { useCountUp } from "../composables/useCountUp";


const countRef = ref(null);

const { count, startCount } = useCountUp(40, 2500);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCount();
        observer.disconnect();
      }
    },
    { threshold: 0.5 },
  );

  if (countRef.value) {
    observer.observe(countRef.value);
  }
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
