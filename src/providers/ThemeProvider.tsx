'use client'

import { ReactNode, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

interface ThemeWrapperProps {

    children: ReactNode

}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const theme = localStorage.getItem('theme') || 'light'
            document.documentElement.setAttribute('data-theme', theme)
            
        }

    }, [])

    return <ThemeProvider attribute='class' defaultTheme='system' enableSystem>{children}</ThemeProvider>

}

export default ThemeWrapper
