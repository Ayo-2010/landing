<template>
  <section class="w-full bg-white px-7 pt-20 md:px-10 lg:px-12">
    <div class="mx-auto grid max-w-[1100px] grid-cols-1 gap-x-[18px] gap-y-[34px] md:grid-cols-2 lg:grid-cols-3">
      <div class="h-[230px]">
        <HeadingBadge text="What we do" class="mb-[22px] text-[11px] md:text-[12px]" />

        <h2 class="text-[40px] font-semibold leading-[1.05] tracking-[-1.6px] text-[#17181c] md:text-[48px]">
          Our services that
          <br />
          we provide
        </h2>

        <p class="mt-[18px] max-w-[320px] text-[12px] leading-[1.8] text-gray-500 md:text-[13px]">
          We craft unique digital experiences. With more than 7 years of
          expertise we design and code clean
        </p>
      </div>

      <article
        v-for="service in services"
        :key="service.number"
        class="group relative flex h-[230px] w-full border border-transparent bg-[#f7f7f7] transition-colors duration-300 hover:border-orange-500"
      >
        <div class="flex w-[58px] shrink-0 items-center justify-center overflow-hidden">
          <span class="block -translate-x-[1px] -rotate-90 whitespace-nowrap text-[20px] font-medium leading-none tracking-[0.5px] text-[#e4e4e4]">
            SERVICES - {{ service.number }}
          </span>
        </div>

        <div class="flex min-w-0 flex-1 flex-col pr-[28px] pt-[18px]">
          <div class="flex h-[52px] items-start">
            <component
              :is="service.icon"
              :size="48"
              :stroke-width="1.4"
              class="shrink-0 text-orange-500"
            />

            <div class="ml-[34px] mt-[23px] h-px flex-1 bg-[#dddddd]" />
          </div>

          <h3 class="mt-[22px] text-[18px] font-semibold leading-[1.1] tracking-[-0.2px] text-[#17181c] md:text-[20px]">
            {{ service.title }}
          </h3>

          <p class="mt-[8px] max-w-[200px] text-[12px] font-normal leading-[1.7] text-gray-500 md:text-[13px]">
            {{ service.description }}
          </p>
        </div>

        <button
          type="button"
          :aria-label="`Explore ${service.title}`"
          class="group/button absolute -bottom-[18px] right-[46px] z-10 h-[38px] w-[38px] overflow-hidden bg-[#dddddd] text-orange-500 transition-[width,background-color,color] duration-300 ease-out group-hover:w-[138px] hover:bg-gray-700 hover:text-white"
        >
          <span class="absolute left-[16px] top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Explore service
          </span>

          <span class="absolute right-0 top-0 flex h-[38px] w-[38px] items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <ArrowUpRight :size="14" :stroke-width="2.3" />
          </span>
        </button>
      </article>
    </div>
  </section>
</template>

<script setup>
import HeadingBadge from './HeadingBadge.vue'
import {
  ArrowUpRight,
  Construction,
  House,
  HardHat,
  DraftingCompass,
} from 'lucide-vue-next'

const services = [
  {
    number: '01',
    title: 'General construction',
    description: 'There are many passages of lorem ipsum available',
    icon: Construction,
  },
  {
    number: '02',
    title: 'Property maintenance',
    description: 'There are many passages of lorem ipsum available',
    icon: House,
  },
  {
    number: '03',
    title: 'Project management',
    description: 'There are many passages of lorem ipsum available',
    icon: HardHat,
  },
  {
    number: '04',
    title: 'Virtual design & build',
    description: 'There are many passages of lorem ipsum available',
    icon: DraftingCompass,
  },
  {
    number: '05',
    title: 'Proconstruction',
    description: 'There are many passages of lorem ipsum available',
    icon: HardHat,
  },
]
</script>
