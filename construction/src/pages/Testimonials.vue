<template>
  <div class="bg-[#f3f3f1]">
    <MainSection title="Testimonials" />

    <section class="py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-600">Client stories</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            What our clients say
          </h1>
          <p class="text-zinc-600 mt-4">
            Feedback from the people who trusted us with their builds, sites and facilities.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure
            v-for="item in testimonials"
            :key="item.id"
            class="bg-white border border-zinc-100 rounded-2xl p-6 sm:p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <Quote class="w-8 h-8 text-orange-200 mb-4" />
            <blockquote class="text-zinc-600 leading-relaxed flex-1">{{ item.message }}</blockquote>

            <div class="flex items-center gap-1 mt-6">
              <Star
                v-for="star in item.rating"
                :key="star"
                class="w-4 h-4 fill-orange-500 text-orange-500"
              />
            </div>

            <figcaption class="flex items-center gap-3 mt-5 pt-5 border-t border-zinc-100">
              <div class="w-11 h-11 rounded-full overflow-hidden bg-zinc-100 flex-shrink-0">
                <img :src="item.avatar" :alt="item.name" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="font-bold text-zinc-900 text-sm">{{ item.name }}</p>
                <p class="text-xs text-zinc-500">{{ item.designation }}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Star, Quote } from 'lucide-vue-next'
import MainSection from '../component/MainSection.vue'
import testimonials from '../data/testimonials.ts'
</script>
