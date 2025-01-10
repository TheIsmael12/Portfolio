import createMiddleware from 'next-intl/middleware'

export default createMiddleware({

    locales: ['es', 'en', 'fr'],

    defaultLocale: 'es'

})

export const config = {

    matcher: [

        // Root route
        '/',
        // Routes with locales
        '/(es|en|fr)/:path*',
        // Exclude API routes explicitly
        '/((?!api|_next|_vercel|.*\\..*).*)'

    ]

}