import Image from 'next/image'

const Spinner = () => {

  return (

    <>

      <Image
        className='animate-pulse animate-duration-200 animate-infinite'
        src='/assets/images/ismaelletras.png'
        alt='Ismael'
        height={200}
        width={250}
      />

    </>

  )

}

export default Spinner