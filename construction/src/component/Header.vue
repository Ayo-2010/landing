<script setup>
import { ref, onUnmounted, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, LayoutGrid, Menu, X, ShoppingCart } from 'lucide-vue-next'
import { useCart } from '../composables/useCart'
import SideMenu from './SideMenu.vue'

const { itemCount } = useCart()

const isMobileMenuOpen = ref(false)
const isSideMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  isSideMenuOpen.value = false
}

const handleKeyDown = (event) => {
  if (event.key !== 'Escape') return
  if (isSideMenuOpen.value) {
    isSideMenuOpen.value = false
  } else if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleKeyDown))
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown))

watch(
  () => route.path,
  closeAllMenus
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
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/work">Work</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/news">News</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/shop">Shop</router-link></li>
          <li><router-link class="text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/contact">Contact</router-link></li>
          <li>
            <router-link class="text-white hover:text-orange-500 transition-colors active:text-orange-500 flex items-center gap-1.5" to="/cart">
              <ShoppingCart class="w-5 h-5" />
              <span v-if="itemCount > 0" class="bg-orange-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{{ itemCount }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="flex">
        <div class="hidden sm:flex gap-4 items-center justify-center">
        <div class="right flex gap-4 items-center justify-center border-r border-white/40 pr-4">
          <router-link
            to="/contact"
            class="bg-orange-600 hover:bg-orange-700 transition-colors text-white flex items-center gap-1.5 font-bold rounded-lg px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight class="w-4 h-4" />
          </router-link>
        </div>
        <button
          type="button"
          @click="isSideMenuOpen = true"
          aria-label="Open site information menu"
          class="cursor-pointer hidden lg:block"
        >
          <LayoutGrid class="w-5 h-5 text-white hover:text-orange-500 transition-colors" />
        </button>
      </div>

      <div class="flex items-center gap-3 lg:hidden">
        <button
          type="button"
          @click="isSideMenuOpen = true"
          aria-label="Open site information menu"
          class="p-2 text-white hover:text-orange-500 transition-colors"
        >
          <LayoutGrid class="w-5 h-5" />
        </button>
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
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/shop">Shop</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/news">News</router-link></li>
          <li><router-link @click="isMobileMenuOpen = false" class="block text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/contact">Contact</router-link></li>
          <li>
            <router-link @click="isMobileMenuOpen = false" class="flex items-center gap-2 text-white hover:text-orange-500 transition-colors" active-class="text-orange-500" to="/cart">
              Cart
              <span v-if="itemCount > 0" class="bg-orange-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{{ itemCount }}</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="pt-4 border-t border-white/10 flex flex-col gap-4">
        <router-link
          to="/contact"
          @click="closeAllMenus"
          class="w-full bg-orange-600 hover:bg-orange-700 transition-colors text-white flex justify-center items-center gap-2 font-bold rounded-lg py-3 text-sm"
        >
          <span>GET IN TOUCH</span>
          <ArrowUpRight class="w-4 h-4" />
        </router-link>
        <div class="flex justify-center items-center pt-2">
          <button
            type="button"
            @click="isSideMenuOpen = true; isMobileMenuOpen = false"
            aria-label="Open site information menu"
            class="p-2 text-white hover:text-orange-500 transition-colors"
          >
            <LayoutGrid class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <SideMenu :is-open="isSideMenuOpen" @close="isSideMenuOpen = false" />
</template>