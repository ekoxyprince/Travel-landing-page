import Header from "../components/layouts/header"
import Hero from "../components/layouts/hero"
import Brand from "../components/layouts/brand"
import Services from "../components/layouts/services"
import Destination from "../components/layouts/destination"
import Travel from "../components/layouts/travel"
import Subscribe from "../components/layouts/subscribe"

const Home = ()=>{
    return(
        <>
        <Header/>
        <span id="cicleHero"></span>
        <Hero/>
        <Brand/>
        <Services/>
        <Destination/>
        <Travel/>
        <Subscribe/>
        </>
    )
}
export default Home