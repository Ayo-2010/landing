<script setup>
import { ref , onUnmounted , watch , onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, LayoutGrid, Search, Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false
  }
)
</script>

<template>
  <header class="w-full bg-transparent shadow text-white">
    <div class="max-w-7xl mx-auto flex justify-between items-center p-4 px-4 sm:px-8 lg:px-16 font-bold">
      
      <div class="flex gap-2 justify-center items-center">
        <span class="logo font-bold text-2xl sm:text-3xl border-4 px-0.5 py-0.5 text-center leading-none">Cn</span>
        <span class="logo font-bold text-xl sm:text-3xl tracking-tight">Construction</span>
      </div>

      <nav class="hidden lg:block">
        <ul class="flex justify-between items-center gap-6 xl:gap-8 text-sm xl:text-base">
          <li><router-link class="text-white hover:text-orange-500 transition-colors" exact-active-class="text-orange-500" to="/">Home</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/about">About</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/services">Services</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/pages">Pages</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/news">News</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <div class="hidden sm:flex gap-4 items-center justify-center">
        <div class="right flex gap-4 items-center justify-center border-r border-white/40 pr-4">
          <button class="bg-orange-600 hover:bg-orange-700 transition-colors text-white flex items-center gap-1.5 font-bold rounded-lg px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm">
            <span>GET IN TOUCH</span>
            <ArrowUpRight class="w-4 h-4" />
          </button>
          <Search class="w-5 h-5 cursor-pointer text-white hover:text-orange-500 transition-colors"/>
        </div>
        <LayoutGrid class="w-5 h-5 cursor-pointer text-white hover:text-orange-500 transition-colors"/>
      </div>

      <div class="flex items-center gap-3 lg:hidden">
        <Search class="w-5 h-5 sm:hidden cursor-pointer text-white hover:text-orange-500 transition-colors"/>
        <button 
          @click="toggleMobileMenu" 
          class="p-2 text-white hover:text-orange-500 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

    </div>
    
    <div 
      v-if="isMobileMenuOpen" 
      class="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4"
    >
      <nav>
        <ul class="flex flex-col gap-4 text-base font-semibold">
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" exact-active-class="text-orange-500" to="/">Home</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/about">About</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/services">Services</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/pages">Pages</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/news">News</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <div class="pt-4 border-t border-white/10 flex flex-col gap-4">
        <button class="w-full bg-orange-600 hover:bg-orange-700 transition-colors text-white flex justify-center items-center gap-2 font-bold rounded-lg py-3 text-sm">
          <span>GET IN TOUCH</span>
          <ArrowUpRight class="w-4 h-4" />
        </button>
        <div class="flex justify-around items-center pt-2">
          <Search class="w-5 h-5 cursor-pointer text-white hover:text-orange-500 transition-colors"/>
          <LayoutGrid class="w-5 h-5 cursor-pointer text-white hover:text-orange-500 transition-colors"/>
        </div>
      </div>
    </div>
  </header>
</template>