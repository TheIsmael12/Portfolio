'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import Image from 'next/image'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const SwitchLanguage = () => {

    const [menuLanguage, setMenuLanguage] = useState(false)
    const router = useRouter()
    const pathname = usePathname() || ''

    // Lista de idiomas disponibles

    const languages = [

        { code: 'es', label: 'Español', flag: '/assets/images/flags/es.svg' },
        { code: 'en', label: 'English', flag: '/assets/images/flags/en.svg' },
        { code: 'fr', label: 'Français', flag: '/assets/images/flags/fr.svg' }

    ]

    // Extraer el idioma actual del pathname

    const currentLocale = pathname.split('/')[1]

    // Obtener el idioma actual de la lista de idiomas

    const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

    const handleOpenMenu = () => setMenuLanguage(true)
    const handleCloseMenu = () => setMenuLanguage(false)
    const toggleOpenCloseMenu = () => setMenuLanguage((prev) => !prev)

    // Cerrar el menú si se hace clic fuera

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {

            if (!event.target || !(event.target instanceof HTMLElement)) return
            if (!event.target.closest('.relative')) {
                handleCloseMenu()
            }

        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {

            document.removeEventListener('mousedown', handleClickOutside)

        }

    }, [])

    // Función para establecer la cookie NEXT_LOCALE

    const setLocaleCookie = (locale: string) => {

        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`

    }

    const changeLanguage = (newLocale: string) => {

        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')

        setLocaleCookie(newLocale)
        router.push(newPath)
        handleCloseMenu()

    }

    return (

        <div className='relative'>

            {/* Botón principal que muestra el idioma actual y la bandera */}

            <button
                className='w-full px-4 py-2 flex justify-between items-center gap-2 rounded-md bg-white border dark:border-none dark:bg-darkBackground hover:text-colorLight dark:hover:text-colorDark'
                title='Language'
                onMouseEnter={handleOpenMenu}
                onClick={toggleOpenCloseMenu}
                aria-haspopup='menu'
                aria-expanded={menuLanguage}
            >

                <div className='flex items-center gap-2'>

                    {/* Bandera e idioma actual */}

                    <Image
                        src={currentLanguage.flag}
                        alt={currentLanguage.label}
                        title={currentLanguage.label}
                        className='w-4 h-4'
                        width={50}
                        height={40}
                    />
                    <span>{currentLanguage.label}</span>

                </div>

                {/* Icono para expandir o colapsar el menú */}

                {menuLanguage ? <FaAngleUp /> : <FaAngleDown />}

            </button>

            {/* Menú desplegable con opciones de idiomas */}

            {menuLanguage && (

                <div
                    className='absolute w-full right-0 lg:right-0 z-50 mt-2 origin-top-right rounded-md py-2 px-4 space-y-2 shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-darkBackground text-textLight dark:text-textDark'
                    role='menu'
                    aria-orientation='vertical'
                    onMouseLeave={handleCloseMenu}
                >

                    {languages.map((lang) => (

                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`flex gap-2 items-center hover:text-colorLight dark:hover:text-colorDark ${currentLocale === lang.code ? 'text-colorLight dark:text-colorDark' : ''
                                }`}
                        >
                            <Image
                                src={lang.flag}
                                alt={lang.label}
                                title={lang.label}
                                className='w-4 h-4'
                                width={50}
                                height={40}
                            />

                            {lang.label}

                        </button>

                    ))}

                </div>

            )}

        </div>

    )

}

export default SwitchLanguage