<template>
  <div class="bg-white">
    <MainSection title="Contact Us" />

    <section class="py-12 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="w-1 h-4 bg-orange-600 rounded-full inline-block"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-600">Get in touch</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Let's build something that lasts
          </h1>
          <p class="text-zinc-600 mt-4">
            Tell us about your project and one of our engineers will get back to you within one business day.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Contact Form -->
          <div class="lg:col-span-7 border border-zinc-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h2 class="text-xl font-bold text-zinc-900 mb-6">Send us a message</h2>

            <form @submit.prevent="handleSubmit" class="space-y-4" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Full Name</label>
                  <input v-model.trim="form.name" type="text" placeholder="John Doe" :class="inputClass" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Company</label>
                  <input v-model.trim="form.company" type="text" placeholder="Optional" :class="inputClass" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Email</label>
                  <input v-model.trim="form.email" type="email" placeholder="you@company.com" :class="inputClass" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Phone</label>
                  <input v-model.trim="form.phone" type="tel" placeholder="+1 (555) 000-0000" :class="inputClass" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Service Needed</label>
                  <select v-model="form.service" :class="inputClass">
                    <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-zinc-600 mb-1.5">Project Details</label>
                  <textarea
                    v-model.trim="form.message"
                    rows="5"
                    placeholder="Scope, location, timeline and any deadlines we should know about."
                    :class="inputClass"
                  ></textarea>
                </div>
              </div>

              <p v-if="formError" class="text-xs text-red-600">{{ formError }}</p>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-xl transition-colors"
              >
                <Loader2 v-if="isSubmitting" class="animate-spin" :size="16" />
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <div v-if="sent" class="mt-6 flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <CheckCircle2 class="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-600" />
              <div>
                <p class="text-sm font-semibold text-emerald-800">Message sent</p>
                <p class="text-xs text-emerald-700 mt-0.5">Thanks {{ form.name }}. We will reply within one business day.</p>
              </div>
            </div>
          </div>

          <!-- Contact Details -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-[#f3f3f1] border border-zinc-100 rounded-2xl p-6 sm:p-8">
              <h2 class="text-xl font-bold text-zinc-900 mb-6">Office details</h2>
              <ul class="space-y-5">
                <li v-for="item in details" :key="item.label" class="flex items-start gap-4">
                  <span class="w-10 h-10 flex-shrink-0 rounded-lg bg-white border border-zinc-100 flex items-center justify-center">
                    <component :is="item.icon" class="w-5 h-5 text-orange-600" />
                  </span>
                  <div>
                    <p class="text-xs uppercase tracking-wider text-zinc-500 font-semibold">{{ item.label }}</p>
                    <p class="text-sm text-zinc-800 font-semibold mt-0.5">
                      <a :href="item.href" class="hover:text-orange-600 transition-colors">{{ item.value }}</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
              <img
                src="/images/contact-bg4-1.png"
                alt="Construction site"
                class="w-full h-56 object-cover"
              />
            </div>

            <div class="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8">
              <h2 class="text-lg font-bold mb-2">Need a quote today?</h2>
              <p class="text-sm text-zinc-300 mb-5">
                Browse our equipment catalogue and get transparent pricing without a site visit.
              </p>
              <router-link
                to="/shop"
                class="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest text-xs py-3 px-6 rounded-xl transition-colors"
              >
                Visit the Shop
                <ArrowUpRight :size="14" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-vue-next'
import MainSection from '../component/MainSection.vue'
import services from '../data/service.ts'

const inputClass = 'w-full px-4 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-orange-500'

const serviceOptions = ['General enquiry', ...services.value.map(item => item.title)]

const details = [
  { label: 'Office Address', value: 'Street Road 24, New York, USA - 67452', icon: MapPin, href: '#' },
  { label: 'Phone', value: '+121 551 579 266', icon: Phone, href: 'tel:+121551579266' },
  { label: 'Email', value: 'support@gmail.com', icon: Mail, href: 'mailto:support@gmail.com' },
  { label: 'Availability', value: 'Mon - Sat: 10:00am to 07:30pm', icon: Clock, href: '#' }
]

const isSubmitting = ref(false)
const sent = ref(false)
const formError = ref('')

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: serviceOptions[0],
  message: ''
})

const handleSubmit = async () => {
  formError.value = ''

  if (!form.name) {
    formError.value = 'Please enter your name.'
    return
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
    formError.value = 'Please enter a valid email address.'
    return
  }
  if (!form.message) {
    formError.value = 'Tell us a little about the project.'
    return
  }

  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  sent.value = true

  form.name = ''
  form.company = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>
