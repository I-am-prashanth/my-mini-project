import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Enterdata from './components/Enterdata.jsx'
import Overall from './components/Overall.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Results from './outputfiles/Results.jsx'
import OverAllResult from './outputfiles/OverAllResults.jsx'
import Alldataout from './outputfiles/Alldataout.jsx'
const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {path:"",element:<Enterdata />},
            {path:"overall",element:<Overall />},
            {path:"aboutauthors",element:<About />},
            {path:"results",element:<OverAllResult />},
            {path:"overallresults",element:<OverAllResult />},
            {path:"/alldata",element:<Alldataout />}
        ]
    }
]);

createRoot(document.getElementById('root')).render(
 
    <>
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
  
    </>
    
 
)
