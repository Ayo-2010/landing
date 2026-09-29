<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        @click="close"
      ></div>
    </Transition>

    <Transition name="panel">
      <aside
        v-if="isOpen"
        class="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-zinc-900 text-white overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Site information"
      >
        <div class="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-zinc-900/95 backdrop-blur-md z-10">
          <router-link to="/" class="flex items-center gap-2" @click="close">
            <Logo with-wordmark />
          </router-link>

          <button
            type="button"
            @click="close"
            aria-label="Close menu"
            class="p-2 text-white hover:text-orange-500 transition-colors"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <div class="px-6 py-7 space-y-8">
          <p class="text-sm text-zinc-300 leading-relaxed max-w-xs">
            A small business can be better than a big business because of agility and adaptability
            due to their size and scale.
          </p>

          <div class="space-y-3 text-sm text-zinc-300">
            <a :href="`tel:${details.phoneHref}`" class="flex items-start gap-3 hover:text-orange-500 transition-colors">
              <Phone class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
              <span>{{ details.phone }}</span>
            </a>
            <p class="flex items-start gap-3">
              <MapPin class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
              <span>{{ details.address }}</span>
            </p>
            <a :href="`mailto:${details.email}`" class="flex items-start gap-3 hover:text-orange-500 transition-colors">
              <Mail class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
              <span>{{ details.email }}</span>
            </a>
          </div>

          <div class="flex flex-wrap gap-2">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.url"
              :aria-label="social.label"
              class="w-9 h-9 bg-zinc-800 hover:bg-orange-600 text-white flex items-center justify-center transition-colors"
            >
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-5">Recent Posts</h2>
            <ul class="space-y-5">
              <li v-for="post in recentPosts" :key="post.id">
                <router-link :to="post.link" class="flex items-center gap-5 group" @click="close">
                  <div class="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                    <img
                      :src="post.image"
                      :alt="post.title"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div class="flex flex-col-reverse">
                    <span class="flex items-center gap-1.5 text-xs text-zinc-400">
                      <Calendar class="w-3.5 h-3.5 text-orange-500" />
                      {{ post.day }} {{ post.month }}
                    </span>
                    <h3 class="font-semibold text-base leading-snug text-white group-hover:text-orange-500 transition-colors">
                      {{ post.title }}
                    </h3>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <router-link
            to="/contact"
            @click="close"
            class="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-xs py-3.5 px-6 rounded-lg transition-colors"
          >
            <span>Get In Touch</span>
            <ArrowUpRight class="w-4 h-4" />
          </router-link>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup>
import { X, Phone, MapPin, Mail, Calendar, ArrowUpRight } from 'lucide-vue-next'
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-vue-next'
import posts from '../data/posts.ts'
import Logo from './Logo.vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const close = () => emit('close')

const details = {
  phone: '+85 155 596 1658',
  phoneHref: '851555961658',
  address: 'Losangle, Street Road 24, New York, USA - 67452',
  email: 'support@gmail.com'
}

const socials = [
  { label: 'X', url: 'https://x.com', icon: Twitter },
  { label: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', url: 'https://facebook.com', icon: Facebook },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin }
]

const recentPosts = posts.value.slice(0, 4)
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.panel-enter-active,
.panel-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.panel-enter-from,
.panel-leave-to {
  transform: translateX(100%);
}
</style>
