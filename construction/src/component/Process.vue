<template>
  <section class="relative w-full h-[350px] text-white font-sans overflow-visible pt-12 pb-300">
    <div 
      class="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
      style="background-image: url('/images/process-bg1-1.png');"
    >

      <div class="absolute inset-0 bg-zinc-900/80 mix-blend-multiply"></div>
    </div>

    <div class="absolute top-0 right-1/4 h-10 w-64 sm:w-80 bg-orange-600 clip-top-banner animate-slide-x pointer-events-none z-10"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 h-full flex flex-col justify-between">

      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
        
  
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-300 uppercase">
            <Triangle class="w-3.5 h-3.5 fill-zinc-300 stroke-none" />
            <span>WORK PROCESS</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            Our services that<br />we provide
          </h2>
        </div>

  
        <div class="flex items-center gap-4 self-start md:self-center">
          <span class="text-sm font-semibold text-zinc-300 text-right leading-tight">
            Play<br />Video
          </span>
          <button 
            class="w-12 h-12 relative rounded-full bg-white flex items-center justify-center text-orange-600 shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Play Video"
          >
        <span class="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-75"></span>

            <Play class="w-5 h-5 fill-current ml-0.5" />
          </button>
        </div>

      </div>


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 translate-y-24">
        
        <div 
          v-for="step in steps" 
          :key="step.number"
          class="bg-white text-zinc-900 p-6 shadow-xl flex flex-col justify-between border-t-2 border-transparent hover:border-orange-500 transition-all duration-300"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="bg-zinc-900 text-white text-xs font-bold px-2 py-1">
                {{ step.number }}
              </span>
              <span class="text-xs font-extrabold text-zinc-500 tracking-wider">
                STEP
              </span>
            </div>

            <h3 class="text-base font-bold text-zinc-900 leading-snug">
              {{ step.title }}
            </h3>

            <p class="text-xs text-zinc-500 font-semibold leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Triangle, Play } from 'lucide-vue-next'

const steps = [
  {
    number: '01',
    title: 'Meet and consultant about project',
    description: 'Industry standard dummy text took since the when an unknown'
  },
  {
    number: '02',
    title: 'Product design and planning',
    description: 'Known printer took a galley of type and scrambled it to make'
  },
  {
    number: '03',
    title: 'Testing and quality control',
    description: 'It has survived not only centuries also the leap into electronic'
  },
  {
    number: '04',
    title: 'Final assembly and project handover',
    description: 'Electronic typesetting conta the popularised in the 1960s'
  }
]
</script>

<style scoped>
.clip-top-banner {
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
}

@keyframes slide-x {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
}

.animate-slide-x {
  animation: slide-x 4s ease-in-out infinite;
}
</style>