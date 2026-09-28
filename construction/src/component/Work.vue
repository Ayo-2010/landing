<template>
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="group relative bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
      >
        <div class="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          <div class="absolute top-4 left-4 bg-slate-900/80 text-white font-bold px-3 py-1 text-sm rounded shadow">
            {{ project.number }}
          </div>

          <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a 
              :href="project.link" 
              class="w-12 h-12 bg-white text-slate-900 hover:bg-orange-600 hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
              title="View Project"
            >
              <Eye :size="20" />
            </a>
          </div>
        </div>

        <div class="p-6 flex flex-col justify-between flex-1">
          <div>
            <span class="text-xs uppercase font-bold tracking-wider text-orange-600 mb-1 block">
              {{ project.category }}
            </span>

            <a :href="project.link" class="block group/title">
              <h4 class="text-xl font-bold text-slate-900 group-hover/title:text-orange-600 transition-colors mb-4">
                {{ project.title }}
              </h4>
            </a>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
            <div>
              <span class="text-xs text-slate-400 block font-medium uppercase tracking-wide">Building since</span>
              <span class="text-sm font-semibold text-slate-700">{{ project.date }}</span>
            </div>

            <a 
              :href="project.link" 
              class="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-orange-600 transition-colors"
            >
              View Details
              <ArrowUpRight :size="16" />
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import projects from '../data/work.ts'
import { Eye, ArrowUpRight } from 'lucide-vue-next'


</script>