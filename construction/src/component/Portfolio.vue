<script setup>
import { ArrowRight } from 'lucide-vue-next'
import HeadingBadge from './HeadingBadge.vue'
import projects from '../data/portfolio.ts'
</script>

<template>
  <section 
    id="portfolio" 
    class="relative z-10 text-slate-900 bg-cover bg-no-repeat bg-[position:50%_0] bg-scroll py-18"
    style="background-image: url('/images/award-bg5-1.png');"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      
      <div class="text-center mb-12">
          <HeadingBadge text="Our projects" />
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Recently completed projects
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id || index"
          :class="[
            'group relative overflow-hidden min-h-[300px] lg:min-h-[380px] flex flex-col justify-end',
            index === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
          ]"
        >
          <img 
            :src="project.image" 
            :alt="project.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>

          <div class="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <span class="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                {{ project.category }}
              </span>
            </div>

            <div class="space-y-4 max-w-lg mt-auto">
              <router-link :to="project.link" class="block">
                <h3 class="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {{ project.title }}
                </h3>
              </router-link>

              <div>
                <router-link
                  :to="project.link"
                  class="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xs transition-colors duration-200"
                >
                  <span>Explore Project</span>
                  <ArrowRight class="w-4 h-4" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>