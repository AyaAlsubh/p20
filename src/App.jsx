import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './page/Navbar'
import Home from './page/Home'
import Grammar from './page/Grammar'
import'./grammar.css'
import Islam from './page/Islam'
import Assignment from './page/Assignment'

import Islamd from './page/Islamd'


function App() {
      
      return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/grammar" element={<Grammar/>} />
                        <Route path="/islam" element={<Islam/>} />
                        <Route path="/assignment" element={<Assignment/>} />
                       
                        <Route path="/islamd" element={<Islamd/>} />
                        
                        
     
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
  )
}

export default App
