import Link from 'next/link'

interface DefaultButtonProps {

    href: string
    title: string
    children: React.ReactNode

}

const DefaultButton = ({ href, title, children }: DefaultButtonProps) => {

    return (

        <Link
            href={href}
            title={title}
            target='_blank'
            className='w-28 text-sm py-1 flex justify-center items-center rounded-md text-white bg-colorLight dark:bg-colorDark hover:bg-hoverLight dark:hover:bg-hoverDark'
        >

            {children}

        </Link>

    )

}

export default DefaultButton