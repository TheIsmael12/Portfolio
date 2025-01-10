import { unstable_setRequestLocale } from 'next-intl/server'

import Header from '@/pages/Home/Header'
import About from '@/pages/Home/About'
import CareerPath from '@/pages/Home/CareerPath'
import Education from '@/pages/Home/Education'
import Projects from '@/pages/Home/Projects'
import Skills from '@/pages/Home/Skills'

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