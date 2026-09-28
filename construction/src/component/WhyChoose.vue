<template>
  <section class="relative w-full bg-white pt-20 pb-0 overflow-hidden font-sans">
    <div 
      class="absolute top-4 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl md:text-9xl font-black text-gray-100/80 whitespace-nowrap select-none pointer-events-none z-0"
    >
      Why Choose Us
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
      

      <div class="text-center space-y-2 mb-12 sm:mb-16">
        <div class="flex items-center justify-center gap-2 text-orange-500 font-bold text-xs tracking-wider uppercase">
          <Triangle class="w-3.5 h-3.5 fill-orange-500 stroke-none" />
          <span>WHY CHOOSE US</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-900 tracking-tight">
          High Quality Innovate Design
        </h2>
      </div>


      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
  
        <div class="lg:col-span-4 space-y-10 sm:space-y-12">
          
    
          <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-right gap-4 justify-end">
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Technology</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                We are expert your all work is very nice waiting for next project.
              </p>
            </div>
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <Workflow class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
          </div>

    
          <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-right gap-4 justify-end">
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Core Planning</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
            </div>
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <FileSignature class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
          </div>

    
          <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-right gap-4 justify-end">
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Project Result</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                Making this the first true generator on the Internet uses a dictionary
              </p>
            </div>
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <Building2 class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
          </div>

        </div>

  
        <div class="lg:col-span-4 flex justify-center items-end relative min-h-[420px] sm:min-h-[500px]">
          <img 
            src="/images/why_1-1.png" 
            alt="Construction Manager" 
            class="max-h-[520px] w-auto object-contain z-10"
          />
        </div>

  
        <div class="lg:col-span-4 space-y-10 sm:space-y-12">
          
    
          <div class="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-4 justify-start">
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <ShieldCheck class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Trusted Clients</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                Passage of Lorem Ipsum, you need to be sure there isn't anything
              </p>
            </div>
          </div>

    
          <div class="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-4 justify-start">
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <Users class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Skilled Team</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                We are expert your all work is very nice waiting for next project.
              </p>
            </div>
          </div>

    
          <div class="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-4 justify-start">
            <div class="p-3 bg-orange-50/50 rounded-lg shrink-0">
              <PiggyBank class="w-10 h-10 text-orange-500 stroke-[1.5]" />
            </div>
            <div class="space-y-1">
              <h3 class="text-xl font-bold text-zinc-900">Save Money</h3>
              <p class="text-xs sm:text-sm text-zinc-500 font-semibold leading-relaxed max-w-xs sm:max-w-none">
                We are expert your all work is very nice waiting for next project.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

    <Marquee class="scale-y-[-1] absolute bottom-0"/>
  </section>
</template>

<script setup>
import Marquee from "../component/Marquee.vue"
import { 
  Triangle, 
  Workflow, 
  FileSignature, 
  Building2, 
  ShieldCheck, 
  Users, 
  PiggyBank 
} from 'lucide-vue-next'
</script>

<style scoped>
.clip-banner {
  clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
}
</style>