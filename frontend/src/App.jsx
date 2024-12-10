import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Container from "./components/layout/Container"

import NavBar from "./components/layout/NavBar"
import Home from "./components/pages/Home"
import ListRoupas from "./components/pages/ListRoupas"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Container>

        <Routes>

          <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}></Route>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/listMaterial' element={<ListMaterial/>}/>
            <Route path='/createMaterial' element={<CreateMaterial/>}/>
            <Route path='/detailMaterial/:cod_material' element={<DetailMaterial/>}/>
            <Route path='/deleteMaterial/:cod_material' element={<DeleteMaterial/>}/>
            <Route path='/updateMaterial/:cod_material' element={<UpdateMaterial/>}/> */}
          </Route>

        </Routes>

      </Container>

    </BrowserRouter>
    </>
  )
}

export default App
