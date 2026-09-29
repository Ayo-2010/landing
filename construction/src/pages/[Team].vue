<template>
  <div>
        <MainSection title="Our Team" />

    <div v-if="member" class="max-w-7xl mx-auto px-4 py-12 lg:py-16 text-zinc-800 space-y-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-zinc-100 shadow-sm rounded-2xl p-6 sm:p-8">
      <div class="lg:col-span-5 w-full h-[380px] sm:h-[450px] rounded-xl overflow-hidden bg-zinc-100">
        <img 
          :src="member.image" 
          :alt="member.name" 
          class="w-full h-full object-cover object-top"
          @error="$event.target.style.display = 'none'"
        />
      </div>

      <div class="lg:col-span-7 space-y-6">
        <div>
          <span class="text-orange-500 font-semibold text-sm uppercase tracking-wider">Hello I'm</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1">{{ member.name }}</h2>
          <p class="text-zinc-500 text-lg font-medium mt-1">{{ member.role }}</p>
        </div>

        <hr class="border-zinc-200" />

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
          <div>
            <span class="font-bold text-zinc-900 block">Department:</span>
            <span class="text-zinc-600">{{ member.department }}</span>
          </div>

          <div>
            <span class="font-bold text-zinc-900 block">Experience:</span>
            <span class="text-zinc-600">{{ member.experience }}</span>
          </div>

          <div>
            <span class="font-bold text-zinc-900 block">Email:</span>
            <a :href="`mailto:${member.email}`" class="text-orange-500 hover:underline">
              {{ member.email }}
            </a>
          </div>

          <div>
            <span class="font-bold text-zinc-900 block">Phone:</span>
            <a :href="`tel:${member.phone}`" class="text-zinc-600 hover:text-orange-500 transition-colors">
              {{ member.phone }}
            </a>
          </div>
        </div>

        <hr class="border-zinc-200" />

        <div class="flex items-center gap-3">
          <a 
            v-for="social in member.socials" 
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full bg-zinc-100 hover:bg-orange-500 text-zinc-700 hover:text-white flex items-center justify-center transition-all duration-300"
            :aria-label="social.name"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <div class="bg-zinc-50 border border-zinc-200/60 p-6 sm:p-8 rounded-2xl">
      <p class="text-zinc-700 leading-relaxed text-base sm:text-lg">
        <span class="text-orange-500 font-bold mr-1">{{ member.greeting }}</span>
        {{ member.bio }}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div class="space-y-6">
        <div>
          <h3 class="text-2xl font-bold text-zinc-900">Professional Skills</h3>
          <p class="text-zinc-500 text-sm mt-1 leading-relaxed">
            Proven engineering expertise and site operational capabilities delivered over years of service.
          </p>
        </div>

        <div class="space-y-5">
          <div v-for="skill in member.skills" :key="skill.title" class="space-y-2">
            <div class="flex justify-between items-center text-sm font-bold text-zinc-800">
              <span>{{ skill.title }}</span>
              <span class="text-orange-500">{{ skill.percentage }}%</span>
            </div>
            <div class="w-full h-2.5 bg-zinc-200 rounded-full overflow-hidden">
              <div 
                class="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out" 
                :style="{ width: `${skill.percentage}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <h3 class="text-2xl font-bold text-zinc-900">Education Experience</h3>
          <p class="text-zinc-500 text-sm mt-1 leading-relaxed">
            Academic milestones and workplace achievements across leadership roles.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            v-for="item in member.education" 
            :key="item.number"
            class="flex items-start gap-4 p-4 bg-white border border-zinc-200 rounded-xl hover:shadow-md transition-shadow"
          >
            <div class="w-10 h-10 shrink-0 rounded-lg bg-orange-500 text-white font-bold flex items-center justify-center text-sm">
              {{ item.number }}
            </div>
            <div>
              <h4 class="font-bold text-zinc-900 text-base leading-snug">{{ item.title }}</h4>
              <p class="text-xs text-zinc-500 mt-1">
                {{ item.years }} <span class="text-orange-500 font-medium">@ {{ item.company }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import teamMembers from '../data/team.ts'
import MainSection from '../component/MainSection.vue'


const route = useRoute()

const member = computed(() => {
  const slug = route.params.team
  return teamMembers.find((m) => m.slug === slug) || teamMembers[0]
})
</script>