import { ref } from 'vue'
import type { LucideIcon } from 'lucide-vue-next'
import { SearchCode } from 'lucide-vue-next'

export interface FeatureSolution {
  title: string
  icon: LucideIcon
}

const featureSolutions = ref<FeatureSolution[]>([
  {
    title: 'Providing Solutions For Construction, Management',
    icon: SearchCode
  },
  {
    title: 'Expert Engineering & Quality Architecture Services',
    icon: SearchCode
  }
])

export default featureSolutions