'use client'

import Link from 'next/link'

import ThemeSwitch from '../Themes/ThemeSwitch'
import SwitchLanguage from '../Language/SwitchLanguage'

import { MdOutlinePhoneIphone } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Navbar = () => {

    const links = [

        { href: 'tel:612442260', title: 'Phone', icon: <MdOutlinePhoneIphone size={20} /> },
        { href: 'https://github.com/TheIsmael12', title: 'GitHub', icon: <FaGithub size={20} /> },
        { href: 'https://www.linkedin.com/in/ismael-benabdellah/', title: 'LinkedIn', icon: <FaLinkedin size={20} /> },
        { href: 'mailto:ismaelmad12@gmail.com', title: 'Email', icon: <IoIosMail size={20} /> },

    ]

    return (

        <nav className='fixed z-10 inset-x-0 top-0 px-5'>

            <div className='flex justify-center lg:justify-between items-center gap-4 w-full mx-auto p-8'>

                {/* Social Links */}

                <div className='hidden lg:flex gap-8 items-center'>

                    {links.map(({ href, title, icon }) => (
                        <Link
                            key={title}
                            href={href}
                            title={title}
                            target='_blank'
                            className='hover:text-colorLight dark:hover:text-colorDark'
                        >
                            {icon}
                        </Link>
                    ))}

                </div>

                {/* Theme and Language Switch */}

                <div className='hidden lg:block'>
                    <div className='flex items-center gap-5'>
                        <ThemeSwitch />
                        <SwitchLanguage />
                    </div>
                </div>

            </div>

        </nav>

    )

}

export default Navbar