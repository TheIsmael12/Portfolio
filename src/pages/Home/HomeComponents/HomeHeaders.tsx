interface HomeHeadersProps {

    children: React.ReactNode

}

const HomeHeaders = ({ children }: HomeHeadersProps) => {

    return (

        <div className='flex items-center'>

            <h2 className='text-3xl font-bold'>

                {children}
                
            </h2>

        </div>

    )

}

export default HomeHeaders