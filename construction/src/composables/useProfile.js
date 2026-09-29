import { ref } from 'vue'

export function useProfile() {
  const profile = ref({
    name: 'John Doe',
    title: 'Senior Engineer',
    bio: 'John is a highly skilled engineer with over 10 years of experience in the construction industry. He specializes in project management and structural design.',
    avatar: '/images/house.png',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  })

  return { profile }
}