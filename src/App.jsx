import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    
      <div>
        <BrowserRouter>
       <NavBar/>
       <Routes>
       <Route path='/' element={<ItemListContainer/>}/>
       <Route path='/category/:idCategory' element ={<ItemListContainer/>}/>{//el idCategory se captura dentro del componente que en este caso es ItemListContainer
       }
       <Route path='/detail/:idProduct' element={<ItemDetailContainer/>}/>{//el idProduct se captura dentro del componente que en este caso es ItemDetailContainer
       }
       </Routes>
       </BrowserRouter>
      </div>
  )
}

export default App
