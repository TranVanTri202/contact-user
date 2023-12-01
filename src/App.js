import DefaulLayout from "./Layout/DefaulLayout"
import publicRoute from "./Layout/Route"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App(){
    return(
        <Router>
            <Routes>
                {publicRoute.map((route, index) =>{
                    return(
                        <Route key={index} path={route.path} element={<DefaulLayout>{<route.component />}</DefaulLayout>} />
                    )
                })}
            </Routes>
        </Router>
    )
}

export default App