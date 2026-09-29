<template>
      <div>
        <MainSection title="Our Work" />
  <div v-if="project" class="space-y-12 max-w-7xl mx-auto px-4 py-12 lg:py-16 text-zinc-800">
    <div class="relative w-full rounded-xl overflow-hidden shadow-sm">
      <img 
        :src="project.details.heroImage" 
        :alt="project.title" 
        class="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
        @error="$event.target.style.display = 'none'"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div class="absolute bottom-0 right-0 top-6 sm:bottom-0 sm:right-0 sm:top-8 w-full max-w-sm lg:max-w-md flex flex-col justify-center">
        <div class="bg-white/95 backdrop-blur-md border border-white/20 rounded-xl p-6 lg:p-8 shadow-2xl space-y-4">
          <h3 class="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3">Project Info</h3>

          <div 
            v-for="(info, index) in project.details.infoList" 
            :key="info.label"
            class="space-y-3"
          >
            <div class="flex items-center justify-between text-sm sm:text-base">
              <div class="flex items-center gap-2 text-zinc-700 w-32 font-semibold">
                <component :is="info.icon" class="w-4 h-4 text-orange-500 stroke-[2.2]" />
                <span>{{ info.label }}</span>
              </div>
              <span class="text-zinc-400 font-medium px-1">:</span>
              <span class="text-zinc-900 font-semibold flex-1 text-right">{{ info.value }}</span>
            </div>

            <hr v-if="index < project.details.infoList.length - 1" class="border-zinc-200/80" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full space-y-10">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold text-zinc-900">Project Overview</h2>
        <p class="text-zinc-600 leading-relaxed text-base sm:text-lg">
          {{ project.details.overview }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="service in project.details.services" 
          :key="service.title"
          class="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl group hover:-translate-y-1"
        >
          <div class="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
            <component :is="service.icon" class="w-6 h-6 stroke-[2]" />
          </div>
          <div class="space-y-2">
            <router-link
              :to="service.link"
              class="text-xl font-bold text-zinc-900 hover:text-orange-600 transition-colors duration-200 block"
            >
              {{ service.title }}
            </router-link>
            <p class="text-sm text-zinc-500 leading-normal">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>

      <blockquote class="bg-zinc-900 text-white p-8 lg:p-10 rounded-xl relative overflow-hidden space-y-4 shadow-lg">
        <p class="text-lg sm:text-xl italic font-light text-zinc-200 leading-relaxed">
          “{{ project.details.quote.text }}”
        </p>
        <div>
          <cite class="not-italic font-bold text-white text-lg block">{{ project.details.quote.author }}</cite>
          <span class="text-xs text-orange-500 font-semibold tracking-wider uppercase">{{ project.details.quote.role }}</span>
        </div>
      </blockquote>
    </div>

    <div class="relative w-full rounded-xl overflow-hidden group">
      <img 
        :src="project.details.videoCoverImage" 
        alt="Project Video Cover" 
        class="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover"
        @error="$event.target.style.display = 'none'"
      />
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <button 
          @click="isModalOpen = true"
          aria-label="Play Video"
          class="relative flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full text-white shadow-xl hover:bg-orange-500 transition-all duration-300 hover:scale-110 group/btn"
        >
          <span class="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-75"></span>
          <Play class="w-8 h-8 fill-current relative z-10 ml-1" />
        </button>
      </div>
    </div>

    <div class="w-full">
      <p class="text-zinc-600 leading-relaxed text-base sm:text-lg">
        {{ project.details.secondaryParagraph }}
      </p>
    </div>

    <Transition name="fade">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="isModalOpen = false"
      >
        <div class="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
          <button 
            @click="isModalOpen = false"
            class="absolute top-4 right-4 z-10 p-2 text-white bg-zinc-800/80 rounded-full hover:bg-zinc-700 transition-colors"
          >
            <X class="w-6 h-6" />
          </button>
          <div class="aspect-video w-full">
            <iframe 
              class="w-full h-full"
              :src="project.details.videoUrl" 
              title="Project Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Transition>
  </div>
  <Quote />
      </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../../data/work.ts'
import MainSection from '../../component/MainSection.vue'
import { Play, X } from 'lucide-vue-next'
import Quote from '../../component/Quote.vue';


const route = useRoute()
const isModalOpen = ref(false)

const project = computed(() => {
  const currentSlug = route.params.detail
  return projects.find((p) => p.slug === currentSlug) || projects[0]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>