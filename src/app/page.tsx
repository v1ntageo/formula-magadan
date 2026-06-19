import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { SelfService } from '@/components/sections/SelfService'
import { Contacts } from '@/components/sections/Contacts'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SelfService />
      <Contacts />
    </>
  )
}