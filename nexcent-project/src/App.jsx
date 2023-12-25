
import './App.css'
import Banner from './Components/Banner/Banner'
import Client from './Components/Client/Client'
import Customers from './Components/Customers/customers'
import Design from './Components/Design/Design'
import Footer from './Components/Footer/Footer'
import Helping from './Components/Helping/Helping'
import Marketing from './Components/Markteing/Marketing'
import Navbar from './Components/Navabr/Navbar'
import Pellentesque from './Components/Pellentesque/Pellentesque'
import Pixelgrade from './Components/Pixelgrade/Pixelgrade'
import System from './Components/System/System'


function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Client/>
     <System/>
     <Pixelgrade/>
     <Helping/>
     <Design/>
     <Customers/>
     <Marketing/>
     <Pellentesque/>
     <Footer/>
    </>
  )
}

export default App
