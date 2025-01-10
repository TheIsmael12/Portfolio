import { useTranslations } from 'next-intl'

import HomeHeaders from './HomeComponents/HomeHeaders'

const Skills = () => {

    const t = useTranslations('Skills')

    return (

        <section className='space-y-4'>

            {/* Titulo */}

            <HomeHeaders>
                {t('title')}
            </HomeHeaders>

            {/* Listado de habilidades */}
            
            <ul
                className='flex flex-wrap items-center gap-2'
                aria-label='Lista de tecnologías'>
                {[
                    'React',
                    'Next.js',
                    'Three.js',
                    'Vite',
                    'Node.js',
                    'TypeScript',
                    'TailwindCSS',
                    'Bootstrap',
                    'JavaScript',
                    'PHP',
                    'Java',
                    'Spring',
                    'Angular',
                    'NodeMailer',
                    'AWS',
                ].map((tech) => (
                    <li
                        key={tech}
                        className='px-2 py-0.5 rounded-md text-white bg-colorLight dark:bg-colorDark'
                        title={tech}>
                        {tech}
                    </li>
                ))}
            </ul>


        </section>

    )
}

export default Skills