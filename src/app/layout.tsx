'use client'

import { ReactNode, useEffect } from 'react'

import './globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Props {

  children: ReactNode

}

export default function RootLayout({ children }: Props) {

  useEffect(() => {

    AOS.init()

  }, [])

  return children

}