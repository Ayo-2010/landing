<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div class="text-left mb-12">
            <HeadingBadge text="Our Team" />
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet the Backbone
            </h2>
          </div>
        </div>

        <router-link
          to="/team"
          v-show="!show"
          class="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold text-sm tracking-wide uppercase px-6 py-3 rounded hover:bg-orange-700 transition-colors self-start md:self-auto"
        >
          View All Members
          <ArrowUpRight :size="18" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="member in displayedTeamMembers"
          :key="member.id"
          class="relative bg-cover team-bg bg-no-repeat bg-slate-50 border min-h-[450px] border-slate-100 rounded-lg p-6 pt-8 flex flex-col justify-between overflow-hidden group hover:border-orange-500 transition-colors duration-300"
        >
          <div class="relative z-10">
            <router-link :to="`/team/${member.slug}`" class="block">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                {{ member.name }}
              </h3>
            </router-link>

            <p class="text-sm text-slate-500 mt-1 mb-4">
              {{ member.role }}
            </p>

            <div class="flex items-center gap-2 mb-6">
              <a
                v-for="(social, index) in member.socials"
                :key="index"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-7 h-7 rounded bg-slate-200/60 flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-colors"
                :title="social.name"
              >
                <component :is="social.icon" :size="14" />
              </a>
            </div>
          </div>

          <router-link :to="`/team/${member.slug}`" class="absolute right-5 mt-4 flex justify-end bottom-0">
            <img
              :src="member.image"
              :alt="member.name"
              class="object-cover object-bottom h-[350px]"
            />
          </router-link>

          <a
            :href="`tel:${member.phone}`"
            class="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-105 z-20"
            :title="member.phone"
          >
            <Phone :size="16" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowUpRight, Phone } from 'lucide-vue-next'
import teamMembers from '../data/team'
import HeadingBadge from './HeadingBadge.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const show = computed(() => route.path === '/team')

const props = defineProps({
  limit: {
    type: [Number, String],
    default: null
  }
})

const displayedTeamMembers = computed(() => {
  const numLimit = Number(props.limit)
  
  if (numLimit && numLimit > 0) {
    return teamMembers.slice(0, numLimit)
  }
  
  return teamMembers
})
</script>

<style scoped>
.team-bg {
  background-image: url(/images/team-card-bg1-1.png);
}
</style>
