import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// Definimos un tipo para los campos que contienen las traducciones
type EducationTranslations = {

    [key: string]: string // Mapa de idioma a texto

}

export async function GET(req: Request) {

    try {

        // Obtener el parámetro locale de la query string
        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en' // Valor por defecto 'en' si no se pasa 'locale'

        // Buscar las educaciones y extraer las traducciones según la locale
        const educations = await prisma.educations.findMany()

        const educationsWithLocalizedData = educations.map((education) => {

            const degree = education.degree as EducationTranslations // Asegurar que 'degree' tiene el tipo correcto

            return {
                ...education,
                degree: degree[locale] || degree['en'], // Si no hay traducción en el idioma, se usa 'en'
            }

        })

        return NextResponse.json(educationsWithLocalizedData, { status: 200 })

    } catch (error) {

        console.error('Error fetching educations:', error)
        return NextResponse.json({ error: 'Failed to fetch educations' }, { status: 500 })

    }

}

export async function POST(req: Request) {

    try {

        const body = await req.json()

        // Validar los datos entrantes
        const { id, degree, institution, startDate, finishDate } = body

        if (!degree) {
            return NextResponse.json({ error: 'Degree is required' }, { status: 400 })
        }

        // Guardar los datos del título como un objeto JSON
        const newEducation = await prisma.educations.create({

            data: {
                id,
                degree, // Asumimos que 'degree' es un objeto JSON con traducciones
                institution, // Nombre de la institución
                startDate,
                finishDate,
            },

        })

        return NextResponse.json(newEducation, { status: 201 })

    } catch (error) {

        console.error('Error creating education:', error)
        return NextResponse.json({ error: 'Failed to create education' }, { status: 500 })

    }

}