import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-red-300 via-red-600 to-red-300 text-white">
        <div className="container flex flex-col items-center py-1">
          <p className='text-xl font-semibold'>Farmácia Farmays | Copyright: 2024.</p>
          <p className='text-lg'>Siga-nos nas redes sociais</p>
          <div className='flex gap-2'>
            <LinkedinLogo size={30} weight='light' />
            <InstagramLogo size={30} weight='light' />
            <FacebookLogo size={30} weight='light' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
