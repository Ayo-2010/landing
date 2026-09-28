<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Check } from 'lucide-vue-next'
import HeadingBadge from './HeadingBadge.vue'
import services from '../data/service.ts'

const activeTab = ref(0)
</script>

<template>
  <section id="services" class="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="mb-12 flex items-center flex-col text-center">
         <HeadingBadge text="What we do" />
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
          We provide excellent service to our customers
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-4">
          <nav class="flex flex-col space-y-3" aria-label="Services Navigation">
            <button
              v-for="(service, index) in services"
              :key="service.id"
              @click="activeTab = index"
              :class="[
                'flex items-center justify-between w-full px-6 py-6 text-left font-semibold rounded-xl transition-all duration-300 transform',
                activeTab === index 
                  ? 'bg-amber-500 text-black shadow-md translate-x-1' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              ]"
            >
              <span class="text-base sm:text-lg">{{ service.title }}</span>
              <ArrowDownRight class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': activeTab === index }" />
            </button>
          </nav>
        </div>

        <div class="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[420px]">
          <Transition name="smooth-fade" mode="out-in">
            <div 
              :key="activeTab"
              class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-2xl"
            >
              <div class="md:col-span-5 relative bg-gray-800 p-6 rounded-2xl">
                <div class="relative overflow-hidden rounded-xl shadow-md">
                  <img 
                    :src="services[activeTab].image" 
                    :alt="services[activeTab].title" 
                    class="w-full h-80 object-cover"
                  />
                </div>
                <div class="mt-4 flex items-center justify-between border-t pt-4 border-gray-100">
                  <span class="text-sm font-semibold uppercase text-gray-400">Service</span>
                  <span class="text-2xl font-black text-amber-500">{{ services[activeTab].id }}</span>
                </div>
              </div>

              <div class="md:col-span-7 space-y-6 py-6 sm:py-10 p-6">
                <div>
                  <span class="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-1">About this Service</span>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ services[activeTab].title }}</h3>
                  <p class="text-gray-600 text-base leading-relaxed">
                    {{ services[activeTab].description }}
                  </p>
                </div>

                <div class="flex items-start space-x-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <Check class="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <span class="text-sm font-medium text-gray-800">
                    {{ services[activeTab].feature }}
                  </span>
                </div>

                <div>
                  <a 
                    :href="services[activeTab].link" 
                    class="inline-flex items-center space-x-2 bg-gray-900 hover:bg-amber-500 hover:text-black text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-md"
                  >
                    <span>More Details</span>
                    <ArrowUpRight class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.smooth-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.smooth-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.7, 0, 0.84, 0);
}

.smooth-fade-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

.smooth-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(0.98);
}
</style>