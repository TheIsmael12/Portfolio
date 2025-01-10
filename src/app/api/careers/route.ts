import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string
        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en' // Valor por defecto 'en' si no se pasa 'locale'

        // Buscar las carreras y extraer las traducciones según la locale
        const careers = await prisma.careers.findMany()

        // Si deseas que los títulos y descripciones sean filtrados según la locale

        const careersWithLocalizedData = careers.map(career => {

            return {

                ...career,
                title: career.title[locale] || career.title['en'], // Si no hay traducción en el idioma, se usa 'en'
                desc: career.desc[locale] || career.desc['en'],   // Lo mismo para la descripción

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
                title: title, // Debería ser un objeto JSON con diferentes idiomas
                desc: desc, // Lo mismo para la descripción
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