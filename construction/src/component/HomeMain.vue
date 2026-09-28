<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import slides from '../data/slides.ts'
import { StarIcon } from 'lucide-vue-next'



const activeIndex = ref(0)
let timer = null

const startAutoplay = () => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.value.length
  }, 5000)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative z-10 w-full overflow-hidden bg-gray-900 text-white">
    <div class="relative min-h-[600px] w-full">
      <div v-for="(slide, index) in slides" :key="index"
        class="absolute inset-0 transition-opacity duration-800 ease-in-out flex items-center"
        :class="activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.bgImage})` }">
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div class="max-w-[800px] space-y-6">

            <div class="flex flex-wrap items-center gap-6">
              <div v-for="(rating, rIndex) in slide.ratings" :key="rIndex"
                class="flex items-center space-x-2 bg-black/10 flex-col backdrop-blur-sm px-3 py-1.5 rounded-lg ">
                <div class="flex text-amber-400 text-sm">
                  <star-icon v-for="star in rating.stars" :key="star" class="fill-current" size="18" />
                </div>
                <div class="flex items-center space-x-1.5 text-xs sm:text-sm font-medium">
                  <component :is="rating.logo"  class="w-4 h-4 text-white" /> 
                  <span>{{rating.text }}</span>
                </div>
              </div>
            </div>

            <h1
              class="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight whitespace-pre-line">
              {{ slide.title }}
            </h1>

            <p class="text-base sm:text-lg text-gray-200 max-w-xl leading-relaxed">
              {{ slide.description }}
            </p>

            <div>
              <a href="/contact"
                class="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3.5 px-7 rounded-md transition duration-300 transform hover:-translate-y-0.5 shadow-lg">
                <span>REQUEST A FREE ESTIMATE</span>
                <i class="ri-arrow-right-up-line text-lg"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div class="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col space-y-3">
        <button v-for="(_, index) in slides" :key="index" @click="activeIndex = index"
          class="w-1.5 transition-all duration-300 rounded-full"
          :class="activeIndex === index ? 'h-8 bg-amber-500' : 'h-3 bg-white/50 hover:bg-white'"
          :aria-label="`Go to slide ${index + 1}`"></button>
      </div>

      <div class="absolute bottom-1 left-90 z-20 hidden md:block">
        <img src="/images/house.png" alt="Decorative Shape" class="w-64 h-auto object-contain" />
      </div>
    </div>
  </section>
</template>