import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";



export default function RoutesApp(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/dashboard" element={<Dashboard_clientes/>}/>        
            <Route path="/cliente" element={<Cliente/>}/>       */}
        </Routes>
    )
}