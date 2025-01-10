import { useTranslations } from 'next-intl'

import HomeHeaders from './HomeComponents/HomeHeaders'
import ProjectList from './ProjectsComponents/ProjectList'

const Projects = () => {

  const t = useTranslations('Projects')

  return (

    <section id='proyectos' className='space-y-10'>

      {/* Titulo */}

      <HomeHeaders>
        {t('title')}
      </HomeHeaders>

      {/* Lista de todos los proyectos */}

      <ProjectList />

    </section>

  )

}

export default Projects