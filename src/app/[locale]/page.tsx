import { unstable_setRequestLocale } from 'next-intl/server'

import Header from '@/components/Home/Header'
import About from '@/components/Home/About'
import CareerPath from '@/components/Home/CareerPath'
import Education from '@/components/Home/Education'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'

interface HomeProps {

  params: {

    locale: string

  }

}

export default function Home({ params: { locale } }: HomeProps) {

  unstable_setRequestLocale(locale)

  return (

    <main className='pb-20 space-y-10 mx-auto lg:max-w-3xl'>

      <Header />
      <About />
      <CareerPath />
      <Education />
      <Projects />
      <Skills />

    </main>

  )

}