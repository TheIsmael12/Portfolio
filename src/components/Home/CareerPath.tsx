import { useTranslations } from 'next-intl'

import HomeHeaders from './HomeComponents/HomeHeaders'
import CareerPathList from './CareerPathComponents/CareerPathList'

const CareerPath = () => {

    const t = useTranslations('Careers')

    return (

        <section id='trayectoria' className='space-y-10'>

            {/* Titulo */}

            <HomeHeaders>
                {t('title')}
            </HomeHeaders>

            {/* Listado de trayectoria laboral */}

            <CareerPathList />

        </section>

    )
}

export default CareerPath