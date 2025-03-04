import EcostruxureFire from "../components/SafetyandSecurity/EcostruxureFire"
import HikvisionCCTV from "../components/SafetyandSecurity/HikvisionCCTV"
import HikvisionAC from "../components/SafetyandSecurity/HikvisionAC"
import ProductsGrid from "../components/ProductsGrid"
import { acproducts, cctvproducts, fireproducts } from "../products"
import { fearch, search } from "../assets"

const SafetyandSecurity = () => {
  return (
    <main className="bg-b-100">
      <Header />
      <Intro />
      <EcostruxureFire />
      <article className=' max-lg:hidden flex flex-col items-center my-16 p-10'>
        <h1 className='relative text-b-900 font-semibold text-3xl max-xl:text-3xl mb-4'>ARCHITECTURE</h1>
        <div className="flex gap-x-20">
        <div className='relative flex justify-center w-[850px]'>
          <img src={fearch} className='rounded-3xl z-10 border-4 border-b-800'/>
          <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true" />
        </div> 
        <div className='relative flex justify-center w-[700px]'>
          <img src={search} className='rounded-3xl z-10 border-4 border-b-800'/>
          <div className='absolute w-full h-full top-[30px] left-[30px] bg-b-800 rounded-3xl' aria-hidden="true" />
        </div>
        </div> 
      </article>
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={fireproducts}/>
      <HikvisionCCTV />
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={cctvproducts}/>
      <HikvisionAC />
      <div className="my-32" aria-hidden="true" />
      <ProductsGrid productlist={acproducts}/>
    </main>
  )
}

const Header = () => {
  return (
    <section id="header" className='relative left-0 top-0 w-full h-[300px] xl:h-[460px] bg-b-200 p-10 flex items-center border-b-[20px] border-b-800 rounded-bl-3xl rounded-br-3xl' style={{backgroundImage: 'url(https://www.saltek.eu/files/solution/22/default/Kamerove_systemy-v2.webp)',backgroundSize: 'cover', backgroundPosition: "100% 60%"}}>
        <h1 className='absolute bottom-16 left-[10%] text-3xl xl:text-6xl font-bold text-b-300'>
          Safety & Security <br /> Systems
        </h1>
    </section>
)
}

const Intro = () => {
  return (
    <article className="flex flex-col md:flex-row justify-center my-10 py-10 md:w-3/4 mx-auto">
          <h1 className="md:w-2/5 mx-10 my-5 font-semibold text-3xl xl:text-4xl md:text-right text-b-900">SAFETY & <br className="hidden md:block" />SECURITY</h1>
          <div className="w-[4px] bg-black" aria-hidden="true" />
          <p className="md:w-3/5 mx-10 flex items-center xl:text-[17px]">At Ingenium, we specialize in cutting-edge safety and security systems designed to protect your facility and its occupants. Our systems ensure comprehensive protection through advanced monitoring, access control, and real-time threat detection, enhancing the overall safety and security of your operations.</p>
    </article>
  )
}

export default SafetyandSecurity
