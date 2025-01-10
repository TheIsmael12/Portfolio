import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Definimos un tipo para los campos que contienen las traducciones
type CareerTranslations = {

    [key: string]: string // Mapa de idioma a texto

}

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string

        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en'

        // Buscar las carreras y extraer las traducciones según la locale

        const careers = await prisma.careers.findMany()

        // Si deseas que los títulos y descripciones sean filtrados según la locale

        const careersWithLocalizedData = careers.map(career => {

            const title = career.title as CareerTranslations  // Asegurarse de que title es de tipo CareerTranslations
            const desc = career.desc as CareerTranslations    // Asegurarse de que desc es de tipo CareerTranslations

            return {

                ...career,
                title: title[locale] || title['en'], // Si no hay traducción en el idioma, se usa 'en'
                desc: desc[locale] || desc['en'],     // Lo mismo para la descripción

            }

        })

        return NextResponse.json(careersWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching careers:', error)
        return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 })

    }

}

// POST handler: Create a new career
export async function POST(req: Request) {

    try {

        const body = await req.json()

        // Validate the incoming data
        const { id, title, desc, url, bussines, startDate, finishDate } = body

        if (!title || !bussines) {

            return NextResponse.json({ error: 'Title and business are required' }, { status: 400 })

        }

        // Guardar los datos del título y la descripción como objetos JSON
        const newCareer = await prisma.careers.create({

            data: {
                id,
                title,  // Asumir que 'title' es un objeto JSON con las traducciones
                desc,   // Lo mismo para 'desc'
                url,
                bussines,
                startDate,
                finishDate,
            },

        })

        return NextResponse.json(newCareer, { status: 201 })

    } catch (error) {

        console.error('Error creating career:', error)
        return NextResponse.json({ error: 'Failed to create career' }, { status: 500 })

    }

}