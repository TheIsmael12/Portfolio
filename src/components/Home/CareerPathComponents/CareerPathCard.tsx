import { useTranslations } from 'next-intl'

import DefaultButton from '@/components/Buttons/DefaultButton'

interface CareerPathCardProps {

    career: {

        title: string
        desc: string
        url: string
        bussines: string
        startDate: string
        finishDate: string

    }

}

const CareerPathCard = ({ career }: CareerPathCardProps) => {

    const t = useTranslations('Careers')

    const locale = t('locale') || 'en-US'

    return (

        <li className='mb-10 ms-4'>

            <div className='absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-gray-200 dark:bg-white-700'></div>

            <div className='mb-4'>

                <time className='mb-1 text-sm font-normal leading-none flex gap-2'>
                    <span>
                        {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(career.startDate))}
                    </span>
                    -
                    <span className='font-bold'>
                        {career.finishDate
                            ? new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(career.finishDate))
                            : t('atthemoment')}
                    </span>

                </time>

                <h3 className='text-base font-semibold text-gray-900 dark:text-white'>
                    {career.title}
                </h3>
                <h4 className='text-customColor font-semibold'>
                    {career.bussines}
                </h4>

            </div>

            <p className='mb-4 font-normal text-gray-500 dark:text-gray-400'>
                {career.desc}
            </p>

            <DefaultButton
                href={career.url}
                title={career.title}
            >

                {t('learnmore')}
                <svg className='w-3 h-3 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
                </svg>

            </DefaultButton>

        </li >

    )

}

export default CareerPathCard