import Link from 'next/link'

interface LinkButtonProps {

    href: string
    title: string
    children: React.ReactNode

}

const LinkButton = ({ href, title, children }: LinkButtonProps) => {

    return (

        <Link
            href={href}
            title={title}
            target='_blank'
            className='flex justify-center items-center gap-2 text-md px-2 py-1 rounded-md text-white bg-colorLight dark:bg-colorDark hover:bg-hoverLight dark:hover:bg-hoverDark'
        >

            {children}

        </Link>
        
    )

}

export default LinkButton