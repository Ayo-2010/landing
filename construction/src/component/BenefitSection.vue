<script setup>
import benefits from "../data/benefit.ts"
import HeadingBadge from './HeadingBadge.vue'


</script>

<template>
  <section class="py-16 lg:py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6">
          <div class="relative  overflow-hidden ">
            <img 
              src="/images/benefit-thumb5-1.png" 
              alt="Benefits thumbnail" 
              class="w-full h-auto object-cover"
              width="893"
              height="536"
            />
          </div> 
        </div>

        <div class="lg:col-span-6 space-y-6">
          <div>
             <HeadingBadge text="Our Benefits" />
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Reasons for why people choosing ‘Construction’
            </h2>
          </div>

          <p class="text-gray-600 text-base leading-relaxed">
            Podcasting operational change management inside of workflows to establish a framework, taking seamless key performance indicators offline.
          </p>

          <div class="pt-2">
            <h6 class="text-base font-bold text-gray-900 mb-6">
              Benefits of choosing our company:
            </h6>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                v-for="(item, index) in benefits" 
                :key="index"
                class="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors duration-300"
              >
                <div class="flex items-center justify-center w-10 h-10 shrink-0 bg-amber-500 text-white rounded-lg p-2 shadow-sm">
                  <component :is="item.icon" class="w-6 h-6" />
                </div>
                <div class="h-8 w-px bg-gray-200"></div>
                <h4 class="text-sm font-semibold text-gray-800">{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>