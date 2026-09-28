<script setup>
import HeadingBadge from './HeadingBadge.vue'
import awards from '../data/award.ts'
</script>

<template>
  <section class="py-20 bg-white text-slate-900 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
         <HeadingBadge text="Award Winning" />
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Our Awards &amp; Achievements
        </h2>
        <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
          Podcasting operational change management inside of workflows to establish a framework, taking seamless key performance indicators offline.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="award in awards" 
          :key="award.id"
          class="relative bg-slate-50 border border-slate-200/80 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center group hover:border-amber-500/50 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden"
        >
          <img 
            :src="award.bgShape" 
            alt="" 
            class="absolute top-0 right-0 w-32 h-auto opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
            width="130" 
            height="152"
          />

          <div class="mb-6 relative z-10 w-20 h-20 flex items-center justify-center">
            <img 
              :src="award.thumb" 
              :alt="award.title" 
              class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div class="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 z-10">
            <span class="text-slate-400 font-normal">IN </span>{{ award.year }}
          </div>

          <h3 class="text-xl font-bold text-slate-900 mb-1 z-10">
            {{ award.title }}
          </h3>

          <p class="text-sm font-semibold text-amber-500 mb-4 z-10">
            {{ award.status }}
          </p>

          <div class="mt-auto pt-4 border-t border-slate-200 w-full text-xs font-medium text-slate-500 tracking-wider uppercase z-10">
            {{ award.category }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>