import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Definimos un tipo para las traducciones
type ProjectTranslations = {

    [key: string]: string // Mapa de idioma a texto

}

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string
        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en' // Valor por defecto 'en'

        // Buscar los proyectos y extraer las traducciones según la locale
        const projects = await prisma.projects.findMany()

        const projectsWithLocalizedData = projects.map((project) => {

            const desc = project.desc as ProjectTranslations // Asegurar que 'desc' tiene el tipo correcto

            return {
                ...project,
                desc: desc[locale] || desc['en'], // Si no hay traducción en el idioma, usar 'en' como fallback
            }

        })

        return NextResponse.json(projectsWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching projects:', error)
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })

    }
}

export async function POST(req: Request) {

    try {

        const body = await req.json()

        // Validar los datos entrantes
        const { id, title, desc, codeLink, demoLink, technologies } = body

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 })
        }

        // Guardar los datos del título y la descripción como objetos JSON
        const newProject = await prisma.projects.create({

            data: {
                id,
                title, // Asumimos que 'title' es un objeto JSON con traducciones
                desc, // Lo mismo para 'desc'
                codeLink,
                demoLink,
                technologies,
            },

        })

        return NextResponse.json(newProject, { status: 201 })

    } catch (error) {

        console.error('Error creating project:', error)
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })

    }

}