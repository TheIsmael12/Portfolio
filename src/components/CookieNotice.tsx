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

                    <div className='bg-white dark:bg-backgroundColor rounded-lg p-5 w-10/12 sm:w-[500px] space-y-4 border'>

                        <div className='space-y-2 text-lg'>
                            <h3 className='text-customColor flex items-center gap-4 font-semibold'>
                                <MdOutlineCookie size={30} />
                                {t('title')}
                            </h3>
                            <p className='text-sm'>{t('desc')}
                                <Link href='/terms/cookies-policy' title={t('cookies')} className='text-customColor'> {t('cookies')}</Link>.
                            </p>
                        </div>

                        <div className='flex justify-center gap-2'>
                            <button onClick={acceptCookies} className='bg-customColor/90 border text-white px-5 py-1 hover:text-customColor hover:bg-white/10 dark:border-0'>
                                {t('accept')}
                            </button>
                            <Link href='https://google.es' title={t('decline')}>
                                <button className='bg-gray-600/90 border text-white px-5 py-1 hover:text-gray-600 hover:bg-white/10 dark:border-0'>
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