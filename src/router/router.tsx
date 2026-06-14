import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/home.tsx';
import Create from '../pages/create/create.tsx';
import Records from '../pages/records/records.tsx';
import Details from '../pages/details/details.tsx';
import Settings from '../pages/settings/settings.tsx';


const Routers = () => {
    return(
        <>
            <Routes>
                <Route path='/home' element={<Home />}/> 
                <Route path='/create' element={<Create />}/>
                <Route path='/records' element={<Records />}/>
                <Route path='/details' element={<Details />}/>
                <Route path='/settings' element={<Settings />}/>

                {/* Redirect's */}
                <Route path='/' element={<RedirectToPage path='/home' />}/>
            </Routes>
        </>
    )
}
export default Routers

const RedirectToPage = ({path}: {path: string}) => {
    return <Navigate to={path} replace/>
}