import img from '../../assets/images/travel.png'
import { FloatButton } from "../ui/button"


const Travel = ()=>{
    return(
        <section>
            <div className="flex flex-col-reverse p-4 px-4 mx-auto md:flex-row space-x-24 mt-24 justify-center">
                <div className="relative max-h-sm w-full md:w-3/5 xl:w-1/2">
                  <img src={img} className='h-full max-w-full md:ml-5' alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" className='absolute -top-14 right-1' width="180" height="180" viewBox="0 0 180 180" fill="none">
  <g filter="url(#filter0_f_1012_8)">
    <circle cx="90" cy="90" r="60" fill="url(#paint0_linear_1012_8)"/>
  </g>
  <defs>
    <filter id="filter0_f_1012_8" x="0" y="0" width="180" height="180" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1012_8"/>
    </filter>
    <linearGradient id="paint0_linear_1012_8" x1="60.8571" y1="90.5714" x2="150" y2="90.5714" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF4487"/>
      <stop offset="1" stopColor="#A53FF5"/>
    </linearGradient>
  </defs>
</svg>
                  <div className='hidden absolute top-0 mt-56 right-0 md:mr-32 lg:block xl:mr-20'>
                   <FloatButton color={'bg-white'}>Discounted Price</FloatButton>
                  </div>
                  <div className='absolute bg-blueShade -z-50 w-full h-3/4 bottom-0 rounded-r-full right-10'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='ml-24 -mt-5' width="40" height="40" viewBox="0 0 180 180" fill="none">
  <g filter="url(#filter0_f_1012_8)">
    <circle cx="90" cy="90" r="60" fill="url(#paint0_linear_1012_8)"/>
  </g>
  <defs>
    <filter id="filter0_f_1012_8" x="0" y="0" width="180" height="180" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1012_8"/>
    </filter>
    <linearGradient id="paint0_linear_1012_8" x1="60.8571" y1="90.5714" x2="150" y2="90.5714" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF4487"/>
      <stop offset="1" stopColor="#A53FF5"/>
    </linearGradient>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute right-0 mr-14 mt-28 md:mr-32 md:mt-24' width="40" height="40" viewBox="0 0 180 180" fill="none">
  <g filter="url(#filter0_f_1012_8)">
    <circle cx="90" cy="90" r="60" fill="#FF5722"/>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute right-0 bottom-16 mr-14  md:mr-40 md:-mt-24' width="40" height="40" viewBox="0 0 180 180" fill="none">
  <g filter="url(#filter0_f_1012_8)">
    <circle cx="90" cy="90" r="60" fill="#FF5722"/>
  </g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='absolute right-0 -mr-14 md:-mr-20 mt-44' width="69" height="69" viewBox="0 0 69 69" fill="none">
  <g filter="url(#filter0_f_1012_10)">
    <circle cx="34.5" cy="34.5" r="27.5" fill="#FACD49"/>
  </g>
  <defs>
    <filter id="filter0_f_1012_10" x="0" y="0" width="69" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_1012_10"/>
    </filter>
  </defs>
</svg>
                  </div>
                </div>
               <div className='flex flex-col space-y-8 mt-20 pb-12 md:pr-6 md:w-2/5 md:text-left'>
               <h3 className="font-bold text-2xl text-center tracking-widest text-darkPink md:text-start">TRAVEL POINT</h3>
                    <h2 className="font-bold text-4xl leading-tight text-center md:text-start md:text-4xl">We helping you find your dream location</h2>
                    <p className='text-md text-gray-300'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <div className='grid grid-cols-2 gap-y-10 gap-x-5'>
                      <div className='p-4 px-2 flex flex-col justify-center items-center rounded-lg shadow-lg space-y-1 cursor-pointer'>
                        <h4 className='font-bold text-xl text-center text-darkOrange'>500+</h4>
                        <h6 className='font-bold text-md text-center'>Holiday Package</h6>
                      </div>
                      <div className='p-4 px-2 flex flex-col justify-center items-center rounded-lg shadow-lg space-y-1 cursor-pointer'>
                        <h4 className='font-bold text-xl text-center text-darkOrange'>100</h4>
                        <h6 className='font-bold text-md text-center'>Luxury Hotel</h6>
                      </div>
                      <div className='p-4 px-2 flex flex-col justify-center items-center rounded-lg shadow-lg space-y-1 cursor-pointer'>
                        <h4 className='font-bold text-xl text-center text-darkOrange'>7</h4>
                        <h6 className='font-bold text-md text-center'>Premium Airlines</h6>
                      </div>
                      <div className='p-4 px-2 flex flex-col justify-center items-center rounded-lg shadow-lg space-y-1 cursor-pointer'>
                        <h4 className='font-bold text-xl text-center text-darkOrange'>2k+</h4>
                        <h6 className='font-bold text-md text-center'>Happy Customer</h6>
                      </div>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Travel