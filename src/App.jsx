
import './index.css'
import Success from './pages/Success'
import Home from './pages/Home'
import Error from './pages/Error'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Success' element={<Success/>}/>
  <Route path='/*' element={<Error/>}/>
 </Routes>
 </BrowserRouter>
  )
}
export default App
