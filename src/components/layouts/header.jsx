import Navbar from "../ui/navbar"
import {Button} from "../ui/button"
import {useState} from 'react'

const Header = ()=>{
    const [menu,setMenu] = useState(false)
    return(
        <header className="relative container mx-auto p-6">
            <div className="flex items-center justify-between p-5 pt-4 ">
                <div className="py-2">
                    <h3 className="text-black cursor-pointer font-bold">Logo</h3>
                </div>
         <Navbar/>
         <div className="hidden md:flex md:space-x-2">
          <Button color={'bg-white'}>Log in</Button>
          <Button color={'bg-darkPurple'}>Sign Up</Button>
         </div>
         <button id="menu-btn" className={`block focus:outline-none md:hidden ${menu?'active':''}`} onClick={()=>{
           setMenu(preValue=>{
            return !preValue
           })
         }}>
         <span className="hamburger-start"></span>
         <span className="hamburger-middle"></span>
         <span className="hamburger-end"></span>
         </button>
            </div>
         <div id="menu" className="md:hidden">
         <div className={`absolute left-6 right-6 flex-col px-8 self-start py-5 p-6 space-y-6 bg-white shadow-lg justify-center items-center drop-shadow-md w-auto sm:self-center ${menu?'flex':'hidden'}`} >
         <a href="#" className="text-black hover:text-black font-bold">Home</a>
    <a href="#" className="text-lightGray hover:text-black font-bold">Discover</a>
    <a href="#" className="text-lightGray hover:text-black font-bold">Special Deals</a>
    <a href="#" className="text-lightGray hover:text-black font-bold">Contact</a>
    <Button color={'bg-lightGray'}>Log in</Button>
          <Button color={'bg-darkPurple'}>Sign Up</Button>
         </div>
         </div>
        </header>
    )
}
export default Header