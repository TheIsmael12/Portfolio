import { useTranslations } from 'next-intl'
import HomeHeaders from './HomeComponents/HomeHeaders'

const About = () => {

    const t = useTranslations('About')

    return (

        <section className='space-y-4'>

            {/* Titulo */}

            <HomeHeaders>
                {t('title')}
            </HomeHeaders>

            {/* Sobre mi */}

            <p className='text-base'>
                {t('desc')}
            </p>

        </section>

    )
}

export default About