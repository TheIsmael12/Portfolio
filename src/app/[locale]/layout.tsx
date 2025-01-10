import ThemeWrapper from '@/providers/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'

import { Metadata } from 'next'
import { locales } from '@/i18n'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

import Navbar from '@/components/Static/Navbar'
import TopButton from '@/components/TopButton'
import CookieNotice from '@/components/CookieNotice'

import { Toaster } from 'sonner'

import SuspenseBoundary from '@/components/Suspense/SuspenseBoundary'
import Spinner from '@/components/Loadings/Spinner'

export async function generateStaticParams() {

    return locales.map((locale) => ({ locale }))

}

type Locale = 'en' | 'es' | 'fr'

export const generateMetadata = ({ params }: { params: { locale: Locale } }) => {

    const locale = params.locale
    const baseUrl = `https://ismaelben.netlify.app/`
    const empresa = 'Ismael Benabdellah'

    const translations = {

        title: {
            en: 'Portfolio - Ismael Benabdellah',
            es: 'Portfolio - Ismael Benabdellah',
            fr: 'Portfolio - Ismael Benabdellah'
        },
        description: {
            en: 'Personal portfolio showcasing web development projects, skills, and experiences.',
            es: 'Portfolio personal mostrando proyectos de desarrollo web, habilidades y experiencias.',
            fr: 'Portfolio personnel présentant des projets de développement web, des compétences et des expériences.'
        },
        keywords: {
            en: 'web development, portfolio, developer, projects, skills, Ismael Benabdellah',
            es: 'desarrollo web, portfolio, desarrollador, proyectos, habilidades, Ismael Benabdellah',
            fr: 'développement web, portfolio, développeur, projets, compétences, Ismael Benabdellah'
        },
        twitterTitle: {
            en: 'Portfolio - Ismael Benabdellah',
            es: 'Portfolio - Ismael Benabdellah',
            fr: 'Portfolio - Ismael Benabdellah'
        },
        twitterDescription: {
            en: 'Personal portfolio showcasing web development projects, skills, and experiences.',
            es: 'Portfolio personal mostrando proyectos de desarrollo web, habilidades y experiencias.',
            fr: 'Portfolio personnel présentant des projets de développement web, des compétences et des expériences.'
        }

    }

    const metadata: Metadata = {

        title: translations.title[locale] || translations.title.en,
        description: translations.description[locale] || translations.description.en,
        keywords: translations.keywords[locale] || translations.keywords.en,
        publisher: empresa,
        applicationName: empresa,
        authors: [{ name: 'Ismael' }],
        generator: 'Next.js',
        referrer: 'origin-when-cross-origin',
        creator: 'Ismael',
        openGraph: {
            title: translations.title[locale] || translations.title.en,
            description: translations.description[locale] || translations.description.en,
            url: `${baseUrl}/${locale}/`,
            type: 'website',
            locale: locale,
            siteName: empresa,
            images: [
                {
                    url: `${baseUrl}/assets/images/ismael.png`,
                    alt: `${empresa} Logo`,
                    width: 800,
                    height: 600,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: empresa,
            title: translations.twitterTitle[locale] || translations.twitterTitle.en,
            description: translations.twitterDescription[locale] || translations.twitterDescription.en,
            images: [`${baseUrl}/assets/images/ismael.png`],
        },
        robots: 'index,follow',
        alternates: {
            canonical: `${baseUrl}/${locale}/`,
            languages: {
                es: `${baseUrl}/es/`,
                en: `${baseUrl}/en/`,
                fr: `${baseUrl}/fr/`,
                'x-default': baseUrl,
            }
        }
    }

    return metadata

}

export default async function LocaleLayout({ children, params: { locale } }: {

    children: React.ReactNode
    params: { locale: string }

}) {

    const messages = await getMessages({ locale })

    unstable_setRequestLocale(locale)

    return (

        <html lang={locale}>

            <body className='bg-white dark:bg-neutral-900'>

                <ThemeWrapper>
                    <NextIntlClientProvider messages={messages}>

                        <Toaster richColors />
                        <Navbar />
                        <main className='px-5'>
                            <SuspenseBoundary fallback={<Spinner />}>
                                {children}
                            </SuspenseBoundary>
                        </main>
                        <TopButton />
                        <CookieNotice />

                    </NextIntlClientProvider>
                </ThemeWrapper>

            </body>

        </html>

    )

}