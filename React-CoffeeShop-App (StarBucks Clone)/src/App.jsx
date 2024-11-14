import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import Gift from "./Components/Gift.jsx";
import Order from "./Components/Order.jsx";
import Pay from "./Components/Pay.jsx";
import Store from "./Components/Store.jsx";
import Address from "./Components/Address.jsx";
const App=()=>{

    
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="Home" element={<Home/>} />
            <Route path="Gift" element={<Gift/>} />
            <Route path="Order" element={<Order/>} />
            <Route path="Pay" element={<Pay/>} />
            <Route path="Store" element={<Store/>} />
            <Route path="Address" element={<Address/>} />
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
