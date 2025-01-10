import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

type EducationTranslations = {

    [key: string]: string

}

export async function GET(req: Request) {

    try {

        const url = new URL(req.url)
        const locale = url.searchParams.get('locale') || 'en'

        const educations = await prisma.educations.findMany()

        const educationsWithLocalizedData = educations.map((education) => {

            const degree = education.degree as EducationTranslations

            return {
                ...education,
                degree: degree[locale] || degree['en'], 
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

        const { id, degree, institution, startDate, finishDate } = body

        if (!degree) {
            return NextResponse.json({ error: 'Degree is required' }, { status: 400 })
        }

        const newEducation = await prisma.educations.create({

            data: {
                id,
                degree, 
                institution, 
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