
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Welcome from './pages/Welcome/Welcome'
import Partner from './pages/Partner/Partner'
import Booking from './pages/Booking/Booking'
import Dishes from './pages/Dishes/Dishes'

function App() {
  

  return (
    <>
     <Header/>
     <Welcome/>
     <Dishes/>
     <Partner/>
     <Booking/>
     <Footer/>  
    </>
  )
}

export default App
