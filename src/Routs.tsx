import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import { Catalog } from './Pages/Catalog';
import { Form } from './Pages/Form';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/Catalogue' element= {<Catalog />}/>
                <Route path='/Form' element= {<Form/>}/>
            </Routes>
        </Router>
    );
}