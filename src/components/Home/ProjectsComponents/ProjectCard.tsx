import { useTranslations } from 'next-intl'

import LinkButton from '@/components/Buttons/LinkButton'

import {
    FaCode,
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaSass
} from 'react-icons/fa'
import {
    TbWorld
} from 'react-icons/tb'
import {
    RiNextjsFill,
    RiTailwindCssFill
} from 'react-icons/ri'
import {
    SiPrisma,
    SiMysql,
    SiTypescript,
    SiJavascript,
    SiNestjs
} from 'react-icons/si'

interface ProjectCardProps {

    project: {

        title: string
        desc: string
        codeLink: string | null
        demoLink: string | null
        technologies: string

    }

}

// Mapeo de tecnologías e íconos
const TECHNOLOGY_ICONS: Record<string, JSX.Element> = {

    react: <FaReact />,
    sass: <FaSass />,
    nestjs: <SiNestjs />,
    nodejs: <FaNodeJs />,
    nextjs: <RiNextjsFill />,
    tailwindcss: <RiTailwindCssFill />,
    prisma: <SiPrisma />,
    mysql: <SiMysql />,
    laravel: <FaLaravel />,
    php: <FaPhp />,
    typescript: <SiTypescript />,
    javascript: <SiJavascript />

}

const ProjectCard = ({ project }: ProjectCardProps) => {

    const t = useTranslations('Projects')

    const technologiesArray = project.technologies.split(',')

    return (

        <div className='border dark:border-none dark:bg-darkBackground rounded-md'>

            <div className='py-4 px-4 space-y-4'>

                {/* Titulo y descripción del proyecto */}

                <div className='space-y-2 text-center'>
                    <h3 className='text-2xl font-bold text-colorLight dark:text-colorDark'>
                        {project.title}
                    </h3>
                    <p className='h-24 py-2 px-4 text-justify'>
                        {project.desc}
                    </p>
                    <div className='flex justify-center items-center gap-4 text-2xl'>

                        {technologiesArray.map((tech: string) => (

                            TECHNOLOGY_ICONS[tech.trim().toLowerCase()] || null

                        ))}

                    </div>
                </div>

                {/* Enclaces */}

                <div className='flex justify-center items-center gap-2'>

                    <LinkButton
                        href={project.demoLink || ''}
                        title={project.title}
                    >
                        <TbWorld size={20} />
                        {t('demo')}
                    </LinkButton>
                    <LinkButton
                        href={project.codeLink || ''}
                        title={project.title}
                    >
                        <FaCode size={20} />
                        {t('code')}
                    </LinkButton>

                </div>

            </div>

        </div>

    )

}

export default ProjectCard