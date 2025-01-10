'use client'

import Link from 'next/link'

import { UrlObject } from 'url'
import { ComponentProps } from 'react'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, ...rest }: ComponentProps<typeof Link>) {

    const pathname = usePathname() || ''

    const getPathWithoutLocale = (path: string) => {

        return path.replace(/^\/[a-z]{2}(?=\/)/, '')

    }

    const hrefString = typeof href === 'string' ? href : (href as UrlObject).pathname || ''

    const cleanedPathname = getPathWithoutLocale(pathname)
    const cleanedHref = getPathWithoutLocale(hrefString)

    const isActive = cleanedPathname === cleanedHref

    return (

        <Link
            aria-current={isActive ? 'page' : undefined}
            className={
                isActive
                    ? 'flex gap-3 items-center text-black dark:text-black hover:text-hoverLight dark:hover:text-black'
                    : 'flex gap-3 items-center text-white hover:text-black dark:hover:text-black'
            }
            href={href}
            {...rest}
        />

    )

}