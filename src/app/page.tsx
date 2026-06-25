import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Certificates } from '@/components/sections/Certificates'
import { SelfService } from '@/components/sections/SelfService'
import { Gallery } from '@/components/sections/Gallery'
import { Contacts } from '@/components/sections/Contacts'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Certificates />
      <SelfService />
      <Gallery />
      <Contacts />
    </>
  )
}