import type { LucideIcon } from 'lucide-vue-next'
import { HardHat, ShieldCheck, Award, Trophy, Wallet, ShieldCheck as ShieldWithCheck } from 'lucide-vue-next'

export interface BenefitItem {
  title: string
  icon: LucideIcon
}

const benefits: BenefitItem[] = [
  {
    title: 'Professional Engineers',
    icon: HardHat
  },
  {
    title: 'Hassle-Free Service',
    icon: ShieldCheck
  },
  {
    title: '10 years of experience',
    icon: Award
  },
  {
    title: 'Award Winning Company',
    icon: Trophy
  },
  {
    title: 'Excellent Financing',
    icon: Wallet
  },
  {
    title: 'Best Roofing Warranty',
    icon: ShieldWithCheck
  }
]

export default benefits