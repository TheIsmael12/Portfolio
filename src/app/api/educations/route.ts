import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string
        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en' // Valor por defecto 'en' si no se pasa 'locale'

        // Buscar las carreras y extraer las traducciones según la locale
        const educations = await prisma.educations.findMany()

        // Si deseas que los títulos y descripciones sean filtrados según la locale

        const educationsWithLocalizedData = educations.map(education => {

            return {

                ...education, // Si no hay traducción en el idioma, se usa 'en'
                degree: education.degree[locale] || education.degree['en'],   // Lo mismo para la descripción

            }

        })

        return NextResponse.json(educationsWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching educations:', error)
        return NextResponse.json({ error: 'Failed to fetch educations' }, { status: 500 })

    }
}

// POST handler: Create a new education

export async function POST(req: Request) {

    try {

        const body = await req.json()

        // Validate the incoming data
        const { id, degree, institution, startDate, finishDate } = body

        if (!degree) {

            return NextResponse.json({ error: 'Title and business are required' }, { status: 400 })

        }

        // Guardar los datos del título y la descripción como objetos JSON

        const neweducation = await prisma.educations.create({

            data: {

                id,
                degree: degree, // Debería ser un objeto JSON con diferentes idiomas
                institution, // Lo mismo para la descripción
                startDate,
                finishDate,

            },

        })

        return NextResponse.json(neweducation, { status: 201 })

    } catch (error) {

        console.error('Error creating education:', error)
        return NextResponse.json({ error: 'Failed to create education' }, { status: 500 })

    }

}