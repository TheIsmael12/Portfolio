'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeSwitch() {

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (

        <></>

    )

    return (

        <button className='hover:text-colorLight dark:hover:text-colorDark' title='Theme'
        
            onClick={() => resolvedTheme == 'dark' ? (setTheme('light')) : (setTheme('dark'))}>

            {
                resolvedTheme == 'dark' ? (

                    <FiSun size={20}/>

                ) : (
                    
                    <FiMoon size={20}/>

                )
            }

        </button>

    )

}