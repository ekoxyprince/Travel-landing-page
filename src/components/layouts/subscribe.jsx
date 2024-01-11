import img from '../../assets/images/Graphic_Elements.png'
import { Button } from '../ui/button'
const Subscribe = ()=>{
   return (
    <section>
        <div className="container flex justify-center items-center p-10 px-6 mx-auto mt-48">
             <div className="flex flex-col py-10 bg-lightYellow w-full space-y-6 md:w-3/4">
                <img src={img} width={'100px'} className='-mt-16 -ml-4' alt="" />
             <h3 className="font-bold text-2xl text-center tracking-widest text-darkPink">TOP DESTINATION</h3>
                    <h2 className="font-bold text-2xl px-6 leading-snug  text-center md:text-4xl">Prepare yourself & let’s explore the beauty of the world</h2>
                    <div className='relative flex flex-col px-12 p-6 space-x-8 space-y-6 md:flex-row md:space-y-0'>
                      <span className='absolute top-16 mt-1 left-28 fas fa-envelope md:top-10'></span>
                      <input type="text" className='flex-1 py-4 border-none rounded-full hover:outline-none pl-16' placeholder='Your Email' />
                      <Button color={'bg-darkestPurple text-white'}>Subscribe</Button>
                    </div>
             </div>
        </div>
    </section>
   )
}

export default Subscribe