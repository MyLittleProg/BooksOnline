import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";

function AppRouter() {
    return ( 
        <Routes>
            {publicRoutes.map((route)=>
                <Route 
                Component={route.component}
                exact={route.exact}
                path={route.path}
                key={route.path}
                />
            )}
            
        </Routes>
     );
}

export default AppRouter;