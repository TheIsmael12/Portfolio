'use client'

import { useState, useEffect } from 'react'

import { BsChevronUp } from 'react-icons/bs'

const TopButton = () => {

    const [showButton, setShowButton] = useState(false)

    const handleClick = () => {

        window.scrollTo({ top: 0, behavior: 'smooth' })

    }

    const handleScroll = () => {

        const scrollY = window.scrollY
        setShowButton(scrollY > 200)

    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (

        <div className={showButton ? 'fixed z-10 bottom-0 right-0 md:right-10' : 'hidden'}>

            <button
                onClick={handleClick}
                className='hidden md:flex justify-center items-center p-4 text-2xl font-bold border text-white bg-colorLight dark:bg-colorDark dark:border-none hover:bg-hoverLight dark:hover:bg-hoverDark'>
                <BsChevronUp />
            </button>

        </div>

    )

}

export default TopButton