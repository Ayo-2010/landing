<template>
  <section class="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-12">
    <div class="mb-12 space-y-3 text-center">
      <div class="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500">
        <Triangle class="h-3.5 w-3.5 fill-orange-500 stroke-none" />
        <span>RECENT WORK</span>
      </div>

      <h2 class="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
        Check our latest projects
      </h2>

      <p class="text-xs font-semibold text-zinc-500 sm:text-sm">
        We are the best construction agency in the world
      </p>
    </div>

    <div>
      <Carousel
        ref="carouselRef"
         :items-to-show="1.1"
        snap-align="center"
        :breakpoints="breakpoints"
        :wrap-around="true"
        :autoplay="2500"
        :transition="600"
      >
        <Slide
          v-for="(project, index) in projects"
          :key="`${project.title}-${index}`"
          class="px-2 sm:px-4"
        >
          <div
            class="group relative h-[450px] w-full overflow-hidden rounded-lg bg-cover bg-center transition-all duration-300 sm:h-[500px]"
            :style="{ backgroundImage: `url('${project.image}')` }"
          >
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <a
              :href="project.link"
              title="View Project"
              class="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-md transition-transform duration-200 hover:scale-110"
            >
              <Target class="h-5 w-5" />
            </a>

            <div
              class="absolute inset-x-0 bottom-0 z-10 flex flex-wrap items-end justify-between gap-4 p-6 sm:gap-5 sm:p-10"
            >
              <div class="animated-text max-w-lg space-y-3 text-left text-white">
                <span
                  class="inline-block bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md"
                >
                  {{ project.subtitle }}
                </span>

                <h3 class="text-3xl font-bold sm:text-4xl">
                  {{ project.title }}
                </h3>

                <p class="text-sm text-zinc-200">
                  {{ project.date }}
                </p>
              </div>

              <div class="animated-btn">
                <Btn
                  text="EXPLORE SERVICE"
                  arrow-type="arrow-up-right"
                  class="bg-[#ea5501] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-none hover:bg-[#d04b00]"
                />
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>

      <div class="mt-10 flex items-center justify-center gap-2">
        <button
          v-for="(project, index) in projects"
          :key="`dot-${index}`"
          :aria-label="`Go to slide ${index + 1}`"
          class="h-2 rounded-full transition-all duration-300"
          :class="
            activeDotIndex === index
              ? 'w-6 bg-orange-500'
              : 'w-2 bg-zinc-300 hover:bg-zinc-400'
          "
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import { Triangle, Target } from 'lucide-vue-next'
import 'vue3-carousel/dist/carousel.css'
import Btn from './Btn.vue'
import projects from '../data/project.ts'

const carouselRef = ref(null)
const currentSlide = ref(0)

const breakpoints = {
  0: {
    itemsToShow: 1.15,
    snapAlign: 'center',
  },
  640: {
    itemsToShow: 1.35,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 1.45,
    snapAlign: 'center',
  },
}

const activeDotIndex = computed(() => {
  const total = projects.length

  if (!total) return 0

  return ((currentSlide.value % total) + total) % total
})

const goToSlide = (index) => {
  if (carouselRef.value?.slideTo) {
    carouselRef.value.slideTo(index)
  } else {
    currentSlide.value = index
  }
}
</script>

<style scoped>
.animated-text,
.animated-btn {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.animated-text {
  transform: translateY(20px);
}

.animated-btn {
  transform: translateY(20px);
}

:deep(.carousel__slide--active) .animated-text {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

:deep(.carousel__slide--active) .animated-btn {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.3s;
}

:deep(.carousel__viewport) {
  overflow: hidden;
}

:deep(.carousel__track) {
  align-items: stretch;
}

:deep(.carousel__slide) {
  height: auto;
}
</style>