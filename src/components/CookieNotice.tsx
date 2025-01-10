'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { MdOutlineCookie } from 'react-icons/md'

const CookieNotice = () => {

    const t = useTranslations('Cookies')

    const [showNotice, setShowNotice] = useState(false)

    useEffect(() => {

        const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

        if (!hasAcceptedCookies) {

            setShowNotice(true)

        }

    }, [])

    const acceptCookies = () => {

        localStorage.setItem('cookiesAccepted', 'true')
        setShowNotice(false)

    }

    return (

        <>

            {showNotice && (

                <div className='fixed z-50 inset-0 flex items-center justify-center bg-gray-800/60'>

                    <div className='bg-white dark:bg-darkBackground rounded-lg p-5 w-10/12 sm:w-[500px] space-y-4 border'>

                        <div className='space-y-2 text-lg'>
                            <h3 className='text-colorLight dark:text-colorDark flex items-center gap-4 font-semibold'>
                                <MdOutlineCookie size={30} />
                                {t('title')}
                            </h3>
                            <p className='text-sm'>{t('desc')}
                                <Link href='/terms/cookies-policy' title={t('cookies')} className='text-customColor'> {t('cookies')}</Link>.
                            </p>
                        </div>

                        <div className='flex justify-center gap-2'>
                            <button onClick={acceptCookies} className='px-5 py-1 rounded-md text-white bg-colorLight dark:bg-colorDark hover:text-hoverLight dark:hover:bg-hoverDark'>
                                {t('accept')}
                            </button>
                            <Link href='https://google.es' title={t('decline')}>
                                <button className='px-5 py-1 text-white bg-gray-600/90 hover:text-gray-600 hover:bg-white/10'>
                                    {t('decline')}
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>

            )}

        </>

    )

}

export default CookieNotice