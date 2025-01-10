import { useTranslations } from 'next-intl'

interface EducationCardProps {

    education: {

        degree: string
        institution: string
        startDate: string
        finishDate: string | null

    }

}

const EducationCard = ({ education }: EducationCardProps) => {

    const t = useTranslations('Education')
    
    const locale = t('locale') || 'en-US'

    return (

        <li
            className='p-4 space-y-2 rounded-md border dark:border-none dark:bg-darkBackground'
        >

            <h3 className='text-lg font-semibold'>
                {education.degree}
            </h3>

            <p className='text-customColor font-medium'>
                {education.institution}
            </p>

            <time className='mb-1 text-sm font-normal leading-none text-customColor flex gap-2'>

                <span>
                    {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(education.startDate))}
                </span>
                -
                <span className='font-bold'>
                    {education.finishDate
                        ? new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(new Date(education.finishDate))
                        : t('atthemoment')}
                </span>

            </time>

        </li>

    )

}

export default EducationCard