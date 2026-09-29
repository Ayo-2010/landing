<script setup>
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'
import HeadingBadge from './HeadingBadge.vue'
import posts from '../data/posts.ts'

</script>

<template>
  <section id="news" class="py-20 pb-60 bg-[#f8f8f8] text-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
            <HeadingBadge text="Daily Update" />
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our latest news and blog
          </h2>
        </div>

        <div>
          <router-link
            to="/news"
            class="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors duration-200"
          >
            <span>View All Post</span>
            <ArrowUpRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="post in posts" 
          :key="post.id"
          class="bg-[#f2f2f2] overflow-hidden flex flex-col justify-between"
        >
          <div>

            <div class="relative overflow-hidden aspect-[4/3]">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
  
              <div class="absolute top-6 left-6 bg-orange-600 text-white font-bold text-center px-4 py-2 flex flex-col justify-center leading-tight">
                <span class="text-2xl tracking-tight">{{ post.day }}</span>
                <span class="text-xs uppercase tracking-wider">{{ post.month }}</span>
              </div>
            </div>


            <div class="p-8 pb-4">
  
              <div class="flex items-center space-x-2 text-sm font-semibold text-slate-500 mb-4">
                <span class="hover:text-orange-600 cursor-pointer transition-colors">{{ post.author }}</span>
                <span>•</span>
                <span class="hover:text-orange-600 cursor-pointer transition-colors">{{ post.category }}</span>
              </div>

  
                <router-link :to="post.link" class="inline">
                  <h3 class="inline text-xl font-extrabold text-slate-900 leading-snug transition-colors duration-300 hover:text-orange-600 bg-gradient-to-r from-orange-600 to-orange-600 bg-[length:0%_2px] hover:bg-[length:100%_2px] bg-no-repeat bg-bottom transition-[background-size,color] duration-300">
                    {{ post.title }}
                  </h3>
                </router-link>
            </div>
          </div>

          <div class="p-8 pt-4">
            <router-link
              :to="post.link"
              class="inline-flex items-center space-x-2 font-bold text-xs uppercase tracking-wider px-6 py-3.5 border border-slate-300 bg-transparent text-slate-700 transition-all duration-300 hover:bg-orange-600 hover:border-orange-600 hover:text-white"
            >
              <span>READ MORE</span>
              <ArrowUpRight class="w-4 h-4" />
            </router-link>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>