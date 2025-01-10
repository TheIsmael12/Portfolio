import Link from 'next/link'
import Image from 'next/image'

export default async function NotFound() {

    return (

        <div className='h-[600px] flex justify-center items-center text-center'>

            <div className='px-5 space-y-5'>

                <Image className='mx-auto'
                    src='/assets/images/assets/error404.webp'
                    width={1080} height={720}
                    alt='Error404'
                    title='Error404'
                    priority
                />

                <h1 className='text-6xl font-bold'>
                    Error <span className='text-colorLight dark:text-colorDark'>404</span>
                </h1>

                <p className='text-xl md:text-2xl'>
                    ¡Ups! la pagina <span className='text-colorLight dark:text-colorDark'> no ha sido encontrada</span>.
                </p>

                <div>
                    <Link href='/' title='Home'>
                        <button className='py-2 px-5 rounded-full border'>
                            Volver al incio.
                        </button>
                    </Link>
                </div>

            </div>

        </div>

    )

}