import {OutlineButton,FloatButton} from "../ui/button"

const Destination = ()=>{
    return(
        <section id="destination">
         <div className="container flex flex-col px-6 p-8 mx-auto mt-12">
            <div className="flex flex-col p-3 px-3 space-y-2 md:w-1/2">
            <h3 className="font-bold text-2xl text-center tracking-widest text-darkPink md:text-start">TOP DESTINATION</h3>
                    <h2 className="font-bold text-3xl leading-snug text-center md:text-start lg:text-4xl">Explore top destination</h2>
            </div>
            <div className="flex space-x-8 justify-center md:justify-end md:-mt-10">
              <OutlineButton hover={'hover:bg-lightGray'}><i className="fas fa-angle-left"></i></OutlineButton>
              <FloatButton color={'bg-darkPurple'} hover={'hover:bg-black'}><i className="fas fa-angle-right text-white"></i></FloatButton>
            </div>
            <div className="flex p-4 px-4 mt-5 items-center justify-center space-x-4 md:justify-between">
                <div className="relative hover:bg-black hover:text-white cursor-pointer space-y-1 text-md flex flex-col bg-white rounded-3xl shadow-lg">
                    <div id="dest1" className="w-full rounded-t-3xl pb-3"></div>
                    <div className="flex flex-col space-y-4 py-5 p-4 px-5">
                    <div className="flex justify-between">
                        <h2 className="w-2/3 text-start font-bold">Paradise Beach, Bantayan Inlnad</h2>
                        <h3 className="w-1/3 text-end font-bold text-darkPink">$ 150.99</h3>
                    </div>
                    <p className="text-sm text-gray-400 font-bold">Rome, Italy</p>
                    <p className="text-sm text-darkPink">4.0   <i className="fas fa-star"></i></p>
                    </div>
                   
                </div>
                <div className="hidden relative hover:bg-black hover:text-white cursor-pointer space-y-1 text-md flex-col bg-white rounded-3xl shadow-lg md:flex">
                    <div id="dest2" className="w-full rounded-t-3xl pb-3"></div>
                    <div className="flex flex-col space-y-4 py-5 p-4 px-5">
                    <div className="flex justify-between">
                        <h2 className="w-2/3 text-start font-bold">Paradise Beach, Bantayan Inlnad</h2>
                        <h3 className="w-1/3 text-end font-bold text-darkPink">$ 20.99</h3>
                    </div>
                    <p className="text-sm text-gray-400 font-bold">Maldives</p>
                    <p className="text-sm text-darkPink">4.5   <i className="fas fa-star"></i></p>
                    </div>
                   
                </div>
                <div className="hidden relative hover:bg-black hover:text-white cursor-pointer space-y-1 text-md flex-col bg-white rounded-3xl shadow-lg md:flex">
                    <div id="dest3" className="w-full rounded-t-3xl pb-3"></div>
                    <div className="flex flex-col space-y-4 py-5 p-4 px-5">
                    <div className="flex justify-between">
                        <h2 className="w-2/3 text-start font-bold">Mountain View, Above the Cloud</h2>
                        <h3 className="w-1/3 text-end font-bold text-darkPink">$ 149.99</h3>
                    </div>
                    <p className="text-sm text-gray-400 font-bold">United Arab Emeries</p>
                    <p className="text-sm text-darkPink">5.0   <i className="fas fa-star"></i></p>
                    </div>
                   
                </div>
            </div>
         </div>
        </section>
    )
}

export default Destination