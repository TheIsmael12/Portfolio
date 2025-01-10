import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string
        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en' // Valor por defecto 'en' si no se pasa 'locale'

        // Buscar las carreras y extraer las traducciones según la locale
        const projects = await prisma.projects.findMany()

        // Si deseas que los títulos y descripciones sean filtrados según la locale

        const projectsWithLocalizedData = projects.map(project => {

            return {

                ...project, // Si no hay traducción en el idioma, se usa 'en'
                desc: project.desc[locale] || project.desc['en'],   // Lo mismo para la descripción

            }

        })

        return NextResponse.json(projectsWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching projects:', error)
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })

    }
}

// POST handler: Create a new project

export async function POST(req: Request) {

    try {

        const body = await req.json()

        // Validate the incoming data
        const { id, title, desc, codeLink, demoLink, technologies } = body

        if (!title) {

            return NextResponse.json({ error: 'Title and business are required' }, { status: 400 })

        }

        // Guardar los datos del título y la descripción como objetos JSON

        const newProject = await prisma.projects.create({

            data: {

                id,
                title: title, // Debería ser un objeto JSON con diferentes idiomas
                desc: desc, // Lo mismo para la descripción
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