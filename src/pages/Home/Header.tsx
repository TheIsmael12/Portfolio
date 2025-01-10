import { useTranslations } from 'next-intl'

import Image from 'next/image'

const Header = () => {

    const t = useTranslations('Header')

    return (

        <header className='flex justify-between'>

            <div className='space-y-8 my-auto'>

                {/* Titulo */}

                <div className='space-y-6'>

                    <h1 className='text-2xl lg:text-4xl font-bold'>
                        Ismael Benabdellah
                    </h1>

                    <p className='lg:w-[390px] text-balance lg:text-justify'>
                        <span className='font-semibold text-colorLight dark:text-colorDark'>{t('part1')}</span> {t('part2')} <span className='font-semibold text-colorLight dark:text-colorDark'>{t('part3')}</span> {t('part4')} {t('part5')}
                    </p>

                </div>

            </div>

            <div className='h-64 lg:h-80 pb-10'>

                <div className='h-56 lg:h-64 flex flex-col justify-end rounded-b-full bg-colorLight dark:bg-colorDark'>
                    <Image
                        className='w-96 lg:w-44 rounded-b-full'
                        src='/assets/images/ismael.png'
                        width='200'
                        height='200'
                        alt='Ismael Benabdellah'
                        title='Ismael Benbdellah'
                    />
                </div>

            </div>

        </header>

    )

}

export default Header