'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Logo = () => {

    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {

        setMounted(true)

    }, [])

    if (!mounted) return <Image className='w-32 lg:w-36 h-auto' src='/assets/images/ismaelletras.png' alt='Logo' title='Logo' priority={true} width={200} height={200}/>

    return (

        <Link href='/' title='Inicio'>

            {theme === 'dark' ? (

                <Image
                    className='w-32 lg:w-36 h-auto'
                    src='/assets/images/ismaelletras.png'
                    alt='Logo'
                    title='Logo'
                    priority={true}
                    width={200}
                    height={200}
                />

            ) : (

                <Image
                    className='w-32 lg:w-36 h-auto'
                    src='/assets/images/ismaelletras.png'
                    alt='Logo'
                    title='Logo'
                    priority={true}
                    width={200}
                    height={200}
                />

            )}

        </Link>
    )
}

export default Logo