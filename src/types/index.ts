export interface Service {
  id: string
  title: string
  description: string
  phones: string[]
  schedule: string
  scheduleNote?: string
  icon: string
}

export interface SiteData {
  companyName: string
  tagline: string
  subTagline: string
  email: string
  address: string
  services: Service[]
  selfService: {
    title: string
    description: string
    schedule: string
  }
  heroButtons: {
    text: string
    action: string
    variant: 'primary' | 'secondary'
  }[]
  certificates: string[]
  gallery: string[]
}