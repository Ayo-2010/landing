<template>
  <section id="about" class="relative py-16 lg:py-24 bg-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="absolute -top-30 -right-8 z-0 pointer-events-none opacity-40 lg:opacity-100">
            <img 
              src="/images/about-bg-shape5-1.png" 
              alt="Background shape" 
              class="max-w-none w-full h-auto"
            />
          </div>
      <div class="absolute rotate-180 -bottom-30 -left-8 z-0 pointer-events-none opacity-40 lg:opacity-100">
            <img 
              src="/images/about-bg-shape5-1.png" 
              alt="Background shape" 
              class="max-w-none w-full h-auto"
            />
          </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-26 items-center">
        
        <div class="lg:col-span-5 ">
          <div class="relative z-10 space-y-6">
            <div class="overflow-hidden bg-transparent rounded-2xl">
              <img 
                src="/images/about_5-1.png" 
                alt="About Construz" 
                class="w-full h-auto object-cover transform hover:scale-105 transition duration-500 shadow-xl"
              />
            </div>
            
            <p class="text-gray-600 text-base leading-relaxed italic border-l-4 border-amber-500 pl-4">
              We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
            </p>

            <div>
              <a 
                href="/about" 
                class="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 px-6 rounded-full transition duration-300 shadow-md"
              >
                <span>Know More About Company</span>
                <i class="ri-arrow-right-up-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 relative z-10 space-y-8 pr-10">
          
          <div class="space-y-3">
            <HeadingBadge text="ABOUT US" />
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              We building everything that you needed
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed pt-2">
              We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.
            </p>
          </div>

          <ul class="space-y-4">
            <li 
              v-for="(feature, index) in featureSolutions" 
              :key="index"
              class="flex items-start space-x-3"
            >
              <div class="flex-shrink-0 mt-1">
                <component :is="feature.icon"></component>
              </div>
              <span class="text-gray-800 font-medium text-base sm:text-lg">
                {{ feature.title }}
              </span>
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-gray-100">
            <div class="flex items-center space-x-4">
              <div class="w-17 h-17 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl">
                <Smartphone size="40"/>
              </div>
              <div>
                <a href="tel:+1235568824" class="text-2xl font-semibold text-gray-900 hover:text-amber-500 transition">
                  +123 556 8824
                  <span class="text-lg  text-gray-500 font-normal block">Need Help?</span>
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <img src="/images/about_3-4.png" alt="Founder" class="w-17 h-17 rounded-full object-cover" />
              <div>
                <img src="/images/about_3-3.png" alt="Signature" class="h-7  mb-1" />
                <div class="h-0.5 w-28 bg-amber-500 my-1"></div>
                <p class="text-xs text-gray-500 font-medium">Founder of Construz</p>
              </div>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden shadow-lg group">
            <img 
              src="/images/about_5-2.png" 
              alt="About Video Thumbnail" 
              class="w-full h-64 sm:h-80 object-cover"
            />
            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
              <button 
                @click="openVideo" 
                aria-label="Play Video"
                class="relative w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 text-black rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 shadow-xl"
              >
                <span class="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75"></span>
                <play class="fill-current text-white" size="35"/>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div 
      v-if="isVideoOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      @click.self="closeVideo"
    >
      <div class="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <button 
          @click="closeVideo" 
          class="absolute top-3 right-3 text-white text-3xl font-bold hover:text-amber-500 z-10"
        >
          &times;
        </button>
        <iframe 
          :src="youtubeUrl" 
          class="w-full h-full border-0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Smartphone , Play } from 'lucide-vue-next'
import HeadingBadge from './HeadingBadge.vue'
import featureSolutions from '../data/solutions.ts'

const isVideoOpen = ref(false)
const youtubeUrl = 'https://www.youtube.com/embed/I94rqgr54yU?autoplay=1'

const openVideo = () => {
  isVideoOpen.value = true
}

const closeVideo = () => {
  isVideoOpen.value = false
}
</script>