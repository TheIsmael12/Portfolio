import { useTranslations } from 'next-intl'

import HomeHeaders from './HomeComponents/HomeHeaders'
import EducationList from './EducationComponents/EducationList'

const Education = () => {

    const t = useTranslations('Education')

    return (

        <section className='space-y-8'>

            {/* Título */}

            <HomeHeaders>
                {t('title')}
            </HomeHeaders>

            {/* Listado de trayectoria educacional */}

            <EducationList />

        </section>

    )

}

export default Education