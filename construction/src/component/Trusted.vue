<template>
  <div class="text-white bg-gray-700 py-12 px-4 sm:px-6 lg:px-8 text-center">
   <div class="max-w-7xl mx-auto">
     <h2 class="font-bold text-2xl sm:text-3xl">Trusted by Thousands</h2>
    <p class="mt-2 text-gray-300">We are trusted by thousands of satisfied customers worldwide.</p>
    
    <div class="flex py-8 overflow-hidden relative w-full group">
      <div class="flex shrink-0 items-stretch animate-marquee group-hover:[animation-play-state:paused]">
        <div 
          v-for="(company, index) in trustedCompanies" 
          :key="'orig-' + index" 
          class="px-16 shrink-0 flex items-center justify-center border-r border-gray-600"
        >
          <img :src="company.logo" :alt="company.name" class="w-auto object-contain" />
        </div>
      </div>

      <div class="flex shrink-0 items-stretch animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
        <div 
          v-for="(company, index) in trustedCompanies" 
          :key="'dup-' + index" 
          class="px-16 shrink-0 flex items-center justify-center border-r border-gray-600"
        >
          <img :src="company.logo" :alt="company.name" class="w-auto object-contain" />
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script setup>
const trustedCompanies = [
  { name: 'Company A', logo: '/images/client-1-1.svg' },
  { name: 'Company B', logo: '/images/client-1-2.svg' },
  { name: 'Company C', logo: '/images/client-1-3.svg' },
  { name: 'Company D', logo: '/images/client-1-4.svg' },
  { name: 'Company E', logo: '/images/client-1-5.svg' },
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}
</style>