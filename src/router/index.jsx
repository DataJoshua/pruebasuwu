import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import App from '../App'
import Otros from '../otros';

function Router(){
    return (
        <>
        
        <BrowserRouter>
            <ul>
                <li><Link to="/otros">to otros</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
            <Routes>
                <Route index element={<App/>}></Route> 
                <Route path="/otros" element={<Otros/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
     
    )
}

export default Router;