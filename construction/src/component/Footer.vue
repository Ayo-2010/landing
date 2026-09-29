<template>
  <footer class="bg-black text-gray-400 font-sans font-semibold py-12 px-6 lg:px-16 border-t border-gray-900"
    :class="route.path == '/' ? 'pt-50' : 'py-12' "
  >
    <div class="max-w-7xl mx-auto space-y-12">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6 pb-10 border-b border-gray-800/80">
        <div class="flex gap-2 justify-center items-center text-white">
          <span class="logo font-bold text-3xl sm:text-4xl border-4 px-1 py-0.5 text-center leading-none">Cn</span>
          <span class="logo font-bold text-2xl sm:text-4xl tracking-tight">Construction</span>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
          <p class="text-sm text-gray-300 font-semibold max-w-xs text-center md:text-right">
            Subscribe for the latest news. Stay updated on the latest trends.
          </p>
          <form @submit.prevent="handleSubscribe" class="flex rounded-lg py-2 px-2 bg-zinc-800 overflow-hidden w-full md:w-auto">
            <input 
              v-model="email"
              type="email" 
              placeholder="Email" 
              required 
              class="bg-zinc-800 text-white placeholder-gray-400 font-semibold px-2 py-2 text-base focus:outline-none w-full md:w-64"
            />
            <button 
              type="submit" 
              class="bg-orange-600 hover:bg-orange-500 rounded-lg text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <span>SUBSCRIBE</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
          <h3 class="text-white font-bold text-xl">About Company</h3>
          <p class="text-sm text-gray-400 font-semibold leading-relaxed">
            A small business can be better than a big business because of agility and adaptability due to their size and scale.
          </p>
          <div class="text-orange-500 text-transparent [-webkit-text-stroke:2px_#f97316] text-3xl font-bold pt-2">Since 2000</div>
          <div class="space-y-1 pt-2">
            <p class="text-sm font-semibold text-white tracking-wide">WE ARE AVAILABLE</p>
            <p class="text-sm text-gray-400 font-semibold"><span class="text-orange-500">Mon-Sat:</span> 10:00am to 07:30pm</p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-white font-bold text-xl">Useful Links</h3>
          <div class="grid grid-cols-2 gap-x-9 gap-y-3 text-sm font-semibold">
            <router-link to="/about" class="hover:text-orange-500 transition-colors">About</router-link>
            <router-link to="/team" class="hover:text-orange-500 transition-colors">Our Team</router-link>
            <router-link to="/services" class="hover:text-orange-500 transition-colors">What We Do</router-link>
            <router-link to="/careers" class="hover:text-orange-500 transition-colors">Careers</router-link>
            <router-link to="/news" class="hover:text-orange-500 transition-colors">News & Article</router-link>
            <router-link to="/testimonials" class="hover:text-orange-500 transition-colors">Testimonials</router-link>
            <router-link to="/work" class="hover:text-orange-500 transition-colors">Success Story</router-link>
            <router-link to="/legal/privacy" class="hover:text-orange-500 transition-colors">Privacy Policy</router-link>
            <router-link to="/legal/faq" class="hover:text-orange-500 transition-colors">FAQ's</router-link>
            <router-link to="/legal/terms" class="hover:text-orange-500 transition-colors">Terms of use</router-link>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-white font-bold text-xl mb-3">Office Address</h3>
            <p class="text-sm text-gray-400 font-semibold leading-relaxed">
              Losangle, Street Road 24, New York,<br />USA - 67452
            </p>
          </div>
          <div>
            <h3 class="text-white font-bold text-xl mb-3">Email Address</h3>
            <a href="mailto:support@gmail.com" class="text-sm text-gray-400 font-semibold hover:text-orange-500 transition-colors">
              support@gmail.com
            </a>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-white font-bold text-xl mb-3">Phone Number</h3>
            <p class="text-sm text-gray-400 font-semibold">+121 551 579 266</p>
            <p class="text-sm text-gray-400 font-semibold">+85 155 596 1658</p>
          </div>
          <div>
            <h3 class="text-white font-bold text-xl mb-3">Follow Us</h3>
            <div class="flex items-center gap-2">
              <a href="#" aria-label="X" class="w-9 h-9 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" class="w-9 h-9 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" class="w-9 h-9 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="w-9 h-9 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800/80 text-sm font-semibold">
        <p>© 2026 <span class="text-white font-bold">Construction</span> | All rights reserved</p>
        <div class="flex items-center gap-6">
          <router-link to="/legal/terms" class="hover:text-orange-500 transition-colors">Terms & Condition</router-link>
          <router-link to="/legal/privacy" class="hover:text-orange-500 transition-colors">Privacy Policy</router-link>
          <router-link to="/contact" class="hover:text-orange-500 transition-colors">Contact Us</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import {useRoute} from 'vue-router'

const email = ref('')
const route = useRoute()

const handleSubscribe = () => {
  email.value = ''
}
</script>
