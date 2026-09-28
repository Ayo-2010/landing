<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Star } from 'lucide-vue-next'
import HeadingBadge from './HeadingBadge.vue'
import testimonials from '../data/testimonials.ts'

const currentIndex = ref(0)
let autoplayInterval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const setSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="relative bg-black text-white overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] relative">
      <div 
        class="lg:col-span-6 relative bg-[#0d0f12] px-6 sm:px-12 lg:px-16 py-16 flex flex-col justify-between z-10"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div class="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="/images/testimonial-bg5-1.png" 
            alt="Background Worker" 
            class="w-full h-full object-cover object-center" 
          />
        </div>

        <div class="relative z-10 space-y-8 max-w-xl mx-auto lg:mx-0">
          <div>
            <HeadingBadge text="Testimonials" />
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What client says
            </h2>
          </div>

          <Transition name="fade" mode="out-in">
            <div :key="currentIndex" class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 rounded-full p-0.5 border-2 border-amber-500 overflow-hidden flex-shrink-0">
                  <img 
                    :src="testimonials[currentIndex].avatar" 
                    :alt="testimonials[currentIndex].name" 
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white leading-snug">
                    {{ testimonials[currentIndex].name }}
                  </h3>
                  <p class="text-xs text-zinc-400">
                    {{ testimonials[currentIndex].designation }}
                  </p>
                </div>
              </div>

              <div class="flex items-center space-x-1 text-amber-500">
                <Star 
                  v-for="star in (testimonials[currentIndex].rating || 5)" 
                  :key="star" 
                  class="w-4 h-4 fill-amber-500" 
                />
              </div>

              <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {{ testimonials[currentIndex].message }}
              </p>
            </div>
          </Transition>
        </div>

        <div class="relative z-10 flex items-center space-x-2 pt-8 max-w-xl mx-auto lg:mx-0">
          <button 
            v-for="(_, index) in testimonials" 
            :key="index"
            @click="setSlide(index)"
            :class="[
              'h-2 rounded-full transition-all duration-300 focus:outline-none',
              currentIndex === index ? 'w-6 bg-amber-500' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>

      <div class="lg:col-span-6 relative min-h-[450px] lg:min-h-full">
        <img 
          src="/images/testimonial-bg5-2.png" 
          alt="Construction Engineers" 
          class="absolute inset-0 w-full h-full object-cover object-center" 
        />

        <div class="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 bg-[#12151e] rounded-3xl py-8 px-4 shadow-2xl flex flex-col items-center justify-between z-20 w-24 h-[360px] overflow-hidden">
          <div class="flex flex-col  space-x-3 -rotate-90 origin-center whitespace-nowrap translate-y-12">
            <span class="text-2xl font-bold text-amber-500">2m+</span>
            <span class="text-xs font-medium text-zinc-400 tracking-wide">Success Peoples</span>
          </div>

          <div class="relative flex items-center justify-center w-full h-28">
            <img 
              src="/images/client_group_1-2.png" 
              alt="Client Group" 
              class="max-w-none w-28 h-auto -rotate-90 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>